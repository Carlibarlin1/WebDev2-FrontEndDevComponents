/*
 * File:   components/Navbar.tsx
 * Author: Yassine Ouzzi
 * Date:   2026-10-27
 *
 * Navbar is the bar shown across the top of every page of the New Generation
 * High School student portal. It takes no props, because the school name and
 * the three links never change. It keeps the links in a small array and draws
 * each one with .map(). Each link is a plain anchor (href="#id") that jumps to
 * the section of the page with the matching id. The output is a sticky bar
 * with the school name on one side and the links on the other; on a phone the
 * links drop to a second row.
 */

// Data: the links the navbar shows
const navLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Students", href: "#students" },
  { label: "Add a student", href: "#add-student" },
];

const Navbar = () => {
  return (
    // Bar: sticks to the top while the page scrolls
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-3 sm:px-6 md:h-16 md:flex-row md:items-center md:justify-between md:py-0 lg:px-8">
        {/* School name */}
        <a href="#overview" className="text-xl font-bold text-gray-900">
          New Generation High School
        </a>

        {/* Links: each one jumps to a section of the page */}
        <ul className="flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
