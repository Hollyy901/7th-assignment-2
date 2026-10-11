"use client";

import { useState } from "react";
import { signUp, signIn } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await signUp.email({
      name,
      email,
      password,
    });

    if (error) {
      toast.error(error.message || "রেজিস্ট্রেশন ব্যর্থ হয়েছে!");
      setLoading(false);
    } else {
      toast.success("রেজিস্ট্রেশন সফল! সাইন ইন পেজে যাচ্ছে...");
      router.push("/signin");
    }
  };

  const handleGoogleSignUp = async () => {
    await signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  const handleGitHubSignUp = async () => {
    await signIn.social({
      provider: "github",
      callbackURL: "/",
    });
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-8">
      <div className="card bg-white border shadow-lg w-full max-w-md">
        <div className="card-body">
          <div className="text-center mb-4">
            <h1 className="text-2xl font-bold text-gray-800">
              অ্যাকাউন্ট তৈরি করুন
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              বাজার দর-এ আপনাকে স্বাগতম
            </p>
          </div>

          <div className="space-y-2 mb-4">
            <button
              type="button"
              onClick={handleGoogleSignUp}
              className="btn btn-outline w-full gap-2"
            >
              Google দিয়ে সাইন আপ
            </button>

            <button
              type="button"
              onClick={handleGitHubSignUp}
              className="btn btn-outline w-full gap-2"
            >
              GitHub দিয়ে সাইন আপ
            </button>
          </div>

          <div className="divider text-gray-400 text-sm">অথবা ইমেইল দিয়ে</div>

          <form onSubmit={handleSignUp} className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">নাম</span>
              </label>
              <input
                type="text"
                placeholder="আপনার নাম"
                className="input input-bordered w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">ইমেইল</span>
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                className="input input-bordered w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">পাসওয়ার্ড</span>
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="input input-bordered w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={8}
              />
              <label className="label">
                <span className="label-text-alt text-gray-400">
                  কমপক্ষে ৮ অক্ষর
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="btn btn-success text-white w-full"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner loading-sm"></span>
              ) : (
                "রেজিস্টার করুন"
              )}
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-4">
            ইতোমধ্যে অ্যাকাউন্ট আছে?{" "}
            <Link href="/signin" className="text-green-600 font-semibold hover:underline">
              সাইন ইন করুন
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}