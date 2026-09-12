import { FaRegStar, FaStar, FaStarOfLife } from "react-icons/fa"


const Reviews = () => {
  return (
    <div className="bg-white p-20 rounded-3xl w-full">

<div className="flex justify-between">

            <div className="w-1/2">
         <h2 className="text-4xl mb-8">Reviews</h2>
        
         <div className="justify-center flex text-lg gap-1  ">
        <FaRegStar></FaRegStar>
        <FaRegStar></FaRegStar>
        <FaRegStar></FaRegStar>
        <FaRegStar></FaRegStar>
        <FaRegStar></FaRegStar>           
         </div>
        <p className="text-center text-lg">0 reviews</p>
        
{/* 1st */}

  <div className="rating rating-md w-full mt-6  gap-1 ">
           
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-yellow-500" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-yellow-500" defaultChecked />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-yellow-500" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-yellow-500" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-yellow-500" />
</div>
{/* 2nd */}

  <div className="rating rating-md w-full mt-6  gap-1 ">
           
  <input type="radio" name="rating-6 " className="mask mask-star-2 bg-yellow-500" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-yellow-500" defaultChecked />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-yellow-500" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-yellow-500" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-yellow-500" />
</div>
{/* 3rd */}

  <div className="rating rating-md w-full mt-6  gap-1 ">
           
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-yellow-500" />
  <input type="radio" name="rating-10" className="mask mask-star-2 bg-yellow-500" defaultChecked />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-yellow-500" />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-yellow-500" />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-yellow-500" />
</div>
{/* 4th */}

  <div className="rating rating-md w-full mt-6  gap-1 ">
           
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-yellow-500" />
  <input type="radio" name="rating-10" className="mask mask-star-2 bg-yellow-500" defaultChecked />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-yellow-500" />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-yellow-500" />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-yellow-500" />
</div>
{/* 5th */}

  <div className="rating rating-md w-full mt-6  gap-1 ">
           
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-yellow-500" />
  <input type="radio" name="rating-10" className="mask mask-star-2 bg-yellow-500" defaultChecked />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-yellow-500" />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-yellow-500" />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-yellow-500" />
</div>

</div>







<div className="w-1/2 ">
<p className="text-black font-semibold">Be the first to review “DBT Milk & Honey”</p>
<p>Your email address will not be published. Required fields are marked *</p>
 
  <div className="flex gap-4">
    <p className="text-black" >Your rating</p>
   <div className="flex mt-2 gap-1">
     
     <FaRegStar></FaRegStar>
     <FaRegStar></FaRegStar>
     <FaRegStar></FaRegStar>
     <FaRegStar></FaRegStar>
     <FaRegStar></FaRegStar>
   </div>
      
  </div>
  <p className="mb-6 text-black">Your review:</p>
  <textarea type="text" className="h-48 bg-white w-full border justify-start items-start p-4 nt-4 rounded-3xl" name="" id=""></textarea>
    <p className="mb-2 text-black">Name</p>
    <input type="text" name="name" className="bg-white border mb-2 rounded-3xl w-full" required/>
    <p className="mb-2 text-black">Email</p>
    <input type="text" name="emai;" required className="bg-white border rounded-3xl w-full " />
    <p className="mt-4 text-black">  Save my name, email, and website in this browser for the next time I comment.</p>
    <button className="bg-orange-500 rounded-3xl w-20 p-2 text-white mt-2">Submit</button>
</div>
</div>


    </div>
  )
}

export default Reviews