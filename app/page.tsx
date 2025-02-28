"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronDown, Contact, FunctionSquareIcon, Menu, X } from "lucide-react"
import Link from "next/link"
import TypewriterEffect from "@molecules/TypewriterEffect"
import { Button } from "./components/ui/button"
import DigitalRain from "@molecules/DigitalRain"
import Header from "@molecules/Header"
import Footer from "@molecules/Footer"
import Hero from "@molecules/Hero"
import AboutSection from "@molecules/AboutSection"
import ContactSection from "@molecules/ContactSection"
import CharacterSection from "@molecules/CharacterSection"
import QuoteSection from "@molecules/QuoteSection"

export default function MatrixWebsite() {

  return (
    <div className="min-h-screen bg-black text-[#00FF41] font-mono overflow-hidden relative">
      {/* Digital Rain Canvas Background */}
      <DigitalRain />

      {/* Content Container */}
      <div className="relative z-10">
        <Header />

        {/* Main Content */}
        <main>
          {/* Hero Section */}
          <Hero />

          {/* About Section */}
          <AboutSection />

          <CharacterSection />

          <QuoteSection />
          {/* Contact Section */}
          <ContactSection />
          
          </main>

        <Footer />
      </div>
    </div>
  )
}
