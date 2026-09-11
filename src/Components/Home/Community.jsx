import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa"


const Community = () => {
  return (
    <div className=" px-28 ">
   <div className="">

         <div className="bg-[#c1bdfb] rounded-3xl w-4/4 h-full py-16 mt-10 pl-20 justify-center flex">
          <div className="w-1/2 items-center justify-center mt-10 ">
              <p className="text-4xl text-white mb-8">Join our community, <span className="text-gray-400">discuss, share, and be the first to learn about new products and sales.</span></p>
             <div className="flex gap-2">
                 <input type="text" name="email" placeholder="    Your Email Address" className="bg-white w-3/4 h-12  rounded-3xl" />
               <button className="bg-blue-500 w-24 text-white rounded-3xl">Sign Up</button>
            
             </div>
             <p className="text-base text-white mt-8">Will be used in accordance with our Privacy Policy</p>
             
             <div className="flex rounded-full gap-3 mt-8 ">
                <button className="hover:bg-blue-600 rounded-full"><FaFacebook className="w-full h-10 text-white "></FaFacebook></button>
                <button className="hover:bg-[#774430] rounded-full"> <FaInstagram className="w-full h-10 text-white"></FaInstagram></button>
                <button className="hover:bg-black rounded-full"><FaGithub className="w-full h-10 text-white"></FaGithub></button>
                
               
                
             </div>
          </div>

          <div className="flex w-1/2 gap-2 ">
               <div>
                 <img className="object-cover w-[178px] h-[170px] rounded-2xl mb-2"   
                src="https://woodmart.xtemos.com/keyboards/wp-content/uploads/sites/36/2026/04/kac-instagram-1.jpg.webp" alt="" />
           
            <img className="object-cover w-[178px] h-[219px] rounded-2xl "  
            src="https://woodmart.xtemos.com/keyboards/wp-content/uploads/sites/36/2026/04/kac-instagram-2-244x300.jpg.webp" alt="" />
             
               </div>
             
             <div>
                <img className="object-coverw-[178px] h-[218px] rounded-2xl mb-2 "  
             src="https://woodmart.xtemos.com/keyboards/wp-content/uploads/sites/36/2026/04/kac-instagram-3-245x300.jpg.webp" alt="" />
             
             <img className="object-cover w-[178px] h-[170px] rounded-2xl " 
              src="https://woodmart.xtemos.com/keyboards/wp-content/uploads/sites/36/2026/04/kac-instagram-4.jpg.webp" alt="" />
             
             </div>
             
             <div>
                <img className="object-cover w-[178px] h-[170px] rounded-2xl mb-2 "  
             src="https://woodmart.xtemos.com/keyboards/wp-content/uploads/sites/36/2026/04/kac-instagram-5.jpg.webp" alt="" />
             <img className="object-cover w-[178px] h-[218px] rounded-2xl " 
              src="https://woodmart.xtemos.com/keyboards/wp-content/uploads/sites/36/2026/04/kac-instagram-6-245x300.jpg.webp" alt="" />
             </div>
          
          
          </div>
          
        </div>
        
       


   </div>
       
    </div>
  )
}

export default Community