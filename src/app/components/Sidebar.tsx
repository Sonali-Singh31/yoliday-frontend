'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, BookOpen, Edit, User } from 'lucide-react';

const Sidebar = () => {
  const pathname = usePathname();

  const links = [
    { name: 'Dashboard', href: '/dashboard', icon: <Home size={20} /> },
    { name: 'Portfolio', href: '/portfolio', icon: <BookOpen size={20} /> },
    { name: 'Inputs', href: '/inputs', icon: <Edit size={20} /> },
    { name: 'Profile', href: '/profile', icon: <User size={20} /> },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 h-screen bg-orange-600 text-white p-6">
        <div className="text-2xl font-bold mb-10">LOGO</div>
        <ul className="space-y-4">
          {links.map(link => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg ${
                  pathname === link.href ? 'bg-white text-orange-600' : 'hover:bg-orange-500'
                }`}
              >
                {link.icon}
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      {/* Mobile Taskbar */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-md flex justify-around items-center py-2 md:hidden z-50">
        {links.map(link => (
          <Link
            key={link.name}
            href={link.href}
            className={`flex flex-col items-center text-xs ${
              pathname === link.href ? 'text-orange-600 font-semibold' : 'text-gray-600'
            }`}
          >
            {link.icon}
            {link.name}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
