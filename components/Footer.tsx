'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-medium mb-4">Dr. Sarah Johnson</h3>
            <p className="text-gray-300 text-sm mb-4">
              Licensed Clinical Psychologist providing professional psychological counseling services in a supportive, confidential environment.
            </p>
            <div className="flex space-x-3">
              <button className="w-8 h-8 flex items-center justify-center bg-gray-700 hover:bg-teal-600 rounded transition-colors cursor-pointer">
                <i className="ri-facebook-line text-sm"></i>
              </button>
              <button className="w-8 h-8 flex items-center justify-center bg-gray-700 hover:bg-teal-600 rounded transition-colors cursor-pointer">
                <i className="ri-linkedin-line text-sm"></i>
              </button>
              <button className="w-8 h-8 flex items-center justify-center bg-gray-700 hover:bg-teal-600 rounded transition-colors cursor-pointer">
                <i className="ri-twitter-line text-sm"></i>
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#about" className="text-gray-300 hover:text-white transition-colors cursor-pointer">About</Link></li>
              <li><Link href="#services" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Services</Link></li>
              <li><Link href="#approach" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Approach</Link></li>
              <li><Link href="#contact" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Contact Info</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p>123 Wellness Boulevard, Suite 456</p>
              <p>San Francisco, CA 94102</p>
              <p>(555) 123-4567</p>
              <p>hello@drsarahjohnson.com</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© 2024 Dr. Sarah Johnson. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-white transition-colors cursor-pointer">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors cursor-pointer">Terms</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}