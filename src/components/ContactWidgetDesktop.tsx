import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCoffee, faLocationCrosshairs, faMagnifyingGlass, faSearch, faSearchDollar } from '@fortawesome/free-solid-svg-icons'; // Import specific icons
import { faFacebook, faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { motion } from "framer-motion";
import { div } from 'framer-motion/client';
import { LocateFixed, Search } from 'lucide-react';


export default function ContactWidget() {
  return (
    <div className='bg-ivory py-20 z-100 hidden md:block'>

      <div className='flex'>
      <nav className='ml-30'>
          <h2 className='text-charcoal scale-y-85 font-larken tracking-widest text-[13.5px] py-0.5 uppercase mb-2'>
            Private Correspondence
          </h2>
            <p className='space-x-4 text-grey font-lato text-[14px] leading-relaxed'>
              Please contact RUHAVA Client Care Department on <br />
              Monday - Sunday, 10 a.m. - 8 p.m. (except National <br />
              Holidays) via email at <a className='underline cursor-pointer hover:decoration-0'>rescuebird18@gmail.com{/*ruhava.official@gmail.com*/}</a>
            </p>
          </nav>

          {/*
          <nav className='ml-14 mx-2'>
          <h2 className='text-charcoal scale-y-90 font-larken tracking-widest text-[13.5px] py-0.5 uppercase'>
            Find a Store
          </h2>
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
            
          </nav>
          */}

          <nav className='ml-32 mx-2'>
          <h2 className='text-charcoal scale-y-85 font-larken tracking-widest text-[13.5px] py-0.5 uppercase mb-2'>
            Current Allocation
          </h2>
              <p className='space-x-4 text-grey font-lato text-[14px] leading-relaxed'>
                The First Soul is currently available exclusively <br />
                through our digital atelier. Each flacon is hand- <br />
                filled and numbered in our Gwalior studio.
              </p>

             
            
          </nav>
              

          <nav className='ml-32 mx-2'>
          <h2 className='text-charcoal scale-y-85 font-larken tracking-widest text-[13.5px] py-0.5 uppercase mb-2'>
            The Inner Circle
          </h2>
              <p className='space-x-4 text-grey font-lato text-[14px] leading-relaxed'>
                Avenue of Information from RUHAVA
              </p>
              <button className=' text-grey font-lato font-thin text-[14px] underline underline-offset-4 mt-3 cursor-pointer hover:decoration-0'>
                Request Correspondence
              </button>
          </nav>
          </div>

    </div>
  );
}