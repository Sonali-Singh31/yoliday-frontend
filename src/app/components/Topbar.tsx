// import { Bell } from 'lucide-react';

// const Topbar = () => {
//   return (
//     <div className="flex justify-end items-center w-full px-6 py-4 border-b bg-white">
//       <div className="flex items-center gap-4">
//         <Bell className="text-gray-500" />
//         <div className="flex flex-col text-right">
//           <span className="font-medium text-sm">Lorem Ips</span>
//           <span className="text-xs text-gray-500">Manager</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Topbar;

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Bell } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { auth } from "@/firebase/firebaseConfig";

interface User {
  name: string;
  avatar: string;
  email: string;
}

const Topbar = () => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    // Listen for user state changes (login/logout)
    const handleUserChange = () => {
      const updatedUser = localStorage.getItem("user");
      setUser(updatedUser ? JSON.parse(updatedUser) : null);
    };

    window.addEventListener("userStateChange", handleUserChange);
    return () => {
      window.removeEventListener("userStateChange", handleUserChange);
    };
  }, []);

  const handleLogout = async () => {
    await auth.signOut();
    localStorage.removeItem("user");
    setUser(null);
    window.dispatchEvent(new Event("userStateChange"));
    router.push("/login");
  };

  return (
    <div className="flex justify-between items-center w-full px-6 py-4 border-b bg-white">
      <div />
      <div className="flex items-center gap-6">
        <Bell className="text-gray-500" />

        {user ? (
          <div className="flex items-center gap-3">
            <div className="flex flex-col text-right">
              <span className="font-medium text-sm">{user.name}</span>
              <span className="text-xs text-gray-500">Logged In</span>
            </div>
            <Image
              src={user.avatar}
              alt="Profile"
              width={36}
              height={36}
              className="rounded-full object-cover"
            />
            <button
              onClick={handleLogout}
              className="text-sm text-red-500 border border-red-300 px-3 py-1 rounded-lg hover:bg-red-100"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex gap-4">
            <Link href="/login">
              <button className="text-sm text-blue-600 hover:underline">Log In</button>
            </Link>
            <Link href="/signUp">
              <button className="text-sm text-white bg-blue-600 px-3 py-1 rounded-lg hover:bg-blue-700 transition">
                Sign Up
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Topbar;
