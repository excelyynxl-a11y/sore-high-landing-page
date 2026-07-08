"use client";
import { gsap, useGSAP, SplitText } from '@/lib/gsap-util';
import { useRef } from 'react';
import { Camera, MailIcon, MessageCircle, PhoneCall } from 'lucide-react';

export default function Contact() {

  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const textSplit = SplitText.create('.contact-text', {
      type: 'words lines',
      linesClass: 'text-line',
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.contact-wrapper',
        start: 'top 60%',
      }
    });

    tl.from(textSplit.words, {
      yPercent: 100,
      ease: 'power2.inOut',
      duration: 1,
      stagger: 0.03,
    });

    gsap.to('.contact-img', {
      duration: 1,
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      scrollTrigger: {
        trigger: '.contact-img',
        start: 'top center',
      }
    });
  }, { scope: containerRef }); 

  return (
    <section 
      className="py-20 mb-[10vh] section" 
      ref={containerRef}
      id="contact"
    >
      <div className="container">
        {/* title */}
        <div className="sm:mx-auto contact-wrapper">
          {/* text wrapper */}
          <div className="flex gap-5 items-end">
            <h2 className="section-title contact-text">
              Enough Talk,
            </h2>
            <p className="max-w-60 uppercase font-medium hidden md:block sizechart-text">
              Place your orders, DMs, collaboration or borak
            </p>
          </div>
          <h2 className="section-title contact-text">
            Contact Us
          </h2>

          {/* small text */}
          <p className="max-w-96 uppercase font-medium mt-2 md:hidden sizechart-text">
            Place your orders, DMs, collaboration or borak
          </p>

          <div>
            <div className="space-y-1.5 pb-5 pt-5">
              <div className="flex space-x-5">
                <Camera />
                <div className="">
                  <h3 className="text-xl uppercase font-medium text">
                      Instagram
                  </h3>
                  <a 
                    className="max-w-md text hover:underline"
                    href="https://www.instagram.com/sorehigh__/"
                    target="_blank"
                  >
                      @sorehigh__
                  </a>
                  <a 
                      className="max-w-md text hover:underline"
                      href="https://www.instagram.com/aziz_moham3d/"
                      target="_blank"
                  >
                      @aziz_moham3d
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-1.5 pb-5 pt-5">
              <div className="flex space-x-5">
                <MessageCircle />
                <div className="">
                  <h3 className="text-xl uppercase font-medium text">
                      Whatsapp
                  </h3>
                  <a 
                    className="max-w-md text hover:underline"
                    href="https://wa.me/60193709781"
                    target="_blank"
                  >
                      +6019-370-9781 (Aziz)
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-1.5 pb-5 pt-5">
              <div className="flex space-x-5">
                <MailIcon />
                <div className="">
                  <h3 className="text-xl uppercase font-medium text">
                      Email
                  </h3>
                  <a 
                    className="max-w-md text hover:underline"
                    href="mailto:aziz_email@gmail.com"
                    target="_blank"
                  >
                      aziz_email@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-1.5 pb-5 pt-5">
              <div className="flex space-x-5">
                <PhoneCall />
                <div className="">
                  <h3 className="text-xl uppercase font-medium text">
                      Phone
                  </h3>
                  <a 
                    className="max-w-md text hover:underline"
                    href="tel:+601128805868"
                    target="_blank"
                  >
                    +6019-370-9781
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </section>
  )
}
