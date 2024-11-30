"use client";

import { Heart } from "lucide-react";
import Link from "next/link";

export default function CallToAction() {
  return (
    <div className="my-12 text-center">
      <Link
        href="/visit/candy-ai"
        className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-full hover:opacity-90 transition-all"
      >
        Découvrez votre AI Girlfriend
        <Heart className="ml-2 w-5 h-5" />
      </Link>
    </div>
  );
}