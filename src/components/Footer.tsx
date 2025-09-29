export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory py-6 text-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Ruhava. All rights reserved.
      </p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="#" className="hover:text-gold">
          Instagram
        </a>
        <a href="#" className="hover:text-gold">
          Twitter
        </a>
      </div>
    </footer>
  );
}
