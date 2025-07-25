import React from "react";
import { Badge } from "@/components/ui/badge";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-white dark:bg-gray-900 relative">
      <div className="w-full flex-1 text-center">
        <Badge variant="secondary" className="mb-4">
          Contact
        </Badge>
        <div className="container mx-auto">
          <div className="text-center">
            <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">Get in touch</h1>
            <p className="mt-3 text-gray-500 dark:text-gray-400">Our friendly team is always here to chat</p>
          </div>

          <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center justify-center text-center">
              <span className="p-3 text-white-500 rounded-full bg-gray-100/80 dark:bg-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </span>
              <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">Email</h2>
              <p className="mt-2 text-gray-500 dark:text-gray-400">Our friendly team is here to help</p>
              <a href="mailto:sibyanurrizkialfiansyah@gmail.com" className="mt-2 text-blue-800 dark:text-black-400 text-underline">
                sibyanurrizkialfiansyah@gmail.com<br></br>Let's Started!
              </a>
            </div>

            <div className="flex flex-col items-center justify-center text-center">
              <span className="p-3 text-white-500 rounded-full bg-gray-100/80 dark:bg-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </span>
              <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">Bandung, Indonesia</h2>
              <p className="mt-2 text-gray-500 dark:text-gray-400">Freelace Available</p>
              <a href="https://wa.me/6285147442953" target="_blank" className="mt-2 text-blue-800 dark:text-blue-400">
                Contact Me!
              </a>
            </div>

            <div className="flex flex-col items-center justify-center text-center">
              <span className="p-3 text-white-500 rounded-full bg-gray-100/80 dark:bg-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </span>
              <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">Phone Number</h2>
              <p className="mt-2 text-gray-500 dark:text-gray-400">Mon-Fri from 8am to 5pm</p>
              <a href="https://wa.me/6285147442953" target="_blank" className="mt-2 text-blue-800 dark:text-blue-400">
                (+62) 851-4744-2953 <br />
                Wa.Me!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
