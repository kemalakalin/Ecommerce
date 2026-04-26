import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className=" pt-12">
      
      {/* Top */}
      <div className="max-w-[1050px] mx-auto px-4 flex items-center justify-between mb-10">
        <h2 className="text-[#252B42] text-2xl font-extrabold">Bandage</h2>

        <div className="flex gap-4 text-[#23A6F0] text-lg">
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
        </div>
      </div>

      <hr className="border-" />

      {/* Links */}
      <div className="max-w-[1050px] mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-5 gap-8 text-sm">
        
        {/* Column */}
        <div>
          <h3 className="font-bold text-[#252B42] mb-4">Company Info</h3>
          <ul className="space-y-2 text-[#737373]">
            <li>About Us</li>
            <li>Carrier</li>
            <li>We are hiring</li>
            <li>Blog</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-[#252B42] mb-4">Legal</h3>
          <ul className="space-y-2 text-[#737373]">
            <li>About Us</li>
            <li>Carrier</li>
            <li>We are hiring</li>
            <li>Blog</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-[#252B42] mb-4">Features</h3>
          <ul className="space-y-2 text-[#737373]">
            <li>Business Marketing</li>
            <li>User Analytic</li>
            <li>Live Chat</li>
            <li>Unlimited Support</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-[#252B42] mb-4">Resources</h3>
          <ul className="space-y-2 text-[#737373]">
            <li>IOS & Android</li>
            <li>Watch a Demo</li>
            <li>Customers</li>
            <li>API</li>
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="font-bold text-[#252B42] mb-4">Get In Touch</h3>

          <div className="flex">
            <input
              type="email"
              placeholder="Your Email"
              className="border border-[#E6E6E6] px-4 py-2 w-full rounded-l-md outline-none"
            />
            <button className="bg-[#23A6F0] text-white px-4 py-2 rounded-r-md">
              Subscribe
            </button>
          </div>

          <p className="text-[#737373] text-xs mt-3">
            Lorem ipsum dolor Amit
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className=" py-5 text-center text-[#737373] text-sm">
        Coded By Kemal Akalın ;)
      </div>

    </footer>
  );
}

export default Footer;