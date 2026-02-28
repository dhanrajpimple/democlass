import { Link, useLocation } from "wouter";
import { useEffect } from "react";
import type { ReactNode } from "react";
import { Phone, Mail, MapPin, Menu, X, ChevronRight, GraduationCap } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Layout({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Courses", path: "/courses" },
    { label: "Results", path: "/results" },
    { label: "About Us", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FF]">
      {/* Top Bar */}
      <div className="bg-[#1A1A2E] text-white/80 py-2 px-4 text-xs md:text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-2 hover:text-[#F5A623] transition-colors">
              <Phone className="w-4 h-4 text-[#F5A623]" /> +91 72191 11601
            </span>
            <span className="flex items-center gap-2 hover:text-[#F5A623] transition-colors">
              <Mail className="w-4 h-4 text-[#F5A623]" /> dhanraj.webdev@gmail.com
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#F5A623]" /> 
            <span>123 Knowledge Park, New Delhi, India</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#1A1A2E]/95 backdrop-blur-lg border-b border-white/10 py-3' : 'bg-[#1A1A2E] py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-[#F5A623] flex items-center justify-center text-[#1A1A2E] transform group-hover:rotate-12 transition-transform shadow-lg shadow-[#F5A623]/20">
              <GraduationCap className="w-6 h-6" />
            </div>
            <span className="text-2xl font-serif font-bold text-white tracking-tight">
              Best<span className="text-[#F5A623]">Classes</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                href={link.path}
                className={`text-sm font-medium uppercase tracking-wider transition-colors hover:text-[#F5A623] relative py-2 ${location === link.path ? 'text-[#F5A623]' : 'text-white'}`}
              >
                {link.label}
                {location === link.path && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#F5A623] rounded-full animate-in fade-in" />
                )}
              </Link>
            ))}
            <Link href="/register" className="ml-4">
              <Button className="bg-[#F5A623] hover:bg-[#F5A623]/90 text-[#1A1A2E] font-bold shadow-lg shadow-[#F5A623]/20 hover:-translate-y-0.5 transition-all">
                Register Now <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white hover:text-[#F5A623] p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[72px] z-40 bg-[#1A1A2E]/95 backdrop-blur-xl animate-in slide-in-from-top-2">
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                href={link.path}
                className={`text-lg font-medium p-4 rounded-xl border border-white/5 ${location === link.path ? 'bg-[#F5A623]/10 text-[#F5A623] border-[#F5A623]/20' : 'text-white hover:bg-white/5'}`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/register" className="mt-4">
              <Button size="lg" className="w-full bg-[#F5A623] hover:bg-[#F5A623]/90 text-[#1A1A2E] font-bold">
                Register Now
              </Button>
            </Link>
          </div>
        </div>
      )}

      {/* Page Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#1A1A2E] text-white pt-20 pb-10 border-t-4 border-[#F5A623] relative overflow-hidden">
        {/* Decorative circle */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F5A623]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-md bg-[#F5A623] flex items-center justify-center text-[#1A1A2E]">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="text-2xl font-serif font-bold tracking-tight">
                Best<span className="text-[#F5A623]">.</span>
              </span>
            </Link>
            <p className="text-white/60 mb-6 font-light leading-relaxed">
              Empowering students to achieve their dreams in engineering and medical entrance examinations with unparalleled guidance and expert faculty.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map(link => (
                <li key={link.path}>
                  <Link href={link.path} className="text-white/60 hover:text-[#F5A623] hover:pl-2 transition-all flex items-center gap-2">
                    <ChevronRight className="w-3 h-3 text-[#F5A623]" /> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Courses</h4>
            <ul className="space-y-3">
              <li><Link href="/courses" className="text-white/60 hover:text-[#F5A623] hover:pl-2 transition-all">NEET Target Batch</Link></li>
              <li><Link href="/courses" className="text-white/60 hover:text-[#F5A623] hover:pl-2 transition-all">JEE Advanced Pinnacle</Link></li>
              <li><Link href="/courses" className="text-white/60 hover:text-[#F5A623] hover:pl-2 transition-all">Pre-Foundation Class 9-10</Link></li>
              <li><Link href="/courses" className="text-white/60 hover:text-[#F5A623] hover:pl-2 transition-all">Crash Courses</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-4 text-white/60">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#F5A623] shrink-0 mt-0.5" />
                <span>123 Knowledge Park, Vasant Kunj, New Delhi 110070</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#F5A623] shrink-0" />
                <span>+91 72191 11601</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#F5A623] shrink-0" />
                <span>dhanraj.webdev@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-white/10 text-center text-white/40 text-sm">
          <p>&copy; {new Date().getFullYear()} Best Classes. All rights reserved.</p>
        </div>
      </footer>

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        {/* WhatsApp Button */}
        <a 
          href="https://wa.me/917219111601" 
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#25D366] rounded-full shadow-lg shadow-[#25D366]/30 flex items-center justify-center text-white hover:scale-110 hover:shadow-xl transition-all animate-bounce"
          aria-label="Contact on WhatsApp"
        >
          <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        </a>
        {/* Call Button */}
        <a 
          href="tel:+917219111601" 
          className="w-14 h-14 bg-[#1A1A2E] rounded-full shadow-lg shadow-[#1A1A2E]/30 flex items-center justify-center text-white hover:scale-110 hover:shadow-xl transition-all"
          aria-label="Call Us"
        >
          <Phone className="w-7 h-7" />
        </a>
      </div>
    </div>
  );
}
