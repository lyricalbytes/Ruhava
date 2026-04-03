import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faFacebookF, faInstagram, faLinkedin, faPinterest, faSnapchat, faSnapchatGhost, faSnapchatSquare, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { motion } from "framer-motion";
import { faX } from '@fortawesome/free-solid-svg-icons';


export default function Footer() {
  return (
    <footer className="bg-charcoal block md:hidden z-30">

  
    <h1 className="text-center font-larken font-normal text-[34px] tracking-widest scale-y-90 py-15 text-ivory">
          RUHAVA
    </h1>

    <div className='mt-0'>
          
          <nav className='mb-10 mx-5'>
          <h2 className='text-ivory scale-y-90 font-larken tracking-widest text-[13px] py-0.5'>
            EXPLORE RUHAVA
          </h2>
            <ul className="space-x-4 text-grey font-lato text-[14px]">
              <li className='py-0.5'>
                <a href="/the-house" className="hover:underline">The House</a>
              </li>
              <li className='py-0.5'>
                <a href="/the-creation" className="hover:underline">The Creation</a>
              </li>
              <li className='py-0.5'>
                <a href="/founder" className="hover:underline">Founder</a>
              </li>
              <li className='py-0.5'>
                <a href="/journal" className="hover:underline">Journal</a>
              </li>
              <li className='py-0.5'>
                <a href="/reserve" className="hover:underline">Reserve</a>
              </li>
              
            </ul>
          </nav>

          <nav className='mb-10 mx-5'>
          <h2 className='text-ivory scale-y-90 font-larken tracking-widest text-[13px] py-0.5 uppercase'>
            Client Concierge
          </h2>
            <ul className="space-x-4 text-grey font-lato text-[14px]">
              <li className='py-0.5'>
                <a href="/privacy-policy" className="hover:underline">Secure Transactions</a>
              </li>
              <li className='py-0.5'>
                <a href="/terms-of-service" className="hover:underline">Complimentary Delivery</a>
              </li>
              <li className='py-0.5'>
                <a href="/terms-of-service" className="hover:underline">Track Reservation</a>
              </li>
               
              <li className='py-0.5'>
                <a href="/contact" className="hover:underline">Returns</a>
              </li>
              <li className='py-0.5'>
                <a href="/contact" className="hover:underline">FAQ</a>
              </li>
            </ul>
          </nav>

          <nav className='mb-10 mx-5'>
          <h2 className='text-ivory scale-y-90 font-larken tracking-widest text-[13px] py-0.5 uppercase'>
            Private Appointments
          </h2>
            <ul className="space-x-4 text-grey font-lato text-[14px]">
              <li className='py-0.5'>
                <a href="/" className="hover:underline">Find a Boutique</a>
              </li>
              <li className='py-0.5'>
                <a href="/" className="hover:underline">Book an Appointment</a>
              </li>
            </ul>
          </nav>

          <nav className='mb-14 mx-5'>
          <h2 className='text-ivory scale-y-90 font-larken tracking-widest text-[13px] py-0.5 uppercase'>
            The House of Ruhava
          </h2>
            <ul className="space-x-4 text-grey font-lato text-[14px]">
              
              <li className='py-0.5'>
                <a href="/" className="hover:underline">Terms of Craft</a>
              </li>
              <li className='py-0.5'>
                <a href="/" className="hover:underline">Privacy Policy</a>
              </li>
              
              
            </ul>
          </nav>

          </div>

          <hr className='border-grey/20 mx-5 my-5 py-[0.2px]' />
      
      
      <div className='mx-auto w-full text-center py-2 mb-2.5'>
      <a href="https://instagram.com/ruhavaofficial" className='text-grey text-[13px] px-2'>Follow the House</a>
      {/* <a href="https://instagram.com/ruhavaofficial" className='text-grey text-[12px] px-2'><FontAwesomeIcon icon={faInstagram} /></a> */}
      {/* <a href="/" className='text-grey text-[11px] px-2'><FontAwesomeIcon icon={faFacebookF} /></a>
      <a href="/" className='text-grey text-[12px] px-2'><FontAwesomeIcon icon={faYoutube} /></a> */}
      {/* <a href="/" className='text-grey text-[12px] px-2'><FontAwesomeIcon icon={faLinkedin} /></a> */}
      {/* <a href="/" className='text-grey text-[12px] px-2'><FontAwesomeIcon icon={faXTwitter} /></a>
      <a href="/" className='text-grey text-[12px] px-2'><FontAwesomeIcon icon={faSnapchat} /></a>
      <a href="/" className='text-grey text-[12px] px-2'><FontAwesomeIcon icon={faPinterest} /></a> */}
      </div>
      <div>
      <p className="text-sm text-grey font-lato text-[12px] mx-auto w-full text-center pb-8">
        &copy; {new Date().getFullYear()} RUHAVA. All rights reserved. Gwalior, MP, INDIA.
      </p>
      </div>
      
      
    </footer>
  );
}