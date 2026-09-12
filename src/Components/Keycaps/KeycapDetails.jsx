import { FaCheck, FaCheckCircle, FaRegHeart, FaShoppingCart } from "react-icons/fa"
import { Carousel } from "react-responsive-carousel"
import { Link } from "react-router-dom"
import Rewired from "./Rewired"
import Bask from "./Bask"
import Reviews from "./Reviews"
import Reference from "./Reference"


const items =[
  {
       cat: "Keycaps",
       title: "DBT Milk & Honey",
       image: "https://woodmart.xtemos.com/keyboards/wp-content/uploads/sites/36/2026/04/dbt-milk--honey-430x491.jpeg.webp",
       image2: "https://woodmart.xtemos.com/keyboards/wp-content/uploads/sites/36/2026/04/dbt-milk--honey-1.jpeg",
       image3: "https://woodmart.xtemos.com/keyboards/wp-content/uploads/sites/36/2026/04/dbt-milk--honey-2.jpeg",
       price: "$30.25",
       rating: "4.0"
  }


]
const KeycapDetailsCard = ({cat,title,image,image2,image3,price,rating}) => {
  return (
    <div className="pt-10 px-24  ">


    
      <div className="flex flex-row gap-4 w-full">
         <div className="w-[90%] bg-white rounded-xl pl-6  flex items-center gap-4 h-12 ">
         <Link to="/">Home /</Link>
        <Link to="/keycapList"> Keycaps /</Link>
        <p className="text-black text-base">  DBT Milk & Honey </p>
       </div>
       <div className="w-[10%] bg-white rounded-xl  flex items-center  h-12 ">
         
       </div>
      </div>
      
  {/* left Side */}

    <div className="flex flex-row gap-12 w-full  ">
      <div className="w-[60%] pt-8">
      <div className="">
          <div className=" rounded-3xl  bg-white">
            <img  className="w-full rounded-3xl"  src={image} alt="" />
          </div>


        {/* bottom */}

          <div className=" flex flex-row w-full gap-4 mt-4 ">

          <div>
          <img className="rounded-3xl hover:scale-105 duration-200" src={image2} alt="" />
          </div>
   
          <div>        
          <img className="rounded-3xl hover:scale-105 duration-200" src={image3} alt="" /></div>
          </div>

      </div>
      <div>
        <div></div>
        <div></div>
      </div>
      </div>

    
      

       {/* Right Side */}

       <div className="w-[40%]">


       
      <div className="text-black w-[500px] h-[280px] bg-white rounded-3xl p-8 my-8">
         <p className="text-3xl font-semibold">{title}</p>
         <p className="text-base mt-2 flex gap-2 "><FaCheckCircle className="w-4 mt-1"/>67% layout, fully aluminum gasket-mounted case</p> 
         <p className="text-base mt-2 flex gap-2" > <FaCheckCircle className="w-4 mt-1"/>Hot-swappable connectors and stabilizers included</p>
         <p className="text-base mt-2 flex gap-2" > <FaCheckCircle className="w-4 mt-1"/>Proprietary materials produce a deep sound</p> 

         <p className="text-2xl mt-4">{price}</p>

         <div className="flex gap-8">
  
         <button className="bg-orange-500 text-white rounded-2xl text-center p-2 w-28 mt-4">Add to Cart</button>
         <FaRegHeart></FaRegHeart>
         
          </div>   
        
     </div>

     
     <div className="w-[500px] h-[200px] mt-6 rounded-2xl px-6 py-8 bg-white">
      <p className="text-black font-bold">Don't Miss Top Accessories</p>
      

      <div className="flex mt-2">
        <div>
        <img src="https://woodmart.xtemos.com/keyboards/wp-content/uploads/sites/36/2026/04/tx-switch-puller-64x74.jpeg" alt="" />
      </div>
      <div className="ml-8">
         <h1 className="text-black text-lg">TX Switch Puller</h1>
         <p className="text-orange-400 text-base">$8.00</p>

         <button className=" mt-6 bg-orange-500 text-white rounded-2xl text-center p-2 w-28">Add to cart</button>
      </div>
      <div className="relative">
        <button className="bg-orange-500 h-10 rounded-2xl p-2 text-white ml-20 mt-8 ">Add to Cart <FaShoppingCart className="absolute overflow-hidden duration-100 group-hover:h-20"/></button>
      </div>
      </div>
     </div>
{/* Accordian */}

     <div className="py-8">
      <div className="collapse collapse-arrow bg-white">
  <input type="radio" name="my-accordion-2"  />
  <div className="collapse-title text-xl font-medium">Shipping Information</div>
  <div className="collapse-content">
    <p>All orders will be shipped by NuPhy within 48 hours of order confirmation, tracking numbers are provided no later than a day after shipment on business days. You can check Shipping Policy for more information.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-white">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium">Warrenty Policy</div>
  <div className="collapse-content">
    <p>NuPhy offers a 1-year limited warranty for all NuPhy products. If there is any quality issue, please send relevant images or videos to service@nuphy.com for review.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-white">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium">Secure Payment</div>
  <div className="collapse-content">
    <p>NuPhy offers a 1-year limited warranty for all NuPhy products. If there is any quality issue, please send relevant images or videos to service@nuphy.com for review.</p>
  </div>
</div>
     </div>

     </div>
      
    </div>  
      

      {/* Carousel */}
     <div className="pt-16 ">
        <div className="carousel w-full rounded-3xl">

  <div id="slide1" className="carousel-item relative w-full">
    <img
      src="https://woodmart.xtemos.com/keyboards/wp-content/uploads/sites/36/2026/04/kac-porudct-slide-5.jpg.webp"
      className="w-full h-[500px] object-cover"
    />

    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>

  <div id="slide2" className="carousel-item relative w-full">
    <img
      src="https://woodmart.xtemos.com/keyboards/wp-content/uploads/sites/36/2026/04/kac-porudct-slide-6.jpg.webp"
      className="w-full h-[500px] object-cover"
    />

    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>

  <div id="slide3" className="carousel-item relative w-full">
    <img
      src="https://woodmart.xtemos.com/keyboards/wp-content/uploads/sites/36/2026/04/kac-porudct-slide-3.jpg.webp"
      className="w-full h-[500px] object-cover"
    />

    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>

  <div id="slide4" className="carousel-item relative w-full">
    <img
      src="https://woodmart.xtemos.com/keyboards/wp-content/uploads/sites/36/2026/04/kac-porudct-slide-1.jpg.webp"
      className="w-full h-[500px] object-cover"
    />

    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>


  <div id="slide4" className="carousel-item relative w-full">
    <img
      src="https://woodmart.xtemos.com/keyboards/wp-content/uploads/sites/36/2026/04/kac-porudct-slide-2.jpg.webp"
      className="w-full h-[500px] object-cover"
    />

    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>

</div>
     </div>
   
     <div className="py-16 ">
      <Rewired></Rewired>
     </div>

     <div className="py-16">
      <Bask></Bask>
     </div>

     <div className="py-16">
      <Reviews></Reviews>
     </div>
     <div className="py-16">
        <Reference></Reference>

     </div>


    </div>

   
  )
}



const KeycapDetails = () =>{

  return(
   <div>
    {

      items.map((item,index) => (
        <KeycapDetailsCard key={index}  title={item.title} image={item.image} image2={item.image2} image3={item.image3} cat={item.cat} price={item.price} rating={item.rating}></KeycapDetailsCard>
      ))
    }
  
  
   </div>

  )
}

export default KeycapDetails