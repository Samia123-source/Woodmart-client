
import { FaStar } from "react-icons/fa";
import {
  FaSearch, 
  FaRegHeart,
  FaShoppingCart,
} from "react-icons/fa";


const products = [
  {
    cat: "subtitle",
    title: "Keyboard",
    image: "https://woodmart.xtemos.com/keyboards/wp-content/uploads/sites/36/2026/04/dbt-milk--honey-430x491.jpeg.webp",
       image2: "https://woodmart.xtemos.com/keyboards/wp-content/uploads/sites/36/2026/04/dbt-milk--honey-1.jpeg",
       price: "$400",
       rating: "4.0"
  },
  {
    cat: "subtitle",
    title: "Keyboard",
    image: "https://woodmart.xtemos.com/keyboards/wp-content/uploads/sites/36/2026/04/lofree-retro-430x491.jpeg.webp",
       image2: "https://woodmart.xtemos.com/keyboards/wp-content/uploads/sites/36/2026/04/lofree-retro-1.jpeg",
       price: "$400",
       rating: "4.0"
  },
  {
    cat: "subtitle",
    title: "Keyboard",
    image: "https://woodmart.xtemos.com/keyboards/wp-content/uploads/sites/36/2026/04/melgeek-horseman-430x491.jpeg.webp",
       image2: "https://woodmart.xtemos.com/keyboards/wp-content/uploads/sites/36/2026/04/melgeek-horseman-1.jpeg",
       price: "$400",
       rating: "4.0"
  },
  {
    cat: "subtitle",
    title: "Keyboard",
    image: "https://woodmart.xtemos.com/keyboards/wp-content/uploads/sites/36/2026/04/melgeek-label-430x491.jpeg.webp",
       image2: "https://woodmart.xtemos.com/keyboards/wp-content/uploads/sites/36/2026/04/melgeek-label-1.jpeg",
       price: "$400",
       rating: "4.0"
  },
 
];


function ProductCard({ title, image, cat , price,rating,image2 }) {
  return (
    <div className="relative rounded-3xl h-[400px] w-[320px] shadow-xl overflow-hidden group">
      <div
        className="absolute inset-0 bg-cover bg-center duration-500 group-hover:opacity-0"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div
        className="absolute inset-0 bg-cover bg-center duration-500 opacity-0 group-hover:opacity-100"
        style={{ backgroundImage: `url(${image2})` }}
      />
     <div className="absolute bg-none text-black top-0 left-0 right-0 p-5  overflow-hidden duration-300 ">
        <p className="font-bold text-lg ">{title}</p>
        <p>{cat}</p>
      </div>
       <div className="absolute bg-none text-black bottom-0 left-0 right-0 px-5 h-10 overflow-hidden duration-300 group-hover:h-20">
        <p className="text-xl text-orange-400 pb-2">{price}</p>
        <p className="flex flex-row items-center gap-2">{rating}<FaStar className="text-yellow-300"></FaStar></p>
      </div>
      <div  className="absolute   top-0 bottom-0 right-0 h-full flex justify-end items-end  w-0 overflow-hidden duration-300 group-hover:w-20">
       <div className="bg-white  shadow-md rounded-md m-2 p-4 flex flex-col gap-4 text-black text-2xl">  <FaShoppingCart />
       <FaSearch />
       <FaRegHeart /></div>
      </div>
    </div>
  );
}


const Accessories = () => {
  return (
     <div>
              
     <div className="px-20 py-10 text-5xl text-black font-bold">   
        <p>Accessories</p>
    </div>
      <div className="flex flex-row px-20  gap-5">
        {products.map((item, index) => (
        <ProductCard key={index} title={item.title} image={item.image} image2={item.image2} cat={item.cat} price={item.price} rating={item.rating}  />
      ))}
      </div>
     </div>
   
  )
}

export default Accessories