"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Head from "next/head";

const VolunteerPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Volunteering | Harshvardhan Dwivedi</title>
        <meta name="description" content="Volunteering experience of Harshvardhan Dwivedi as Campus Ambassador at GirlScript Summer of Code 2024." />
      </Head>

      <section className="min-h-screen px-4 sm:px-8 py-16 bg-white dark:bg-black text-gray-900 dark:text-white">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            className="text-4xl font-extrabold mb-4 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Volunteering Experience
          </motion.h1>

          <motion.p
            className="text-center text-lg text-gray-600 dark:text-gray-400 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Giving back to the community through leadership and collaboration.
          </motion.p>

          <motion.div
            className="bg-gray-100 dark:bg-gray-900 p-6 rounded-xl shadow-md border border-gray-300 dark:border-gray-700 flex flex-col sm:flex-row items-center gap-6"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {/* Badge Image */}
            <div className="flex-shrink-0">
              <Image
                src="/badges/ambassador_gssoc.png"
                alt="GSSoC Campus Ambassador Badge"
                width={120}
                height={120}
                className="rounded-xl shadow-lg"
              />
            </div>

            {/* Text Content */}
            <div>
              <h2 className="text-2xl font-bold mb-2">Campus Ambassador</h2>
              <p className="text-md text-gray-700 dark:text-gray-300 mb-1">
                <span className="font-semibold">Organization:</span> GirlScript Summer of Code (GSSoC)
              </p>
              <p className="text-md text-gray-700 dark:text-gray-300 mb-1">
                <span className="font-semibold">Duration:</span> September 2024 – November 2024
              </p>
              <p className="text-md text-gray-700 dark:text-gray-300 mt-4">
                As a Campus Ambassador for GirlScript Summer of Code 2024, I actively promoted open-source culture among students, 
                facilitated community engagement, and mentored peers in contributing to real-world projects. This experience helped 
                me strengthen my communication and leadership skills while supporting the growth of an inclusive tech community.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default VolunteerPage;
