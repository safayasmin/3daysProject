import React from 'react'
const images = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCMqm4lqD7mEvWs2SbGiq24uT4nDCg4yqB6bwjPjrtmIcy_rUmANJeMKmZxZXt6yaFp0_Xv9keysSV8LrlTLU2qN326pNcYDyJtTdh5EsZkc0VrgHA9Wk1EVr_qW4fueT0DKjo9RXJBTIDeLk4GDhTUD6_8u-nDaGXMjAR551ShbE1mqFmk1OROICyeS7gKzIAirL4pWutZaZOmZYbPzqX4KkcTAAgQRB8frDT13VaGIIj2cRUNjEfyedRhDWryKIO-55-9fzjw8iw",

  "https://images.pexels.com/photos/302680/pexels-photo-302680.jpeg",

  "https://lh3.googleusercontent.com/aida/AP1WRLsM7a1hFpiE1bIgOdwcEgmjAf8WLKIrgYl70C2Mv2MIMzxguY0hyG1DPiNZ3wDYIhHMWmgjUJnp-CUupEeunDVu0AUZjSmvqGFCgG71mn7iS7rjJj4we9_1nw6iG1-QOQ2v1VyfUoDTvqZoHXdTy_8SuPMvSRyDkLAEQc6i3oAGTa-rYilYlYUwrtAgRHcxYfSWXhG_-8swhOngkRz9nx45kCgPbQzZFhAjzT3lHzeCOlbDOkKgTp5l-A",

  "https://images.pexels.com/photos/65882/chocolate-dark-coffee-confiserie-65882.jpeg",

  "https://lh3.googleusercontent.com/aida-public/AB6AXuC9n56ASdklU7Q_jLW4y6hyXNbOSnBV7GIpoPrD2HW5mw83hxVVrRu76XBpOurzNNfClN_-dm8WzP8v_uE8xas8DpAiWwxPWrF9M6QXwUKUL0KBmWZJx7DY0eKSSBs8oGB7EKpYvb3cj5KccW17TlXTZZ3jtK1dqoeTvzKK0W6cdTyaz4u-SOtd_Pg2ZrAf3ppUXnNiN3XYUtnJJCewf272csYvT8y62TEylYCdgZxYW2X93el3AibMjj3lWEtSS64IAJvncn--2PI",

  "https://lh3.googleusercontent.com/aida-public/AB6AXuB5QZvIvtBL4CLglt_HnDyFku0JF7kjN2NXFWEDWTSaOtrBY6_j5_OsuABX3JsHFTXWwuC8C4EF92YIQRQ2eOu06kfClIvbQ1Ipf76hyPtNC2M8jyR1gdwpYhMhoDH186lyecmh4yRIyFF6R2PY3VsF5XJjDbaalrYrPSY5-Z8HoLbqi_VhuRsvSMdHJmdDhGQda1Oh31zWTzQf968ONjJLdO4wJUWkyeL0UCeI0u5Y7B5Z7Tr7FLr7pJpEjqy7HkPRbLhdva3w2m0",

  "https://lh3.googleusercontent.com/aida-public/AB6AXuBjyBQ3NoVGiXQuak6m66ldE05PExFyzTpm4Qef5jEhIIIOLfq8OCUDhqvoB8vLbGph9rvthXaQ0UpH6b9GulUmIF6dwrV29hKtu7_dtmTJ_8pM4lkBpM8tEmewZqB8s1-jjmWn0UTWXIuO0Un7Mz_UtzrktOs40y9ai3FoadPnphnbCn01W1XovRM7WYKkCnqfpCwGCLWC4Vglu-XNVyEjSbBYpVMAKapG_TBDrYkb7TWBHL-x2tBbhV97JvMtzzIitHxZI6PFpic",

  "https://lh3.googleusercontent.com/aida-public/AB6AXuD5-H4JvmXzY2XEXP7A3hoVfLANynZr9Hg4qq6f0FM8Tt-prFyVPh85G3HZEEOgNKuksGNaAVVNhQyFS-ICbOwWt4CFZOK0BXnkDBqZRBz8lTfY9ZKQ9KDhn8AajrdReqmTDfTzO4O147shPZULUv5qFkDWyYRKyehAvBVEmpt7VW284sYaLSDNmek7FIK0eR0dRiSskx84sLf_AcK8sw8KONhbp7aV93Uqzu-JpH9CHqX0hnnx5DykJHiQs-XmVUyzVN0DNC1718Q",

  "https://lh3.googleusercontent.com/aida/AP1WRLsdx-I07P1Wp4rfdeDE-aclz-HT2sHzgIOYiap8w16pwA5y-zfYl9ivtJzmtWvJD_wOw8tTjE5Lb_woqrqcpInpFnn3UKmR4ngp7c_7ceFdrZZ6yQlh6gj8OwxVwF1f5Lgz0l0cPrDRo1Vd29-lpCH6fWkmQAnakTMrfTmOFPf-FQY8aIFu5QdbnM6XbuwIQagY9ToajC23o-o9UciHwdM4uVt1pP0woTa9_y6E2Yz4bWcxiQaQf9Y3Lsg",

  "https://lh3.googleusercontent.com/aida-public/AB6AXuD5-H4JvmXzY2XEXP7A3hoVfLANynZr9Hg4qq6f0FM8Tt-prFyVPh85G3HZEEOgNKuksGNaAVVNhQyFS-ICbOwWt4CFZOK0BXnkDBqZRBz8lTfY9ZKQ9KDhn8AajrdReqmTDfTzO4O147shPZULUv5qFkDWyYRKyehAvBVEmpt7VW284sYaLSDNmek7FIK0eR0dRiSskx84sLf_AcK8sw8KONhbp7aV93Uqzu-JpH9CHqX0hnnx5DykJHiQs-XmVUyzVN0DNC1718Q"
];

const ChocolateCollage = () => {
  return (
    <section className="relative w-full h-screen pt-24 bg-gradient-to-r from-[#050505] via-[#0d0906] to-[#17110c] flex items-center justify-center overflow-hidden">

      
      <div className="absolute text-center z-50">
        <h1
          className="text-6xl md:text-7xl font-bold text-white tracking-[10px]"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          CHOCOLATE
        </h1>

        <p className="mt-4 text-[#c9a66b] tracking-[8px] uppercase">
          Premium Collection
        </p>
      </div>
     
      
      <div
        className="relative w-[210px] h-[300px]"
        style={{
          transformStyle: "preserve-3d",
          animation: "rotate 25s linear infinite",
        }}
      >
        {images.map((img, index) => (
          <span
            key={index}
            className="absolute inset-0"
            style={{
              transformStyle: "preserve-3d",
              transform: `rotateY(${index * (360 / images.length)}deg) translateZ(550px)`
            }}
          >
            <img
              src={img}
              alt=""
              className="
               w-full h-full object-cover
               rounded-[40px]
               border border-[#d4af37]/40
               shadow-[0_0_20px_rgba(212,175,55,0.15)]
               hover:border-[#d4af37]
               hover:shadow-[0_0_35px_rgba(212,175,55,0.45)]"
            />
          </span>
        ))}
      </div>
        <style>
        {`
          @keyframes rotate {
            from {
              transform: perspective(1400px) rotateY(0deg);
            }
            to {
              transform: perspective(1400px) rotateY(360deg);
            }
          }
        `}
      </style>
      </section>
  )
}

export default ChocolateCollage
