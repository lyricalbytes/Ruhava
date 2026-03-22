import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCoffee } from '@fortawesome/free-solid-svg-icons'; // Import specific icons
import { faFacebook, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
  return (
    <footer className="bg-charcoal">
      <h1 className="text-center font-larken font-medium text-[34px] tracking-wider scale-y-95 py-25 text-ivory">
          RUHAVA
        </h1>
      <div className='flex py-5'>
      <div>
      <p className="text-sm text-grey font-lato ml-30 text-[12px]">
        &copy; {new Date().getFullYear()} Ruhava. All rights reserved.
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

      <div className='ml-240 mr-30 flex'>
      <a href="https://instagram.com/ruhavaofficial" className='text-grey text-[12px] px-2'><FontAwesomeIcon icon={faInstagram} /></a>
      </div>
      </div>
      <div className='py-4'></div>

    </footer>
  );
}
