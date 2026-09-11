import { FaArrowAltCircleDown, FaArrowRight } from "react-icons/fa"


const Offers = () => {
  return (
    <div className="bg-[#242424] px-16 py-20 rounded-2xl w-[1370px] h-[1200px]  ">
            <p className="text-4xl text-white font-bold pb-16">Profitable offers. <span className="text-gray-500"> Switches, keycaps, custom assemblies create your perfect build.</span></p>
        <div className="card card-side bg-[#bfbdbd] shadow-xl ">
        
              <div className="py-16 pl-10 w-[635px] h-[440px] ">
                <div>
                  <p className="text-sm w-20 text-center text-white bg-blue-500 rounded-md">Keyboard</p>
    <h2 className="card-title text-black text-2xl">Lofree Block</h2>
    <p className="font-semibold text-orange-500">$169.00</p>
                </div>
    <div className="justify-start items-end mt-36">
       
       <p className="text-black k">This design not only complements any workspace but also enhances typing efficiency, 
          making the Block a stylish
         yet functional choice for minimalism users.</p>
         <button className="text-white bg-orange-500 rounded-3xl p-2 justify-center w-28 mt-3 flex gap-2">Explore <FaArrowRight className="mt-1"></FaArrowRight></button>
    </div>
  </div>
  <figure className="bg-[#f6f6f6] w-[635px] h-[438px] rounded-2xl " >
    <img className="w-[635px] h-[430px]  "
      src="https://woodmart.xtemos.com/keyboards/wp-content/uploads/sites/36/2026/04/kac-offers-keyboard.jpg"
      alt="Movie" />
  </figure>

</div>


{/* 2nd card */}
<div className="flex gap-4">
  <div className="w-[836px] h-[430px] mt-8 rounded-3xl bg-[#db2323]">
  <div className="flex gap-3">
                 <div className="py-16 pl-10 w-[435px] h-[440px] ">
                <div>
                  <p className="text-sm w-20 text-center text-white bg-blue-500 rounded-md">Keyboard</p>
    <h2 className="card-title text-white text-2xl">Lofree Block</h2>
    <p className="font-semibold text-white">$169.00</p>
                </div>
    <div className="justify-start items-end mt-28">
       
       <p className="text-white text-justify">This design not only complements any workspace but also enhances typing efficiency, 
          making the Block a stylish
         yet functional choice for minimalism users.</p>
         <button className="text-white bg-blue-500 rounded-3xl p-2 justify-center w-28 mt-3 flex gap-2">Explore <FaArrowRight className="mt-1"></FaArrowRight></button>
        </div>
  </div>
    

     <div>
      <img className="w-[435px] h-[430px] rounded-3xl "
      src="https://woodmart.xtemos.com/keyboards/wp-content/uploads/sites/36/2026/04/kac-offers-keycaps.jpg"
      alt="" />
   </div>

  </div>  
      
</div>

{/* 3rd Card */}
<div className="card bg-[#c6a8e2] w-[413px] h-[430px] shadow-xl mt-8 ">
  <figure >
    <img className="w-[413px] h-[230px]"
      src="https://woodmart.xtemos.com/keyboards/wp-content/uploads/sites/36/2026/04/kac-offers-switches.jpg"
      alt="Shoes" />
  </figure>
  <div className="w-[413px] h-[200px] px-6 mt-6">
     <button className="bg-blue-500 rounded-2xl p-1 mb-4 w-16 text-sm text-white">Switches</button>
    <h2 className="card-title text-white text-3xl">
      Wuque WS POM+
     
    </h2>
    <p className="text-white text-lg font-semibold">$7.20</p>
    <button className="text-white bg-orange-500 rounded-3xl p-2 justify-center w-28 mt-3 flex gap-2">Explore <FaArrowRight className="mt-1"></FaArrowRight></button>

  </div>
</div>


</div>
    </div>
  )
}

export default Offers