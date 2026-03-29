import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-charcoal block md:hidden">
      
    <h1 className="text-center font-larken font-normal text-[34px] tracking-widest scale-y-95 py-25 text-ivory">
          RUHAVA
    </h1>
      
      
      <div className='mx-auto w-full text-center py-2 mb-2.5'>
      <a href="https://instagram.com/ruhavaofficial" className='text-grey text-[12px] px-2'><FontAwesomeIcon icon={faInstagram} /></a>
      </div>
      <div>
      <p className="text-sm text-grey font-lato text-[12px] mx-auto w-full text-center mb-8">
        &copy; {new Date().getFullYear()} Ruhava. All rights reserved.
      </p>
      </div>
      
      
    </footer>
  );
}