
import * as MarqueeImport from "react-fast-marquee";
const Marquee = MarqueeImport.default?.default ?? MarqueeImport.default ?? MarqueeImport;


const items = [
   {
    image:
      "https://woodmart.xtemos.com/keyboards/wp-content/uploads/sites/36/2026/05/kac-marquee-rd-switch-opt.gif",
    text: "Free delivery on orders over $59,99",
  },
  {
    image:
      "https://woodmart.xtemos.com/keyboards/wp-content/uploads/sites/36/2026/05/kac-marquee-rd-keycap-opt.gif",
    text: "Get 15% your first purchase!",
  },
  {
    image:
      "https://woodmart.xtemos.com/keyboards/wp-content/uploads/sites/36/2026/05/kac-marquee-rd-switch-opt.gif",
    text: "Free delivery on orders over $59,99",
  },
];

const MovingSlide = () => {
  return (
    <div className="bg-blue-600 py-6 rounded-2xl text-xl text-white mx-24">
      <Marquee gradient={false} speed={50} pauseOnHover >
       {
         items.map((item, index) => (
          <div key={index} className="flex items-center gap-2 mx-8 ">
               <img src={item.image} alt={item.text}
               className="w-12 h-12 rounded-lg object-cover" />
               <p className="text-xl font-semibold whitespace-nowrap">{item.text}</p>
          </div>

        ))
       }
      </Marquee>
    </div>
  )
}

export default MovingSlide