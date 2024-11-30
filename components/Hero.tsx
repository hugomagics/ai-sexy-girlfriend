"use client";

import { Heart } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-pink-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639628735078-ed2f038a193e')] bg-cover bg-center opacity-10"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <Heart className="w-16 h-16 text-pink-500 mx-auto mb-8 animate-pulse" />
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
          Votre Compagne AI Idéale
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Découvrez une connexion unique avec une compagne AI intelligente, attentionnée et engageante.
        </p>
        <Link
          href="/visit/candy-ai"
          className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-full hover:opacity-90 transition-all"
        >
          Rencontrez Votre AI Girlfriend
          <Heart className="ml-2 w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}