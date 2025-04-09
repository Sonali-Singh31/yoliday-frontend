// src/app/components/Sidebar.tsx

const Sidebar = () => {
    return (
      <aside className="w-64 h-screen bg-gray-800 text-white p-6 hidden md:block">
        <ul className="space-y-4 text-lg">
          <li className="hover:text-blue-400 transition-colors duration-200 cursor-pointer">Dashboard</li>
          <li className="hover:text-blue-400 transition-colors duration-200 cursor-pointer">Settings</li>
          <li className="hover:text-blue-400 transition-colors duration-200 cursor-pointer">Profile</li>
        </ul>
      </aside>
    );
  };
  
  export default Sidebar;
  