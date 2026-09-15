
function Responsive() {


    return (

        <div className="text-3xl text-white ">
            <div className=" flex flex-col lg:flex-row w-full h-full ">
                <div className=" lg:w-1/4 md: w-full h-28 bg-blue-950  flex items-center justify-center ">
                    <h2 className=""> Header</h2>
                </div>
                <div className="lg:w-3/4 md:hidden  bg-red-400 text-center flex flex-row items-center justify-center">
                    <h2 className="">Menu</h2>
                </div>
            </div>


            <div className=" w-full h-[500px] flex flex-row items-center justify-center bg-blue-400 ">
                <div className="">
                   Hero
                </div>

            </div>

            <div className="bg-white w-full flex lg:justify-between flex-col lg:flex-row">
                <div className="bg-gray-800 lg:w-[30%]  h-[300px] flex justify-center items-center sm:w-full">
                       Main 
                </div>
                 <div className="bg-yellow-300 hidden md:flex sm:flex justify-center items-center w-full h-[150px]">
                Banner
            </div>
                <div className="lg:w-[30%] h-[300px] flex lg:flex-col sm:flex-col-reverse md:flex-row-reverse  sm: w-full ">
                     
                   
                    <div className="bg-green-400 h-[150px] flex justify-center items-center ">Image</div>
                    <div className="bg-gray-400 h-[150px] flex justify-center items-center">Extra</div>
                </div>

            </div>

            <div className="bg-yellow-300 flex justify-center items-center w-full h-[150px]">
                Banner
            </div>
        </div>

    )
}

export default Responsive
