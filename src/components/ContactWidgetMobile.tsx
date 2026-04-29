import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCoffee, faLocationCrosshairs, faMagnifyingGlass, faSearch, faSearchDollar } from '@fortawesome/free-solid-svg-icons'; // Import specific icons
import { faFacebook, faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { motion } from "framer-motion";
import { div } from 'framer-motion/client';
import { ChevronUp, LocateFixed, Search } from 'lucide-react';
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from 'next/link';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const AccordionItem = ({ title, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-grey/20 mx-5">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-6 cursor-pointer"
      >
        <span className="font-larken tracking-widest text-[13px] uppercase text-charcoal scale-y-85 py-0.5 ">{title}</span>
        <ChevronDown className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} size={16}/>
      </button>
      {isOpen && <div className=" pb-6 font-lato text-sm text-grey">{children}</div>}
    </div>
  );
};

const AccordionItem2 = ({ title, children }: AccordionProps) => {
  const [isClosed, setIsOpen] = useState(true);
  return (
    <div className=" mx-5">
      <button 
        onClick={() => setIsOpen(!isClosed)}
        className="w-full flex justify-between items-center py-6 cursor-pointer"
      >
        <span className="font-larken tracking-widest text-[13px] uppercase text-charcoal scale-y-90 py-0.5 ">{title}</span>
        <ChevronDown className={`transition-transform ${isClosed ? 'rotate-180' : ''}`} size={16}/>
      </button>
      {isClosed && <div className=" pb-6 font-lato text-sm text-grey">{children}</div>}
    </div>
  );
};


export default function ContactWidgetMobile() {
  return (
      

    <div className='bg-ivory py-15 z-40 block md:hidden lg:hidden'>

      {/*  <AccordionItem title="Contact an Advisor">
        <p>Monday - Sunday, 10 a.m. - 8 p.m.</p>
        <a href="mailto:ruhava.official@gmail.com" className="underline">Email Us</a>
      */}

      <nav className=''>
        <AccordionItem title="Private Correspondence">
            <p className='space-x-4 text-grey font-lato text-[14px] leading-relaxed'>
              Please contact RUHAVA Client Care Department on <br />
              Monday - Sunday, 10 a.m. - 8 p.m. (except National <br />
              Holidays) via email at <a className='underline cursor-pointer hover:decoration-0'>rescuebird18@gmail.com{/*ruhava.official@gmail.com*/}</a>
            </p>
        </AccordionItem>
          </nav>

    
      <div className=''>
        {/*
      <nav className='ml-5 mb-10'>
          <h2 className='text-charcoal scale-y-90 font-larken tracking-widest text-[13.5px] py-0.5 uppercase'>
            Contact an Advisor
          </h2>
            <p className='space-x-4 text-grey font-lato text-[14px]'>
              Please contact RUHAVA Client Care Department on <br />
              Monday - Sunday, 10 a.m. - 8 p.m. (except National <br />
              Holidays) via email at <a className='underline cursor-pointer hover:decoration-0'>ruhava.official@gmail.com</a>
            </p>
          </nav>
          

          <hr className='bg-grey border-none mx-5 my-5 py-[0.2px]'/>
          */}

        {/*
          <nav className=''>
          <AccordionItem title="Find a Store">
              <p className='space-x-4 text-grey font-lato text-[14px]'>
                Enter a location to find the closest RUHAVA stores
              </p>
            

              <div className='mt-7 flex'>
                <input type="hidden" name="access_key" value="YOUR_KEY_HERE" />
          
          
          {[
            { label: "City or zip code", name: "city", type: "text" },
          ].map((field) => (
            <div key={field.name} className="relative group w-78">
                <input
                required
                type={field.type}
                name={field.name}
                placeholder=" " 
                className="peer w-full bg-transparent border-b border-grey/30 py-1.5 outline-none text-sm text-charcoal transition-colors duration-500 focus:border-charcoal group-hover:border-grey scale-y-95 font-lato"
              />
              <label className="absolute left-0 top-2 text-grey text-sm pointer-events-none transition-all duration-300 scale-y-95 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-charcoal peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[10px] font-lato">
                {field.label}
               
                
              </label>
              
               
              <div className='absolute inset-0 flex ml-70'><a href="/" className='text-charcoal text-[14px] px-3 mt-2'><Search size={18} strokeWidth={1.5} /></a></div>

              </div>
              ))}

              
              
              <div className='border-l h-5 border-gray-300 mx-4 mt-2'>
              </div>
              
              <div className='inset-0 flex'><a href="/" className='text-charcoal text-[14px] mt-2'><LocateFixed size={18} strokeWidth={1.5} /></a></div>
              
              </div>
              </AccordionItem>
            
          </nav>
          */}

          <nav className=''>
          <AccordionItem title="Current Allocation">
              <p className='space-x-4 text-grey font-lato text-[14px] leading-relaxed'>
                RUHAVA creations are currently available exclusively online. 
                The First Soul: Edition of 50. 
                <br /><br />
                <Link href="/reserve" className="underline underline-offset-4 hover:decoration-0">Check Availability</Link>
              </p>
            

              
              </AccordionItem>
            
          </nav>

          {/*
          <hr className='bg-grey border-none mx-5 my-5 py-[0.2px]'/>
          */}

          <nav className=''>
            <AccordionItem2 title="The Inner Circle"> 
          
              <p className='space-x-4 text-grey font-lato text-[14px] leading-relaxed'>
                Avenue of Information from RUHAVA
              </p>
              <button className=' text-grey font-lato font-thin text-[14px] underline underline-offset-4 mt-3 cursor-pointer hover:decoration-0'>
                Request Correspondence
              </button>
            </AccordionItem2>
          </nav>
          </div>

    </div>
  );
}