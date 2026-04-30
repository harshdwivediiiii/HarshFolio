"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { profile } from "@/constants/Index";

export default function EmailSection() {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real app, you would handle the form submission here
    // For now, we'll just simulate a successful submission after a delay
    setTimeout(() => {
      setEmailSubmitted(true);
      setTimeout(() => setEmailSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="relative py-24 z-10 flex justify-center items-center">
      <div className="max-w-4xl w-full mx-auto px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative bg-[#0A0A0C]/80 backdrop-blur-xl border border-white/10 p-8 sm:p-12 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(138,43,226,0.15)]"
        >
          {/* Background Glows */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-400/20 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 mb-4">
                Let&apos;s Connect
              </h2>
              <p className="text-gray-400 mb-8 font-light text-lg">
                Currently looking for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
              </p>
              
              <div className="flex items-center gap-4 text-cyan-400 font-mono mb-4">
                <span className="w-10 h-10 rounded-full bg-cyan-400/10 flex items-center justify-center border border-cyan-400/30">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a16,16,0,0,0,21.66,0L216,74.19Z"></path></svg>
                </span>
                {profile.email}
              </div>
            </div>

            <div>
              {emailSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                  className="h-full flex flex-col items-center justify-center text-center p-6 border border-cyan-400/30 rounded-xl bg-cyan-400/10"
                >
                  <svg className="w-16 h-16 text-cyan-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-xl font-bold text-white mb-2">Transmission Successful</p>
                  <p className="text-cyan-200">I&apos;ll be in touch soon.</p>
                </motion.div>
              ) : (
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-mono text-gray-400 mb-2 group-focus-within:text-cyan-400 transition-colors">
                      Your Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      id="email"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all shadow-[0_0_0_rgba(0,255,255,0)] focus:shadow-[0_0_15px_rgba(0,255,255,0.2)]"
                      placeholder="jack@example.com"
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="subject" className="block text-sm font-mono text-gray-400 mb-2 group-focus-within:text-purple-400 transition-colors">
                      Subject
                    </label>
                    <input
                      name="subject"
                      type="text"
                      id="subject"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 focus:bg-white/10 transition-all shadow-[0_0_0_rgba(138,43,226,0)] focus:shadow-[0_0_15px_rgba(138,43,226,0.2)]"
                      placeholder="Just saying hi"
                    />
                  </div>
                  <div className="group mb-2">
                    <label htmlFor="message" className="block text-sm font-mono text-gray-400 mb-2 group-focus-within:text-cyan-400 transition-colors">
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all shadow-[0_0_0_rgba(0,255,255,0)] focus:shadow-[0_0_15px_rgba(0,255,255,0.2)] resize-none"
                      placeholder="Let's talk about..."
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(0, 255, 255, 0.4)" }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full rounded-lg border border-cyan-400 bg-cyan-400/20 px-6 py-4 text-cyan-400 font-bold tracking-wider hover:bg-cyan-400 hover:text-black transition-all"
                  >
                    SEND MESSAGE
                  </motion.button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
