/*
 * File:   components/Footer.tsx
 * Author: Yassine Ouzzi
 * Date:   2026-10-27
 *
 * Footer is the block shown at the bottom of every page of the student portal.
 * It takes no props, because the school's contact details never change. It
 * keeps those details together in one object so they are easy to edit, and
 * writes them into the markup. The output is the school's name, address, phone
 * number and email, with the phone and email as tappable links. On a phone the
 * two columns stack/merge into one.
 */

// Data: the school's contact details
const school = {
  name: "New Generation High School",
  address: "1301 16 Ave NW, Calgary, AB T2M 0L4",
  phone: "(403) 555-0142",
  email: "office@newgenerationhs.example",
};

const Footer = () => {
  return (
    // Footer: sits at the bottom of every page
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 md:grid-cols-2 lg:px-8">
        {/* School name */}
        <div>
          <p className="text-lg font-semibold text-white">{school.name}</p>
          <p className="mt-1 text-sm text-gray-400">Student portal</p>
        </div>

        {/* Address, phone and email */}
        <address className="space-y-1 text-sm not-italic">
          <p>{school.address}</p>
          <p>
            Phone:{" "}
            <a
              href={`tel:${school.phone.replace(/[^\d]/g, "")}`}
              className="hover:text-white hover:underline"
            >
              {school.phone}
            </a>
          </p>
          <p>
            Email:{" "}
            <a
              href={`mailto:${school.email}`}
              className="break-all hover:text-white hover:underline"
            >
              {school.email}
            </a>
          </p>
        </address>
      </div>
    </footer>
  );
};

export default Footer;
