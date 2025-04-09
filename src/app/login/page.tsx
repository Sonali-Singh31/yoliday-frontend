"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { signInWithPopup } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, provider, db } from "../../firebase/firebaseConfig";
import toast, { Toaster } from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import bg from "../../../public/images/LoginBG.png";

export default function Login() {
  const router = useRouter();

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      if (!user || !user.email) {
        throw new Error("No user data available");
      }

      const email = user.email.toLowerCase();

      const userDoc = await getDoc(doc(db, "users", email));
      if (!userDoc.exists()) {
        await auth.signOut();
        toast.error("User not found. Please sign up first.");
        setTimeout(() => router.push("/signUp"), 1000);
        return;
      }

      localStorage.setItem(
        "user",
        JSON.stringify({
          email: user.email,
          name: user.displayName,
          avatar: user.photoURL,
        })
      );

      toast.success("Logged in successfully 🎉");
      window.dispatchEvent(new Event("userStateChange"));
      setTimeout(() => {
        router.push("/");
      }, 500);
    } catch (err: any) {
      console.error("Error logging in:", err);
      toast.error(err.message || "Google sign-in failed.");
    }
  };

  return (
    <>
      <Toaster position="top-center" />
      <div
        className="w-full h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <div className="w-full h-full backdrop-blur-sm flex justify-center items-center px-4">
          <div className="bg-[#180F40]/90 shadow-lg rounded-2xl p-8 w-full max-w-sm">
            <div className="flex justify-center mb-6">
              <Image
                src="/images/fad_logo-juce.png"
                alt="Logo"
                width={120}
                height={120}
                className="object-contain"
              />
            </div>

            <h2 className="text-3xl font-bold text-white text-center mb-4">
              Welcome Back to Yoliday
            </h2>

            <button
              onClick={signInWithGoogle}
              className="flex items-center justify-center w-full gap-2 border border-sky-400 text-white bg-[#1b1250] py-2 rounded-xl hover:bg-[#2a1d87] transition duration-300"
            >
              <FaGoogle className="text-red-500" />
              Log in with Google
            </button>

            <p className="text-center text-sm text-gray-300 mt-6">
              Don’t have an account?{" "}
              <Link href="/signUp">
                <span className="text-yellow-300 hover:underline">Sign up</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
