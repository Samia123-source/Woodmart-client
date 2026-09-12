


const Bask = () => {
  return (
    <div>
        <div className="flex gap-6 w-full h-full ">
           <div className="w-70"> 
             <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className=" inset-0 w-full h-full object-cover"
          >
                    <source
                     src="https://woodmart.xtemos.com/keyboards/wp-content/uploads/sites/36/2026/04/9-2-opt.mp4"
                     type="video/mp4"
                       />
                      </video>
           </div>

            
           <div className="bg-[#54CEB6] w-[400px] h-[410px] px-10 pt-10 ">
           <p className="bg-blue-600 text-white p-1 w-28 mb-2 text-center rounded-2xl">New arrivals</p>

           
            <p className="text-white  text-4xl">Bask in the fresh Air <span className="text-gray-400"> ‘Less is more’ has been our mantra when it comes to designing </span></p>

         
           </div>
        </div>

      <div className="flex gap-6 py-6">
          <div>
            
            <div className="w-[430px] h-[423px] px-8 bg-yellow-400 py-10 rounded-3xl font-bold  ">
              <p className="bg-blue-600 text-white p-1 w-20 text-center rounded-2xl">Keycaps</p>
             <p className="text-white text-3xl"> Double-shot PBT keycaps <br /> at half the thickness <br />
             <span className="text-[#ffffff66]">Double-shot PBT keycaps are finally coming to Air75!</span></p>
            </div>

        <div>                    
                      
          <video
                     
            autoPlay
            loop
            muted
            playsInline
            className=" inset-0 mt-8 rounded-3xl object-cover w-[430px] h-[423px]"
          >
            <source
              src="https://woodmart.xtemos.com/keyboards/wp-content/uploads/sites/36/2026/04/6-opt.mp4"
              type="video/mp4"
            />
          </video>
                </div>

           
        </div>

        <div className="w-full">
          <img className="w-full h-full rounded-3xl"  src="https://woodmart.xtemos.com/keyboards/wp-content/uploads/sites/36/2026/04/kac-porudct-overview-air75-l.jpg" alt="" />            
        </div>

      </div>


      <div className="flex gap-5 py-2 ">
            
           <div className="h-96">
             <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className=" inset-0 w-full h-full object-cover rounded-3xl"
          >
                    <source
                     src="https://woodmart.xtemos.com/keyboards/wp-content/uploads/sites/36/2026/04/3-opt.mp4"
                     type="video/mp4"
                       />
                      </video>
           </div>

           <div>
                <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className=" inset-0 w-full h-full object-cover rounded-3xl"
          >
                    <source
                     src="https://woodmart.xtemos.com/keyboards/wp-content/uploads/sites/36/2026/04/7-opt.mp4"
                     type="video/mp4"
                       />
                      </video>

           </div>

           <div className="">
                 <video
                 
                      autoPlay
                      loop
                      muted
                      playsInline
                      className=" inset-0 w-full h-full object-cover rounded-3xl"
          >
                    <source
                     src="https://woodmart.xtemos.com/keyboards/wp-content/uploads/sites/36/2026/04/4-opt.mp4"
                     type="video/mp4"
                       />
                      </video>
             
           </div>


      </div>

      <div>
        

      </div>


      <div className="w-full bg-white py-12 px-16 mt-6 rounded-3xl">

        <h3 className="text-4xl font-bold text-black mb-4">Tech specs</h3>
       
       
      <div className="flex justify-between mr-20 w-3/4">

     <div>
           <h2 className="text-3xl text-black font-bold mb-6">Physical Build</h2>
        <div className="flex gap-16">
         <div className="text-gray-500  ">
            <p> Keycap profile</p>
          <p>Keycap Material</p>
          <p>Keycap Thickness</p>
          <p>Keycap Finish</p>
        </div>

           <div className="text-black">
          <p>Cherry</p>
          <p>PBT</p>
          <p>Thick</p>
          <p>Matte</p>
        </div>
     </div>
     </div>
        
     

     
     {/* Aesthetics */}

    <div className="">
       <h2 className="text-3xl text-black font-bold mb-6 ">Aesthetics & Legends</h2>
       <div className="flex gap-16 ">
         <div className="text-gray-500  ">
            <p>Legend Type</p>
          <p>Printing Method</p>
          <p>Colorway Style</p>
          <p>Shine-through</p>
        </div>
         <div className="text-black">
          <p>Blank</p>
          <p>Double-shot</p>
          <p>RGB</p>
          <p>Yes</p>
        </div>
     </div>
    </div>
        
       
      </div>

     {/* Compability */}

      <h2 className="text-3xl text-black font-bold mb-6 my-8">Compability & Layout</h2>
        <div className="flex gap-16">
         <div className="text-gray-500  ">
            <p> Set Size</p>
          <p>Compability</p>
       
        </div>
        
        <div className="text-black ">
          <p>75%</p>
          <p>ANSI</p>
         
        </div>
     </div>


            
           
        
      
      </div>


        <div>
            <div>

            </div>

            <div>


            </div>
        </div>
    </div>
  )
}

export default Bask