"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronDown, Menu, X } from "lucide-react"
import Link from "next/link"
import TypewriterEffect from "@molecules/TypewriterEffect"
import { Button } from "./components/ui/button"
import DigitalRain from "@molecules/DigitalRain"

export default function MatrixWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Simulate the Matrix "wake up" effect
    const timer = setTimeout(() => {
      setShowContent(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-black text-[#00FF41] font-mono overflow-hidden relative">
      {/* Digital Rain Canvas Background */}
      <DigitalRain />

      {/* Content Container */}
      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-[#00FF41]/30 backdrop-blur-sm bg-black/70">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold tracking-wider glitch-text">
              <span className="text-[#00FF41]">THE MATRIX</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {["Home", "About", "Characters", "Quotes", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-white transition-colors duration-300 tracking-wide"
                >
                  {item}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-[#00FF41]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden border-t border-[#00FF41]/30 backdrop-blur-sm bg-black/90">
              <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                {["Home", "About", "Characters", "Quotes", "Contact"].map((item) => (
                  <Link
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-white transition-colors duration-300 tracking-wide py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </nav>
          )}
        </header>

        {/* Main Content */}
        <main>
          {/* Hero Section */}
          <section id="home" className="min-h-[90vh] flex flex-col items-center justify-center text-center px-4 py-20">
            <div className={`transition-opacity duration-1000 ${showContent ? "opacity-100" : "opacity-0"}`}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
                <TypewriterEffect text="Welcome to the Matrix" delay={100} startDelay={2000}/>
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-[#00FF41]/80">
                <TypewriterEffect
                  text="What is real? How do you define real? If you're talking about what you can feel, what you can smell, what you can taste and see, then real is simply electrical signals interpreted by your brain."
                  delay={50}
                  startDelay={4500}
                />
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button className="bg-[#00FF41] text-black hover:bg-[#00FF41]/80 border border-[#00FF41] px-8 py-6 text-lg">
                  Take the Red Pill
                </Button>
                <Button
                  variant="outline"
                  className="border-[#00FF41] text-[#00FF41] hover:bg-[#00FF41]/10 px-8 py-6 text-lg"
                >
                  Take the Blue Pill
                </Button>
              </div>
            </div>
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ChevronDown size={32} />
            </div>
          </section>


          {/* Contact Section */}
          <section id="contact" className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center tracking-wider">
                <span className="border-b-2 border-[#00FF41] pb-2">Contact Us</span>
              </h2>
              <div className="max-w-md mx-auto">
                <div className="border border-[#00FF41]/30 bg-black/50 p-6">
                  <p className="mb-6 text-center">Leave a message for the Oracle</p>
                  <form className="space-y-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Name"
                        className="w-full bg-black border border-[#00FF41]/50 p-3 text-[#00FF41] focus:border-[#00FF41] focus:outline-none"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full bg-black border border-[#00FF41]/50 p-3 text-[#00FF41] focus:border-[#00FF41] focus:outline-none"
                      />
                    </div>
                    <div>
                      <textarea
                        placeholder="Message"
                        rows={4}
                        className="w-full bg-black border border-[#00FF41]/50 p-3 text-[#00FF41] focus:border-[#00FF41] focus:outline-none"
                      ></textarea>
                    </div>
                    <Button className="w-full bg-[#00FF41] text-black hover:bg-[#00FF41]/80 border border-[#00FF41]">
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-[#00FF41]/30 backdrop-blur-sm bg-black/70 py-8">
          <div className="container mx-auto px-4 text-center">
            <p className="mb-4">© {new Date().getFullYear()} The Matrix | This is not the real world</p>
            <p className="text-sm text-[#00FF41]/70">"Remember, all I'm offering is the truth. Nothing more."</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
