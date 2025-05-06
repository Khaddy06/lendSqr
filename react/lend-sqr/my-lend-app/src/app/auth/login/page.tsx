"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import illustration from "../../assets/illustration.png";
import Logo from "../../assets/logo.png";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate login validation (replace with real logic)
    if (email && password) {
      router.push("/dashboard/user"); // ✅ Redirect to dashboard
    } else {
      alert("Please enter email and password");
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left section with logo and illustration */}
      <div className="w-full md:w-1/2 p-8 flex flex-col bg-gray-50 pt-5">
        <div className="flex md:px-12  mb-20">
          <Image
            src={Logo}
            alt="Lendsqr Logo"
            width={174}
            height={36}
            className="mt-10"
          />
        </div>
        <div className="flex items-center justify-center flex-1">
          <Image
            src={illustration}
            alt="Login Illustration"
            width={600}
            height={400}
            className="max-w-full h-auto"
          />
        </div>
      </div>

      {/* Right section with login form */}
      <div className="w-full md:w-1/2 p-8 flex items-center justify-center md:mt-24 bg-white">
        <div className="w-full max-w-md">
          <h1 className="text-4xl font-bold text-[#213f7d] mb-2">Welcome!</h1>
          <p className="text-[#545f7d] mb-10">Enter details to login.</p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-4 border border-[#545f7d]/20 rounded-md focus:outline-none focus:ring-1 focus:ring-[#39cdcc]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                className="w-full p-4 border border-[#545f7d]/20 rounded-md focus:outline-none focus:ring-1 focus:ring-[#39cdcc]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#39cdcc] font-bold text-xs uppercase"
              >
                Show
              </button>
            </div>

            <div>
              <Link
                href="/forgot-password"
                className="text-[#39cdcc] font-bold text-xs uppercase"
              >
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-[#39cdcc] text-white py-4 rounded-md font-bold uppercase"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
