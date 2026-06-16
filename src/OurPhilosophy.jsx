import React from 'react'

const OurPhilosophy = () => {
  return (
<div className="min-h-screen bg-gradient-to-r from-black via-[#120d08] to-[#2a1d0f] px-40 py-35">

  <div className="flex items-center justify-between gap-20">

   
    <div>
      <h1 className="text-[#d4af37] uppercase tracking-[0.35em] text-sm">
        Our Philosophy
      </h1>

      <h2
        className="text-white text-6xl mt-5 tracking-[4px]"
        style={{ fontFamily: "Playfair Display, serif" }}
      >
        Mastered in the <br />
        <span className="italic text-[#d4af37]">
          Dark Hours
        </span>
      </h2>

      <div className="mt-10 w-35 h-[1.5px] bg-[#d4af37]" />

     <p className='mt-10 text-gray-300 text-lg '>
                  True chocolate artistry requires patience and a setting
            free from the  distractions of light. At BloomCraft,
            our master chocolatiers work through the night,
            hand-painting each truffle with 24k gold and rare
             botanical extracts. This nocturnal process ensures
            that every piece captures 
            the essence of a midnight bloom.
            </p>
    </div>
    {/* Right Side */}
    <div> 
      <img
        className="w-[1400px] h-[550px] object-cover rounded-2xl
          border border-[#d4af37]/40
          transition-transform duration-500
          hover:scale-110
          hover:shadow-[0_0_35px_rgba(212,175,55,0.7)]
        "
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUfQI5IvdPLtmFNiBCwkQrTR8lk95vVTFnNEMKEjbLhOEeXAafNpC9iWasOYlD6EkYd-D1OFH7a-ea98t2rIMhQmqR3ryTpHXgcmPt1E3L7plMtoPAa1MsBXTlL2M4Kw3MLvnGXTdxpjYHfEYbvwbiBXQzY7hAC1x789o6mmAzwfrCZSrZPze1jNweL4gYP2DLt7NzwYsRkJbaINuhEOwD6D-oe5SrcU4r7pH8KyMekueR9QkyS9E9D4q_-YXWOI9BBUOn-BOmz-U"
        alt=""
      />
    </div>

  </div>

</div>
  )
}

export default OurPhilosophy
