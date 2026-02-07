import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import citiusLogo from '../data/cititus-logo.png';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src={citiusLogo}
                alt="NIT Kurukshetra"
                className="h-12 w-12 object-contain bg-white rounded p-1"
              />
              <div>
                <h3 className="text-xl font-bold">CITIUS 2025-26</h3>
                <p className="text-sm text-gray-400">Annual Athletics Meet</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Official website of CITIUS, the annual athletics meet organized by the Physical Education & Sports Section, NIT Kurukshetra.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="flex-shrink-0 mt-1" />
                <span>Sports Complex, National Institute of Technology<br />Kurukshetra, Haryana - 136119</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="flex-shrink-0" />
                <span>sports@nitkkr.ac.in</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="flex-shrink-0" />
                <span>+91-1744-233333</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
             <a
                href="https://www.facebook.com/CitiusNITKKR/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Facebook size={20} />
              </a>

              <a
                href="https://www.instagram.com/nitkkrathletics?igsh=ZDh0eDRpMHJpb3hv"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Instagram size={20} />
              </a>

            
            </div>
            <div className="mt-6">
              <p className="text-sm text-gray-400 mb-2">Quick Links</p>
              <div className="space-y-2">
                <a href="https://www.nitkkr.ac.in" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-400 hover:text-white transition-colors">
                  NIT Kurukshetra
                </a>
                <a href="#registration" className="block text-sm text-gray-400 hover:text-white transition-colors">
                  Register Now
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2026 CITIUS, NIT Kurukshetra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
