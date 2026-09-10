
const accessories = [
  {
    subt: "subtitle",
    title: "Accessories",
    image: "https://woodmart.xtemos.com/keyboards/wp-content/uploads/sites/36/2026/04/kac-category-accessories-430x430.jpg.webp",
  },
  {
    subt: "subtitle",
    title: "Accessories",
    image: "https://woodmart.xtemos.com/keyboards/wp-content/uploads/sites/36/2026/04/kac-category-keyboards-430x430.jpg.webp",
  },
  {
    subt: "subtitle",
    title: "Accessories",
    image: "https://woodmart.xtemos.com/keyboards/wp-content/uploads/sites/36/2026/04/kac-category-keycaps-430x430.jpg.webp",
  },
  {
    subt: "subtitle",
    title: "Accessories",
    image: "https://woodmart.xtemos.com/keyboards/wp-content/uploads/sites/36/2026/04/kac-category-switches-430x430.jpg.webp",
  },
];

function AccessoryCard({ title, image, subt }) {
  return (
    <div className="relative rounded-3xl h-[300px] w-[300px] shadow-xl overflow-hidden group">
      <div
        className="h-full w-full bg-cover bg-center duration-300 group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      />
    
       <div className="absolute bg-none text-black bottom-0 left-0 right-0 px-10 h-10 overflow-hidden duration-300 group-hover:h-20">
        <p className="font-bold text-2xl pb-2">{title}</p>
        <p>{subt}</p>
      </div>
    </div>
  );
}

function Accessories() {
  return (
    <div className="flex flex-row px-40 gap-10">
      {accessories.map((item, index) => (
        <AccessoryCard key={index} title={item.title} image={item.image} subt={item.subt}/>
      ))}
    </div>
  );
}

export default Accessories
