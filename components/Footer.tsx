  "use client";
import { excelContacts } from '@/data/data';
  import React from 'react'

  export default function Footer() {
    return (
      <footer className="bg-neutral-900 text-white h-[70vh] bottom-0 w-full">
        <div className="container py-8 flex flex-wrap flex-col justify-center min-h-full">
          {/* footer list */}
          <div className="flex flex-wrap items-center gap-7 sm:gap-14 lg:gap-20">
            {/* links */}
            <div>
              {/* links wrapper */}
              <div className="flex gap-2 mb-3 sm:gap-5">
                {/* links */}
                <div className="grid gap-1">
                  {excelContacts.slice(0, 3).map((contact) => (
                    <a 
                      href={contact.link} 
                      target="_blank"
                      className="uppercase hover:underline" 
                      key={contact.id}
                    >
                      {contact.name}
                    </a>
                  ))}
                </div>
                <div className="grid gap-1">
                  {excelContacts.slice(3, 6).map((contact) => (
                    <a 
                      href={contact.link}
                      target="_blank" 
                      className="uppercase hover:underline" 
                      key={contact.id}
                    >
                      {contact.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* text */}
              <p className="max-w-xs text-sm opacity-80 mb-3">
                  This website is developed by Excelyynx.
              </p>

              {/* text */}
              <p className="">
                &copy; Excelyynx 2026. All right reserved.
              </p>
            </div>

            {/* text */}
            <div className="flex-1">
              {/* text */}
              <h3 className="text-4xl font-medium uppercase md:text-6xl lg:text-7xl xl:text-8xl">
                  let's chat 
              </h3>
              {/* text */}
              <p className="max-w-md mt-2 opacity-80">
                Interested to kick start a colloboration with us?
                We're always open to meaningful conversation.
              </p>
              
              {/* text */}
              <p className="">
                  privacy policy
              </p>
              {/* text wrapper */}
              <div className="mt-4 text-sm">
                <p>
                  Email: {"  "} 
                  <a 
                    href="mailto:excelyynxl@gmail.com" 
                    target="_blank"
                    className="hover:underline"
                  >
                    excelyynxl@gmail.com
                  </a>
                </p>

              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
