import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-[#d4af37]/20 py-6">
       <div className="flex justify-between">

        <h2
          className="text-2xl text-[#d4af37]"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          BloomCraft
        </h2>

        <p className="text-gray-400 text-sm mt-3 md:mt-0">
          © 2026 BloomCraft. Crafted with passion & chocolate.
        </p>

     </div> 
    </footer>
  );
};

export default Footer;