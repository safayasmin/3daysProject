import React from 'react'

const OurPhilosophy = () => {
  return (
    <div className='min-h-screen bg-black px-40 py-60'>
        <h1 className='text-[#d4af37] uppercase tracking-[0.35em] text-sm'>Our Philosophy</h1>

          <h2
            className="text-white text-6xl mt-5 tracking-[4px] "
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Mastered in the <br />
            <span className="italic text-[#d4af37]">
              Dark Hours
            </span>
          </h2>

          <div className='w-24 h-[1.5px] bg-[#d4af37] my-8'/>
            
            <p className='text-gray-300 text-lg'>
                 True chocolate artistry requires patience and a setting
            free from the <br></br> distractions of light. At BloomCraft,
            our master chocolatiers work through <br></br>the night,
            hand-painting each truffle with 24k gold and rare
            botanical <br></br>extracts. This nocturnal process ensures
            that every piece captures <br>
            </br>the essence of a midnight bloom.
            </p>

           
    </div>
  )
}

export default OurPhilosophy
