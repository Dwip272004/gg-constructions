import React from 'react';
import { Phone, Mail, ArrowRight, Clock } from 'lucide-react';

export default function ContactCTA() {
  return (
    <section id="contact" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 skew-x-12 transform translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-16 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side: Content */}
            <div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Ready to bring your <br />
                <span className="text-blue-500 underline underline-offset-8">vision to life?</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-md">
                Whether it's a luxury residence or a commercial landmark, our team is ready to deliver excellence. Let’s discuss your project today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center group">
                  Start a Project
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-xl font-bold transition-all">
                  Our Process
                </button>
              </div>
            </div>

            {/* Right Side: Quick Contact Info */}
            <div className="grid gap-6">
              <div className="flex items-start gap-5 p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-colors">
                <div className="bg-blue-600/20 p-3 rounded-lg text-blue-500">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">Direct Line</p>
                  <p className="text-white text-xl font-semibold">+91 (555) 012-3456</p>
                </div>
              </div>

              <div className="flex items-start gap-5 p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-colors">
                <div className="bg-blue-600/20 p-3 rounded-lg text-blue-500">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">Email Us</p>
                  <p className="text-white text-xl font-semibold">projects@rkconstruction.com</p>
                </div>
              </div>

              <div className="flex items-center gap-2 px-6 text-gray-500 text-sm">
                <Clock className="w-4 h-4" />
                <span>Typical response time: <span className="text-blue-400">Within 24 hours</span></span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}