// src/app/components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-100 shadow-md">
      <div className="text-2xl font-bold text-gray-800">
        <Link href="/">Logo</Link>
      </div>
      <ul className="flex gap-6 text-gray-700 text-lg">
        <li>
          <Link href="/about" className="hover:text-blue-500 transition-colors duration-200">About</Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-blue-500 transition-colors duration-200">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
