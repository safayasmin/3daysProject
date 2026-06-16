import React from 'react'

const products = [
  {
    id: 1,
    title: "Dark Truffle",
    price: 499,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCMqm4lqD7mEvWs2SbGiq24uT4nDCg4yqB6bwjPjrtmIcy_rUmANJeMKmZxZXt6yaFp0_Xv9keysSV8LrlTLU2qN326pNcYDyJtTdh5EsZkc0VrgHA9Wk1EVr_qW4fueT0DKjo9RXJBTIDeLk4GDhTUD6_8u-nDaGXMjAR551ShbE1mqFmk1OROICyeS7gKzIAirL4pWutZaZOmZYbPzqX4KkcTAAgQRB8frDT13VaGIIj2cRUNjEfyedRhDWryKIO-55-9fzjw8iw"
  },
  {
    id: 2,
    title: "Velvet Cocoa",
    price: 599,
    img: "https://lh3.googleusercontent.com/aida/AP1WRLs3MQUdqBn5fva85hTVrMwPghlHUsq-PC9IEjT7jc_UBwqw7kDdZ4DfYA_eJZZV9kQKq3wcuA6pG_aXV-KsQcuD_8BezzjGFO7C7geZOWMACYmCKn1lBVB4QNq95ZZ-PPaH61YpMk82v79210xboObzQlCyls9vBQfX6rYvNH_tdHGyRu1tEqq-A_vwm8lBOZRPQTK3RAIbTxoRNpdzuqlADzL82XKOBG_zjoMekIJyD6t3KFkAmF7ZRdk"
  },
  // {
  //   id: 3,
  //   title: "Golden Bite",
  //   price: 699,
  //   img: "https://lh3.googleusercontent.com/aida/AP1WRLsM7a1hFpiE1bIgOdwcEgmjAf8WLKIrgYl70C2Mv2MIMzxguY0hyG1DPiNZ3wDYIhHMWmgjUJnp-CUupEeunDVu0AUZjSmvqGFCgG71mn7iS7rjJj4we9_1nw6iG1-QOQ2v1VyfUoDTvqZoHXdTy_8SuPMvSRyDkLAEQc6i3oAGTa-rYilYlYUwrtAgRHcxYfSWXhG_-8swhOngkRz9nx45kCgPbQzZFhAjzT3lHzeCOlbDOkKgTp5l-A"
  // },
  // {
  //   id: 4,
  //   title: "Royal Crunch",
  //   price: 799,
  //   img: "https://lh3.googleusercontent.com/aida/AP1WRLuOQP7QAsh6I8ObfWnQJc-ozokTpvoNTlqKMYikx8dST1gSDpwE97rmTie2WiOPo_tWbNDWBNmmE_Bx7endWE0EoDwx9FI8lUNL686v7zgtiOsQjSrvG_qW_nQ03b8IcQcN94LGhXFGTK7zqNEBfioUEFbAIGSO-_yg1GUSqwqNkI7Ez_aufFldN9z5bx3H1dBoqxSjdEN0oFDzpTLaNQrE-4RTvqtqLMJbxKvwxceSg3uYUM778tIHn14"
  // },

//   {
//   id: 2,
//   title: "Velvet Cocoa",
//   price: 599,
//   img: "https://images.pexels.com/photos/302680/pexels-photo-302680.jpeg"
// },
{
  id: 3,
  title: "Golden Bite",
  price: 699,
  img: "https://images.pexels.com/photos/65882/chocolate-dark-coffee-confiserie-65882.jpeg"
},
{
  id: 4,
  title: "Royal Crunch",
  price: 799,
  img: "https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg"
},
  {
    id: 5,
    title: "Silk Cocoa",
    price: 549,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9n56ASdklU7Q_jLW4y6hyXNbOSnBV7GIpoPrD2HW5mw83hxVVrRu76XBpOurzNNfClN_-dm8WzP8v_uE8xas8DpAiWwxPWrF9M6QXwUKUL0KBmWZJx7DY0eKSSBs8oGB7EKpYvb3cj5KccW17TlXTZZ3jtK1dqoeTvzKK0W6cdTyaz4u-SOtd_Pg2ZrAf3ppUXnNiN3XYUtnJJCewf272csYvT8y62TEylYCdgZxYW2X93el3AibMjj3lWEtSS64IAJvncn--2PI"
  },
  {
    id: 6,
    title: "Hazelnut Gold",
    price: 899,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5QZvIvtBL4CLglt_HnDyFku0JF7kjN2NXFWEDWTSaOtrBY6_j5_OsuABX3JsHFTXWwuC8C4EF92YIQRQ2eOu06kfClIvbQ1Ipf76hyPtNC2M8jyR1gdwpYhMhoDH186lyecmh4yRIyFF6R2PY3VsF5XJjDbaalrYrPSY5-Z8HoLbqi_VhuRsvSMdHJmdDhGQda1Oh31zWTzQf968ONjJLdO4wJUWkyeL0UCeI0u5Y7B5Z7Tr7FLr7pJpEjqy7HkPRbLhdva3w2m0"
  },
  {
    id: 7,
    title: "Darkiz",
    price: 999,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBjyBQ3NoVGiXQuak6m66ldE05PExFyzTpm4Qef5jEhIIIOLfq8OCUDhqvoB8vLbGph9rvthXaQ0UpH6b9GulUmIF6dwrV29hKtu7_dtmTJ_8pM4lkBpM8tEmewZqB8s1-jjmWn0UTWXIuO0Un7Mz_UtzrktOs40y9ai3FoadPnphnbCn01W1XovRM7WYKkCnqfpCwGCLWC4Vglu-XNVyEjSbBYpVMAKapG_TBDrYkb7TWBHL-x2tBbhV97JvMtzzIitHxZI6PFpic"
  },
  {
    id: 8,
    title: "Dark Chocolate",
    price: 1299,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5-H4JvmXzY2XEXP7A3hoVfLANynZr9Hg4qq6f0FM8Tt-prFyVPh85G3HZEEOgNKuksGNaAVVNhQyFS-ICbOwWt4CFZOK0BXnkDBqZRBz8lTfY9ZKQ9KDhn8AajrdReqmTDfTzO4O147shPZULUv5qFkDWyYRKyehAvBVEmpt7VW284sYaLSDNmek7FIK0eR0dRiSskx84sLf_AcK8sw8KONhbp7aV93Uqzu-JpH9CHqX0hnnx5DykJHiQs-XmVUyzVN0DNC1718Q"
  }
];

const ChocolateShowcase = () => {
  return (
    <div>
        <section className="min-h-screen bg-[#131313] py-20 px-6">
        <div className="max-w-6xl mx-auto">
       <div className="grid grid-cols-4 gap-6">
     {products.map((item) => (
       <div key={item.id} >

      <img
        src={item.img}
        alt={item.title}
        className="
          w-full h-[300px]
          object-cover
          border border-[#d4af37]/40
          rounded-xl
          transition-transform duration-500
          hover:scale-110
        "
      />
      
    <div  className='flex justify-between'>
     <h3 className="text-white mt-2">{item.title}</h3>
     <p className="text-[#d4af37]">₹{item.price}</p>
    </div>


    </div>
  ))}
</div>
</div>     
</section>
</div>
  )
}

export default ChocolateShowcase

