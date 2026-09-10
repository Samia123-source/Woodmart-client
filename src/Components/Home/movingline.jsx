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

function MovingLine() {
  return (
    <div className="bg-blue-700 mx-40 py-4 rounded-3xl my-4">
    <Marquee gradient={false} speed={50} pauseOnHover >
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-3 mx-8">
          <img
            src={item.image}
            alt={item.text}
            className="w-12 h-12 rounded-lg object-cover"
          />
          <p className="text-xl font-semibold whitespace-nowrap">
            {item.text}
          </p>
        </div>
        
      ))}
    </Marquee>
    </div>
  );
}

export default MovingLine;
