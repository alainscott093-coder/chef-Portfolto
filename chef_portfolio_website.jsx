// =============================
// CHEF PORTFOLIO – NEXT.JS + VERCEL READY PROJECT
// =============================

// 1️⃣ PACKAGE.JSON
// Create a file called: package.json

{
  "name": "chef-portfolio",
  "private": true,
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "14.2.5",
    "react": "18.3.1",
    "react-dom": "18.3.1",
    "framer-motion": "^11.0.0",
    "lucide-react": "^0.378.0"
  }
}

// =============================
// 2️⃣ NEXT CONFIG
// Create: next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.unsplash.com',
      },
    ],
  },
};

module.exports = nextConfig;

// =============================
// 3️⃣ APP FOLDER STRUCTURE
// Create folder: app
// Inside app create: page.tsx

// =============================
// app/page.tsx
// =============================

"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Instagram } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="font-sans text-gray-800">

      {/* HERO */}
      <section className="min-h-screen bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556910103-1c02745aae4d')" }}>
        <div className="bg-black/60 p-10 rounded-2xl text-center">
          <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-5xl font-bold mb-4">
            Chef Alain Scott
          </motion.h1>
          <p className="text-xl">Private Yacht & Fine Dining Chef</p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">About</h2>
        <p className="text-lg leading-relaxed">
          Passionate yacht and fine dining chef specializing in Mediterranean cuisine, bespoke menus, and luxury hospitality. Experienced aboard superyachts and high-end establishments delivering refined culinary experiences.
        </p>
      </section>

      {/* MENU */}
      <section className="bg-gray-100 py-20 px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Signature Dishes</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "Seared Tuna with Citrus",
            "Lobster Ravioli",
            "Mediterranean Mezze",
            "Herb Crusted Lamb",
            "French Pastries",
            "Charcuterie Boards"
          ].map((dish, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-lg text-center">
              {dish}
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Gallery</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1,2,3,4,5,6].map((img) => (
            <Image
              key={img}
              src={`https://source.unsplash.com/600x600/?fine-dining,food&sig=${img}`}
              alt="Dish"
              width={600}
              height={600}
              className="rounded-2xl object-cover w-full h-64"
            />
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-gray-900 text-white py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Contact</h2>
        <p className="flex justify-center items-center gap-2"><Mail size={18}/> chefalain@email.com</p>
        <p className="flex justify-center items-center gap-2"><Phone size={18}/> +27 00 000 0000</p>
        <p className="flex justify-center items-center gap-2"><Instagram size={18}/> @chefalainscott</p>
      </section>

    </main>
  );
}
