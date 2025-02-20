// app/components/Footer.tsx
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/img/logo.png"
                alt="Jogja.Melaku Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="font-semibold text-xl">Jogja.Melaku</span>
            </div>
            <p className="text-gray-400">
              Your trusted guide to explore the beauty and culture of Yogyakarta.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link href="/explore" className="text-gray-400 hover:text-white">Explore</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white">About</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Jl. Malioboro No. 123</li>
              <li>Yogyakarta, Indonesia</li>
              <li>info@jogjamelaku.com</li>
              <li>+62 274 123456</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2024 Jogja.Melaku. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}