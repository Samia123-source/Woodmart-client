

const Reference = () => {

    
  return (
    <div>
{/* Reference */}
        <div>
            <p>You may also like...</p>
     {/* mapping hobe */}

        </div>

        <div className="bg-[#c1bdfb] rounded-3xl w-full flex justify-between gap-6 py-16 px-12 ">
            <div className="w-1/2 text-4xl text-white font-bold">
                <p>Join our community, <span className="text-gray-400 "> discuss, share, and be the first to learn about new products and sales.</span></p>
            </div>


          <div className="w-1/2 h-12">
    
            <div className="w-full flex gap-2 h-12">
               <input type="text" name="email" placeholder="Your email address" className="p-4 bg-white rounded-3xl w-full"/>
               <button className="bg-blue-500 rounded-3xl w-28 p-1 text-white">Sign Up</button>
            </div>
             <p className="text-white text-lg ml-4 mt-6">Will be used in accordance with our Privacy Policy</p>
          </div>
           
        </div>
        
    </div>
  )
}

export default Reference