import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Introducing Terrazone',
};

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="max-w-3xl">
        <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">
          <p>Introducing Terrazone</p>
          <p> Revolutionize Global Workforce Management</p>
        </h1>

        <div className="my-4">
          <img src="images/terrazone.png" alt="TerraZone" />
        </div>
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0">
          {' '}
          Challenges: How to increase global connectivity{' '}
        </h2>

        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Working in a remote company across different time zones presents a
          unique set of challenges. Coordinating meetings and ensuring real-time
          collaboration can be particularly difficult, communication delays can
          slow project progress, asynchronous communication becomes the norm,
          and urgent issues may not be addressed promptly. Building a cohesive
          team culture is more challenging when spontaneous interactions and
          face-to-face meetings are rare, balancing these challenges requires
          strategic planning, flexible work schedules, and robust communication
          tools to bridge the gaps caused by geographical time differences.
          Especially when timezones change, and colleagues change location,
          currently available tools use features which focus on scheduling,
          without focusing enough on the single biggest blocker to cohesive
          working, visibility.
        </p>

        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Enter <strong>Terrazone</strong>—the solution designed to streamline
          and optimize global workforce management. With its intuitive design,
          robust features, and seamless integration, Terrazone is set to become
          an indispensable tool for companies looking to enhance productivity,
          transparency, and collaboration. By making it available to open
          source, we aim for this project to be adaptable to the emerging needs
          of dynamic teams who aim to break the mold of traditional working
          environments in a meaningful and impactful way.
        </p>

        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0">
          {' '}
          Main Screen: A Global Perspective{' '}
        </h2>

        <p className="leading-7 [&:not(:first-child)]:mt-6">
          The main screen of Terrazone features a dynamic globe at the centre,
          providing a visual representation of your global workforce. Each
          employee is represented as a dot on the globe, making it easy to see
          at a glance where your team members are located. The company name is
          prominently displayed in the top left corner, while the local time for
          each user is conveniently shown on the right.{' '}
        </p>

        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0">
          Login/Register Screen: Simplified Access
        </h2>

        <p className="leading-7 [&:not(:first-child)]:mt-6">
          {`Access to Terrazone is secure and straightforward. Users can easily
          log in or register using their email and password. This ensures that
          only authorized personnel can access the platform, maintaining the
          integrity and security of your company's data.`}
        </p>

        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0">
          User Updating Screen: Tailored to Individual Needs
        </h2>

        <div className="leading-7 [&:not(:first-child)]:mt-6">
          The user updating screen empowers employees to manage their own
          profiles. Users can:
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>
              <strong>Update Time Zone:</strong> Set their current time zone to
              ensure accurate scheduling and collaboration.
            </li>
            <li>
              <strong>Manage Weekly Schedule:</strong> Specify their
              availability for each weekday, making it easier for teams to
              coordinate meetings and projects.
            </li>
            <li>
              <strong>Control Data Visibility:</strong> Choose whether their
              schedule is public (visible to everyone) or private (visible only
              to pre-approved users). Pre-approved users are a select list of
              emails managed by the system admin.
            </li>
          </ul>
        </div>

        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0">
          Flexible Scheduling
        </h2>

        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Users can easily set their working hours on a weekly basis and control
          the visibility of their schedules. Whether you need to coordinate with
          in-team members or make certain schedules public for broader
          transparency, Terrazone offers the flexibility to meet your needs.
        </p>

        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0">
          Get Started with Terrazone Today
        </h2>

        <p className="leading-7 [&:not(:first-child)]:mt-6">
          {`Embrace the future of global workforce management with Terrazone. Our
          innovative platform is designed to simplify scheduling, enhance
          transparency, and improve collaboration across different time zones.
          Whether you're a small business or a large enterprise, Terrazone
          provides the tools you need to manage your global team effectively.
          Visit our website to learn more and start your journey with Terrazone
          today. Enhance your team's productivity and connectivity with the
          power of innovative technology.`}
        </p>
      </div>
    </main>
  );
}
