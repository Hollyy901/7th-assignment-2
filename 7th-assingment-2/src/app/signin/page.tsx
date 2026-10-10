"use client";

import { useState, Suspense } from "react";
import { signIn } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await signIn.email({
      email,
      password,
      callbackURL: callbackUrl,
    });

    if (error) {
      toast.error(error.message || "সাইন ইন ব্যর্থ হয়েছে!");
      setLoading(false);
    } else {
      toast.success("সাইন ইন সফল হয়েছে! 🎉");
      router.push(callbackUrl);
    }
  };

  const handleGoogleSignIn = async () => {
    await signIn.social({
      provider: "google",
      callbackURL: callbackUrl,
    });
  };

  const handleGitHubSignIn = async () => {
    await signIn.social({
      provider: "github",
      callbackURL: callbackUrl,
    });
  };

  return (
    <div className="card bg-white border shadow-lg w-full max-w-md">
      <div className="card-body">
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold text-gray-800">সাইন ইন করুন</h1>
          <p className="text-gray-500 text-sm mt-1">আপনার অ্যাকাউন্টে প্রবেশ করুন</p>
        </div>

        <div className="space-y-2 mb-4">
          <button onClick={handleGoogleSignIn} className="btn btn-outline w-full gap-2">
            Google দিয়ে সাইন ইন
          </button>
          <button onClick={handleGitHubSignIn} className="btn btn-outline w-full gap-2">
            GitHub দিয়ে সাইন ইন
          </button>
        </div>

        <div className="divider text-gray-400 text-sm">অথবা ইমেইল দিয়ে</div>

        <form onSubmit={handleEmailSignIn} className="space-y-4">
          <div className="form-control">
            <label className="label"><span className="label-text font-medium">ইমেইল</span></label>
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
            <label className="label"><span className="label-text font-medium">পাসওয়ার্ড</span></label>
            <input
              type="password"
              placeholder="••••••••"
              className="input input-bordered w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-success text-white w-full" disabled={loading}>
            {loading ? <span className="loading loading-spinner loading-sm"></span> : "সাইন ইন"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-4">
          অ্যাকাউন্ট নেই? <Link href="/signup" className="text-green-600 font-semibold hover:underline">রেজিস্টার করুন</Link>
        </p>
      </div>
    </div>
  );
}

export default function SignInPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-8">
      <Suspense fallback={<span className="loading loading-spinner loading-lg text-green-600"></span>}>
        <SignInForm />
      </Suspense>
    </div>
  );
}