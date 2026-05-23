import Link from 'next/link';
import { navLinks } from '@/constants';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-pink-50 pt-20 pb-10 px-8 md:px-20 text-gray-700 relative z-10 border-t border-pink-100 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-pink-300 rounded-full flex items-center justify-center text-white font-bold text-xl">
              N
            </div>
            <span className="text-2xl font-extrabold text-pink-400 tracking-tight">Nozomi</span>
          </div>
          <p className="text-gray-500 leading-relaxed text-sm">
            Nurturing little minds and inspiring big dreams in a safe, creative, and joyful environment.
          </p>
          <div className="flex gap-4 mt-2">
            <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-pink-300 hover:bg-pink-300 hover:text-white transition-colors shadow-sm">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-pink-300 hover:bg-pink-300 hover:text-white transition-colors shadow-sm">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-pink-300 hover:bg-pink-300 hover:text-white transition-colors shadow-sm">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-6">
          <h3 className="text-lg font-bold text-gray-800">Quick Links</h3>
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.route}>
                <Link href={link.route} className="text-gray-500 hover:text-pink-400 transition-colors font-medium">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div className="flex flex-col gap-6">
          <h3 className="text-lg font-bold text-gray-800">Contact Us</h3>
          <ul className="flex flex-col gap-4 text-gray-500 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-pink-300 shrink-0 mt-0.5" />
              <span>123 Blossom Avenue<br />Springfield, SP 12345</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-pink-300 shrink-0" />
              <span>(555) 123-4567</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-pink-300 shrink-0" />
              <span>hello@nozomipreschool.com</span>
            </li>
          </ul>
        </div>

        {/* Newsletter / CTA */}
        <div className="flex flex-col gap-6">
          <h3 className="text-lg font-bold text-gray-800">Join Our Family</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Subscribe to our newsletter for updates on admissions and school events.
          </p>
          <div className="flex flex-col gap-2">
            <input 
              type="email" 
              placeholder="Email address" 
              className="px-4 py-3 rounded-xl bg-white border border-pink-100 focus:outline-none focus:ring-2 focus:ring-pink-300 text-sm"
            />
            <button className="bg-pink-400 hover:bg-pink-500 text-white font-semibold py-3 rounded-xl transition-colors shadow-md">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-pink-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
        <p>© {new Date().getFullYear()} Nozomi Preschool. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="#" className="hover:text-pink-400 transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-pink-400 transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
