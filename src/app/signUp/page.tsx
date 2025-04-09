"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { signInWithPopup } from "firebase/auth";
import { auth, provider, db } from "../../firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import toast, { Toaster } from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import Link from "next/link";
import bg from "../../../public/images/SignUpBG.png";

export default function SignUp() {
  const router = useRouter();

  const signUpWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      if (!user || !user.email) {
        throw new Error("No user data found");
      }

      const email = user.email.toLowerCase();

      // ✅ Check if user already exists
      const userDoc = await getDoc(doc(db, "users", email));
      if (userDoc.exists()) {
        await auth.signOut();
        toast.error("User already exists. Please log in instead.");
        setTimeout(() => router.push("/login"), 1000);
        return;
      }

      // ✅ Store user temporarily in localStorage
      localStorage.setItem(
        "tempUser",
        JSON.stringify({
          email: user.email,
          name: user.displayName,
          avatar: user.photoURL,
        })
      );

      toast.success("Almost there! Fill out the onboarding form.");
      setTimeout(() => router.push("/onboarding"), 500);
    } catch (err) {
      console.error("Google sign-up failed:", err);
      toast.error("Signup failed. Try again.");
    }
  };

  return (
    <>
      <Toaster position="top-center" />
      <div
        className="w-full h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <div className="w-full h-full backdrop-blur-md flex justify-center items-center px-4">
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
              Create your account
            </h2>

            <button
              onClick={signUpWithGoogle}
              className="flex items-center justify-center w-full gap-2 border border-sky-400 text-white bg-[#1b1250] py-2 rounded-xl hover:bg-[#2a1d87] transition duration-300"
            >
              <FaGoogle className="text-red-500" />
              Sign up with Google
            </button>

            <p className="text-center text-sm text-gray-300 mt-6">
              Already have an account?{" "}
              <Link href="/login">
                <span className="text-yellow-300 hover:underline">Log in</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
