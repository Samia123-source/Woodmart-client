
import { FaArrowRight, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  FaSearch, 
  FaRegHeart,
  FaShoppingCart,
} from "react-icons/fa";
import Offers from "./Offers";
import Switches from "./Switches";
import Community from "./Community";
import Footer from "../Footer";





const Home = () => {
  return (
    <div className="bg-gray-200 min-h-screen">

      {/* ================= HERO TEXT SECTION ================= */}
      <div className="flex flex-col lg:flex-row lg:gap-20 px-5 sm:px-8 lg:px-16 xl:px-24">

        {/* LEFT SIDE */}
        <div className="py-10 sm:py-14 lg:py-20 w-full lg:w-auto">

          {/* First line */}
          <div className="flex flex-wrap  items-center text-3xl sm:text-5xl lg:text-6xl text-[#242424] lg:w-[600px]">
            <h2>Build Your</h2>

            <img
              className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-2 sm:mx-3 lg:mx-4 rounded-lg"
              src="https://woodmart.xtemos.com/keyboards/wp-content/uploads/sites/36/2026/04/kac-hero-keycap.jpg.webp"
              alt=""
            />

            <p>personal</p>
          </div>

          {/* Second line */}
          <div className="flex flex-wrap items-center text-3xl sm:text-5xl lg:text-6xl text-[#242424] mt-2">
            <h2>greatest</h2>

            <img
              className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-2 sm:mx-3 lg:mx-4 rounded-lg"
              src="https://woodmart.xtemos.com/keyboards/wp-content/uploads/sites/36/2026/04/kac-hero-switch.jpg.webp"
              alt=""
            />

            <p>keyboard</p>
          </div>

        </div>


        {/* RIGHT SIDE DESCRIPTION */}
        <div className="py-5 sm:py-8 lg:py-24 w-full lg:w-[400px]">

          <p className="text-black text-lg sm:text-xl lg:text-2xl mb-5 font-semibold leading-relaxed">
            High-quality mechanical keyboards, switches, keycaps and
            accessories from well-known manufacturers.
          </p>

          <button className="flex items-center justify-center bg-[#fb6a19] w-[140px] h-[42px] text-white rounded-2xl px-5 py-2 hover:bg-orange-600 transition">
            Shop now
            <FaArrowRight className="ml-2" />
          </button>

        </div>

      </div>


      {/* ================= PRODUCT CARDS ================= */}
      <div className="flex flex-col lg:flex-row px-5 sm:px-8 lg:px-16 xl:px-24 gap-6 pb-10">


        {/* ================= CARD 1 ================= */}
        <div
          className="
            w-full
            sm:w-[410px]
            lg:w-[calc(33.333%-16px)]
            xl:w-[410px]
            h-[500px]
            sm:h-[540px]
            mx-auto
            rounded-3xl
            bg-cover
            bg-center
            bg-no-repeat
            bg-[url('https://woodmart.xtemos.com/keyboards/wp-content/uploads/sites/36/2026/04/kac-hero-banner-1.jpg.webp')]
          "
        >
          <Link>
            <div className="text-black p-5 sm:p-6 pt-[280px] sm:pt-[320px]">

              <button className="rounded-2xl bg-blue-500 text-white px-4 py-1 text-sm">
                New Arrival
              </button>

              <h2 className="text-2xl sm:text-3xl font-bold mt-2">
                GMK SA profile keycaps
              </h2>

              <p className="text-sm sm:text-[16px] mt-2">
                Keycaps provide top-notch durability and a great feel for your
                typing.
              </p>

              <button className="rounded-3xl py-1 text-white w-24 h-8 mt-4 bg-[#fb6a19] hover:bg-orange-600">
                Buy now
              </button>

            </div>
          </Link>
        </div>


        {/* ================= CARD 2 ================= */}
        <div
          className="
            w-full
            sm:w-[410px]
            lg:w-[calc(33.333%-16px)]
            xl:w-[410px]
            h-[500px]
            sm:h-[540px]
            mx-auto
            rounded-3xl
            bg-cover
            bg-center
            bg-no-repeat
            bg-[url('https://woodmart.xtemos.com/keyboards/wp-content/uploads/sites/36/2026/04/kac-hero-banner-2-430x564.jpg.webp')]
          "
        >

          <div className="text-white p-5 sm:p-6 pt-[280px] sm:pt-[320px]">

            <button className="rounded-2xl bg-[#fb6a19] text-white w-28 h-8">
              Coming Soon
            </button>

            <h2 className="text-2xl sm:text-3xl font-bold mt-2">
              NuPhy Gem80
            </h2>

            <p className="text-sm sm:text-[16px] mt-2">
              The text for this banner, which will be replaced by some other
              one.
            </p>

            <button className="rounded-3xl py-1 text-white w-32 h-10 mt-4 bg-[#fb6a19] hover:bg-orange-600">
              Pre-order Now
            </button>

          </div>

        </div>


        {/* ================= CARD 3 - VIDEO ================= */}
        <div className="relative overflow-hidden w-full sm:w-[410px] lg:w-[calc(33.333%-16px)] xl:w-[410px] h-[500px] sm:h-[540px] mx-auto rounded-3xl">

          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source
              src="https://woodmart.xtemos.com/keyboards/wp-content/uploads/sites/36/2026/04/kac-hero-banner-3.mp4"
              type="video/mp4"
            />
          </video>

          {/* Optional dark overlay */}
          <div className="absolute inset-0 bg-black/10"></div>

          {/* Content */}
          <div className="relative z-10 text-white p-5 sm:p-6 pt-[280px] sm:pt-[320px]">

            <button className="rounded-2xl bg-blue-500 text-white px-4 py-1 text-sm">
              New Arrival
            </button>

            <h2 className="text-2xl sm:text-3xl font-bold mt-2">
              Gateron KS-9 3.0
            </h2>

            <p className="text-sm sm:text-[16px] mt-2">
              The text for this banner, which will be replaced by some other
              one.
            </p>

            <button className="rounded-3xl py-2 text-white w-36 h-12 mt-4 bg-[#fb6a19] hover:bg-orange-600">
              Explore Switches
            </button>

          </div>

        </div>

      </div>

    

{/* items card 1 */}
  <div className="flex px-24 gap-6 text-black">

      <div className=" ">

        <div className="card bg-white  shadow-xl w-[304px] h-[304px] p-2 ">
          <figure>
            <img className="w-full"
              src="https://woodmart.xtemos.com/keyboards/wp-content/uploads/sites/36/2026/04/kac-category-accessories-430x430.jpg.webp"
              alt="Shoes" />
          </figure>

          <h2 className="card-title ">Accessories</h2>

          <button>16 products</button>    
        </div>

      </div>

{/* items card 2 */}

      <div className="px-">

        <div className="card bg-white  shadow-xl w-[304px] h-[304px] p-2 ">
          <figure>
            <img className="w-full"
              src="https://woodmart.xtemos.com/keyboards/wp-content/uploads/sites/36/2026/04/kac-category-keyboards-430x430.jpg.webp"
              alt="Shoes" />
          </figure>

          <h2 className="card-title ">Accessories</h2>

          <button>16 products</button>    
        </div>

      </div>

{/* items card 3 */}

      <div className="">

        <div className="card bg-white  shadow-xl w-[304px] h-[304px] p-2 ">
          <figure>
            <img className="w-full"
              src="https://woodmart.xtemos.com/keyboards/wp-content/uploads/sites/36/2026/04/kac-category-keycaps-430x430.jpg.webp"
              alt="Shoes" />
          </figure>

          <h2 className="card-title ">Accessories</h2>

          <button>16 products</button>    
        </div>

      </div>

{/* items card 4*/}

      <div className="">

        <div className="card bg-white  shadow-xl w-[304px] h-[304px] p-2 ">
          <figure>
            <img className="w-full"
              src="https://woodmart.xtemos.com/keyboards/wp-content/uploads/sites/36/2026/04/kac-category-switches-430x430.jpg.webp"
              alt="Shoes" />
          </figure>

          <h2 className="card-title text-lg  ">Accessories</h2>

          <button>16 products</button>    
        </div>

      </div>

    </div>

 <div className="py-24 px-24">
      <h2 className="mb-8 text-4xl font-bold">Keyboards</h2>

      <div className="relative w-[330px] h-[376px]">
  <img
    src="https://woodmart.xtemos.com/keyboards/wp-content/uploads/sites/36/2026/04/akko-3108-sp-430x491.jpeg.webp"
    alt=""
    className="w-full h-full object-cover rounded-2xl"
  />

 
   <div className=" absolute border-black border w-[290px] h-[120px]  left-5 text-black top-3 w-">
    <div>
      <h2 className="text-lg font-bold">	Akko 3108 SP</h2>
    <p className="text-sm">Keyboards</p>
    </div>
    <div className=" absolute w-[290px] h-[120px] mt-44 justify-between items-end border-black border flex">
       <p className="  text-[#fb6a19] left-3 ">$74.99</p>

       <p className="flex"> 5.00<FaStar></FaStar></p>
    
     
     
     
      <div className="join join-vertical gap-4 rounded-md ">
  <button className="join-item w-[20px] h-[20px]"><FaShoppingCart></FaShoppingCart></button>
  <button className=" join-item w-[20px] h-[20px]"><FaSearch></FaSearch></button>
  <button className=" join-item w-[20px] h-[20px]"><FaRegHeart></FaRegHeart></button>


    </div>
   
    </div>
    
  
 </div>
  
 
</div>
      
 </div>



 <div className=" px-16  ">
  <Offers></Offers>

 </div>

 <Switches></Switches>
 <Community></Community>
 <Footer></Footer>

    </div>
  );
};

export default Home;

