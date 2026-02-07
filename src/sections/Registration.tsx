import { ExternalLink, CheckCircle, FileText, Calendar, Users } from 'lucide-react';

export default function Registration() {
  return (
    <section id="registration" className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Registration
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Register now for CITIUS 2025-26 and be part of this exciting sporting event!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
            <div className="text-center mb-8">
              <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
                <FileText className="text-blue-600" size={48} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Register Now
              </h3>
              <p className="text-gray-600 text-lg">
                Complete your registration in just a few minutes through our official Google Form
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 mb-8">
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                <Calendar className="text-blue-600" size={20} />
                <span>Registration Details</span>
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                <div>
                  <span className="font-semibold">Opens:</span> 6th February, 2026
                </div>
                <div>
                  <span className="font-semibold">Closes:</span> 12th February, 2026
                </div>
                <div>
                  <span className="font-semibold">Eligibility:</span> B.Tech 1st Year
                </div>
                <div>
                  <span className="font-semibold">Fee:</span> Free of Cost
                </div>
              </div>
            </div>

            <div className="text-center mb-8">
              <a
                href="https://forms.gle/nJnyGfvR2FXzPY8L6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                <span>Register Now</span>
                <ExternalLink size={20} />
              </a>
              <p className="text-sm text-gray-500 mt-3">
                You'll be redirected to the official registration form
              </p>
            </div>

            <div className="border-t pt-8">
              <h4 className="font-semibold text-gray-900 mb-6 text-center text-xl">
                How to Register - Step by Step
              </h4>
              <div className="space-y-4">
                {[
                  {
                    step: '1',
                    title: 'Click the Registration Button',
                    description: 'Click on the "Register Now" button above to access the form',
                  },
                  {
                    step: '2',
                    title: 'Fill Personal Details',
                    description: 'Enter your name, roll number, branch, email, and phone number',
                  },
                  {
                    step: '3',
                    title: 'Select Your Events',
                    description: 'Choose up to 3 events from Groups A, B, and C that you wish to participate in',
                  },
                  {
                    step: '4',
                    title: 'Submit the Form',
                    description: 'Review your selections and submit. You\'ll receive a confirmation email',
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="flex items-start space-x-4 bg-gray-50 rounded-lg p-4 hover:bg-blue-50 transition-colors"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h5 className="font-semibold text-gray-900 mb-1">{item.title}</h5>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <CheckCircle className="text-green-500" size={24} />
                <h4 className="font-semibold text-gray-900">What to Prepare</h4>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Your Institute Roll Number</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Valid Email ID and Phone Number</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Branch and Semester Details</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>List of Events You Want to Participate In</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="text-blue-500" size={24} />
                <h4 className="font-semibold text-gray-900">Important Notes</h4>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Maximum 3 events per student</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>On-spot entries allowed for unlisted events</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Institute ID mandatory during events</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Proper sports kit required</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-3">Need Help?</h3>
            <p className="mb-6">
              For any queries regarding registration or events, contact the Physical Education & Sports Section
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3 bg-white text-orange-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
