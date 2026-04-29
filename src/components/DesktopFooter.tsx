// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCheck, faCoffee } from '@fortawesome/free-solid-svg-icons'; // Import specific icons
// import { faFacebook, faFacebookF, faInstagram, faYoutube, faLinkedin, faXTwitter, faSnapchat, faPinterest } from '@fortawesome/free-brands-svg-icons';
// import { motion } from "framer-motion";
import Link from 'next/link';



export default function Footer() {
  return (
    <footer className="bg-charcoal hidden md:block bottom-0 ">
      
      <h1 className="text-center font-larken font-normal text-[34px] tracking-widest scale-y-85 py-28 text-ivory">
          RUHAVA
        </h1>

        <div className='mt-8 grid grid-cols-4 gap-8 px-30 pb-20'>
          
          <nav className=''>
          <h2 className='text-ivory scale-y-85 font-larken tracking-widest text-[13.5px] py-0.5 uppercase mb-1'>
            EXPLORE RUHAVA
          </h2>
            <ul className="space-x-4 text-grey font-lato text-[14px] space-y-1">
            <li><Link href="/the-house" className="hover:underline">The House</Link></li>
            <li><Link href="/founder" className="hover:underline">The Founder</Link></li>
            <li><Link href="/journal" className="hover:underline">The Journal</Link></li>
            <li><Link href="/ethical-sourcing" className="hover:underline">Sourcing & Ethics</Link></li>
              
            </ul>
          </nav>

          <nav className=''>
          <h2 className="text-ivory scale-y-85 font-larken tracking-widest text-[13.5px] py-0.5 uppercase mb-1">
            The Collection
          </h2>
          <ul className="text-grey font-lato text-[14px] space-y-1">
            <li><Link href="/the-creation" className="hover:underline">The First Soul</Link></li>
            <li><Link href="/reserve" className="hover:underline">Request Allocation</Link></li>
            <li><Link href="/reserve" className="hover:underline">Art of Gifting</Link></li>
            <li><Link href="/faq" className="hover:underline">Common Inquiries</Link></li>
            {/* <li><Link href="/craftsmanship" className="hover:underline">Art of the Flacon</Link></li> */}
            {/* <li><Link href="/craftsmanship" className="hover:underline">The Hurt Ones</Link></li> */}
          </ul>
        </nav>

          <nav className=''>
          <h2 className="text-ivory scale-y-85 font-larken tracking-widest text-[13.5px] py-0.5 uppercase mb-1">
            Client Concierge
          </h2>
          <ul className="text-grey font-lato text-[14px] space-y-1">
            <li><Link href="/concierge" className="hover:underline">Secure Transactions</Link></li>
            <li><Link href="/shipping" className="hover:underline">Complimentary Delivery</Link></li>
            <li><Link href="/track" className="hover:underline">Track Reservation</Link></li>
            <li><Link href="/returns" className="hover:underline">Returns & Exchanges</Link></li>
            {/* <li><Link href="/faq" className="hover:underline">Common Inquiries</Link></li> */}
          </ul>
        </nav>

          <nav className='ml-30 mb-15 mx-13 hidden'>
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

          <nav className='hidden'>
          <h2 className="text-ivory scale-y-90 font-larken tracking-widest text-[13.5px] py-0.5 uppercase">
            Craft & Ethos
          </h2>
          <ul className="text-grey font-lato text-[14px] mt-4">
            <li className="py-1"><a href="/ethical-sourcing" className="hover:underline">Ethical Sourcing</a></li>
            <li className="py-1"><a href="/craftsmanship" className="hover:underline">Studio Craft</a></li>
            <li className="py-1"><a href="/sustainability" className="hover:underline">Sustainability</a></li>
            <li className="py-1"><a href="/contact" className="hover:underline">Contact Us</a></li>
          </ul>
        </nav>

          <nav className=''>
          <h2 className="text-ivory scale-y-85 font-larken tracking-widest text-[13.5px] py-0.5 uppercase mb-1">
            The House of Ruhava
          </h2>
          <ul className="text-grey font-lato text-[14px] space-y-1">
            <li><Link href="/terms" className="hover:underline">Terms of Craft</Link></li>
            <li><Link href="/privacy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link href="/privacy" className="hover:underline">Sustainability</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
          </ul>
        </nav>

          </div>

          <hr className='bg-grey/20 mx-30 my-5 py-[0.5px]' />
        

      <div className='flex py-3'>
      <div className=''>
      <p className="text-sm text-grey font-lato ml-30 text-[12px]">
        &copy; {new Date().getFullYear()} RUHAVA. Handcrafted in Gwalior, INDIA.
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
      <a href="https://instagram.com/ruhavaofficial" className='text-grey text-[13px] px-2 hover:underline'>Follow the House</a>
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
