import { Mail, Phone, MapPin, Clock, Building2 } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us for any queries or information about CITIUS 2025-26
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-3">
                <Building2 className="text-blue-600" size={28} />
                <span>Physical Education & Sports Section</span>
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white rounded-lg shadow-sm">
                    <MapPin className="text-blue-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 mb-1">Address</p>
                    <p className="text-gray-700">
                      Sports Complex<br />
                      National Institute of Technology<br />
                      Kurukshetra, Haryana - 136119<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white rounded-lg shadow-sm">
                    <Phone className="text-blue-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 mb-1">Phone</p>
                    <p className="text-gray-700">+91-1744-233-309</p>
                    <p className="text-gray-700">+91-1744-233-310 (Sports Section)</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white rounded-lg shadow-sm">
                    <Mail className="text-blue-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 mb-1">Email</p>
                    <p className="text-gray-700">sports@nitkkr.ac.in</p>
                    {/* <p className="text-gray-700">citius@nitkkr.ac.in</p> */}
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white rounded-lg shadow-sm">
                    <Clock className="text-blue-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 mb-1">Office Hours</p>
                    <p className="text-gray-700">Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p className="text-gray-700">Saturday: 9:00 AM - 1:00 PM</p>
                    <p className="text-gray-600 text-sm mt-1">Sunday & Holidays: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-4">Quick Information</h4>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start space-x-2">
                  <span className="text-green-600 font-bold mt-1">•</span>
                  <span>For registration queries, email sports@nitkkr.ac.in</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-green-600 font-bold mt-1">•</span>
                  <span>For event-specific questions, contact the Sports Section</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-green-600 font-bold mt-1">•</span>
                  <span>Visit the Sports Complex office for in-person assistance</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-gray-50 rounded-xl p-8 h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Find Us on Campus</h3>
              <div className="bg-white rounded-lg overflow-hidden shadow-lg mb-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3473.8947612!2d76.8174!3d29.9456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e3f4b0c0b7b7b%3A0x7f7f7f7f7f7f7f7f!2sNIT%20Kurukshetra!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="NIT Kurukshetra Location"
                ></iframe>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 text-white">
                <h4 className="font-semibold text-lg mb-4">Organizing Committee</h4>
                <div className="space-y-3">
                  <div>
                    <p className="text-blue-100 text-sm">Faculty Coordinator</p>
                    <p className="font-semibold">Lt. Shabuddin</p>
                    <p className="text-blue-200 text-sm">Physical Education Department</p>
                  </div>
                  <div>
                    <p className="text-blue-100 text-sm">Student Coordinator</p>
                    <p className="font-semibold">Lokesh</p>
                    <p className="text-blue-200 text-sm">Athletics Team Captain</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                <p className="text-yellow-900 text-sm">
                  <span className="font-semibold">Note:</span> For emergency situations during the event,
                  contact numbers will be displayed at the Sports Complex venue.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Connected</h3>
          <p className="text-gray-300 mb-6">
            Follow us on social media for live updates, results, and highlights during CITIUS 2025-26
          </p>
          <div className="flex justify-center space-x-4">
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg">
              Facebook: @CitiusNITKKR
            </span>
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg">
              Instagram: @nitkkrathletics
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
