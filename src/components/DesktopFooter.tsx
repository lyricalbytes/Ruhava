import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCoffee } from '@fortawesome/free-solid-svg-icons'; // Import specific icons
import { faFacebook, faFacebookF, faInstagram, faYoutube, faLinkedin, faXTwitter, faSnapchat, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { motion } from "framer-motion";



export default function Footer() {
  return (
    <footer className="bg-charcoal hidden md:block bottom-0 ">
      
      <h1 className="text-center font-larken font-normal text-[34px] tracking-widest scale-y-90 py-28 text-ivory">
          RUHAVA
        </h1>

        <div className='flex mt-8'>
          
          <nav className='ml-30 mb-15 mx-13'>
          <h2 className='text-ivory scale-y-90 font-larken tracking-widest text-[13.5px] py-0.5'>
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

          <nav className='ml-30 mb-15 mx-13'>
          <h2 className='text-ivory scale-y-90 font-larken tracking-widest text-[13.5px] py-0.5 uppercase'>
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

          <nav className='ml-30 mb-15 mx-13'>
          <h2 className='text-ivory scale-y-90 font-larken tracking-widest text-[13.5px] py-0.5 uppercase'>
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

          <nav className='ml-30 mb-15 mx-13'>
          <h2 className='text-ivory scale-y-90 font-larken tracking-widest text-[13.5px] py-0.5 uppercase'>
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

          <hr className='bg-grey/20 mx-30 my-5 py-[0.5px]' />
        

      <div className='flex py-3'>
      <div className=''>
      <p className="text-sm text-grey font-lato ml-30 text-[12px]">
        &copy; {new Date().getFullYear()} RUHAVA. All rights reserved. Gwalior, MP, INDIA.
      </p>
      </div>

     {/*  <div className="flex justify-center space-x-4 mt-2 text-ivory">
        <a href="#" className="hover:text-gold">
          Instagram
        </a>
        <a href="#" className="hover:text-gold">
          Twitter
        </a>
      </div> */}

      <div className='ml-195 mr-30 flex'>
      <a href="https://instagram.com/ruhavaofficial" className='text-grey text-[13px] px-2'>Follow the House</a>
      {/* <a href="https://instagram.com/ruhavaofficial" className='text-grey text-[12px] px-3'><FontAwesomeIcon icon={faInstagram} /></a> */}
      {/* <a href="/" className='text-grey text-[11px] px-3'><FontAwesomeIcon icon={faFacebookF} /></a>
      <a href="/" className='text-grey text-[12px] px-3'><FontAwesomeIcon icon={faYoutube} /></a> */}
      {/* <a href="/" className='text-grey text-[12px] px-2'><FontAwesomeIcon icon={faLinkedin} /></a> */}
      {/* <a href="/" className='text-grey text-[12px] px-2'><FontAwesomeIcon icon={faXTwitter} /></a>
      <a href="/" className='text-grey text-[12px] px-2'><FontAwesomeIcon icon={faSnapchat} /></a>
      <a href="/" className='text-grey text-[12px] px-2'><FontAwesomeIcon icon={faPinterest} /></a> */}
      </div>
      </div>
      <div className='py-2'></div>
      
    </footer>
  );
}
