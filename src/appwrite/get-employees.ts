import { database } from './config';
import { z } from 'zod';

const literalSchema = z.union([z.string(), z.number(), z.boolean(), z.null()]);

type Literal = z.infer<typeof literalSchema>;
type Json = Literal | { [key: string]: Json } | Json[];
const jsonSchema: z.ZodType<Json> = z.lazy(() =>
  z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)])
);

const stringToJSONSchema = z
  .string()
  .transform((str, ctx): z.infer<typeof jsonSchema> => {
    try {
      return JSON.parse(str);
    } catch (e) {
      ctx.addIssue({ code: 'custom', message: 'Invalid JSON' });
      return z.NEVER;
    }
  });

const employeeSchema = z.object({
  times: stringToJSONSchema.pipe(
    z.object({
      from: z.string(),
      to: z.string(),
      saturday: z.boolean(),
      sunday: z.boolean(),
      monday: z.boolean(),
      tuesday: z.boolean(),
      wednesday: z.boolean(),
      thursday: z.boolean(),
      friday: z.boolean(),
    })
  ),
  timezone: z.string(),
  location: z.string(),
  photo_id: z.string(),
  name: z.string(),
  id: z.string(),
  $id: z.string(),
  $createdAt: z.string(),
  $updatedAt: z.string(),
  $permissions: z.array(z.string()),
  $databaseId: z.string(),
  $collectionId: z.string(),
});

const employeesSchema = z.array(employeeSchema);

export const getEmployees = async () => {
  try {
    const data = await database.listDocuments('terrazone', 'employees');

    return employeesSchema.parse(data.documents);
  } catch (err) {
    console.error(err);
  }
};

export type Employee = z.infer<typeof employeeSchema>;
