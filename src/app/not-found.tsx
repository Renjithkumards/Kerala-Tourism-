import React from "react";
import Link from "next/link";
import { Compass, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16 text-center">
      <div className="max-w-md mx-auto">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-kerala-100 text-kerala-800 flex items-center justify-center mb-6 text-3xl">
          🌴
        </div>
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
          Page Not Found
        </h1>
        <p className="mt-3 text-base text-gray-600 leading-relaxed">
          Looks like you&apos;ve wandered off the backwater trail! The page you are looking for doesn&apos;t exist or has moved.
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-kerala-700 hover:bg-kerala-800 text-white px-6 py-3 rounded-xl font-semibold text-sm shadow transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
