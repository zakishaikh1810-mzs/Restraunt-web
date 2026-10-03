function Hero(){
    return(
<section className="bg-white"> 
    <div className="mx-auto flex max-w-7xl  flex-col items-center px-4 py-10 md:flex-row md:gap-12 md:px-8">
     {/*  left things */}

     
    <div className="w-full md:w-1/2">
     <p className="mb-5 text-sm font-semibold text-gray-500">
        NEW SEASON
     </p>

    <h1 className="max-w-xl text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
       Elevate Your
        <span className="block">Everyday Style</span>
    </h1>

    <p className="mt-6 max-w-lg text-base leading-7 text-gray-600">
          Discover timeless men's fashion made for modern living.
            Clean designs, quality essentials, and effortless style.
    </p>
   
   {/* buttons */}
   <div className="mt-8 flex flex-wrap gap-4 ">

    <button className="bg-black px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-gray-900 ">
       SHOP MEN
    </button>

    <button className="border border-gray-900 px-7 py-3.5 text-sm font-semibold text-gray-900 transition hover:bg-black  hover:text-white">
        EXPLORE COLLECTION
    </button>

   </div>
   </div>

{/* right content*/}
<div className="mt-12 w-full md:mt-0 md:w-1/2">

  <div className="relative overflow-hidden bg-gray-100">

    <img
       src="https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=1000&q=85"
      className="h-[520px] transition duration-700 w-full object-cover hover:scale-105"
    />

    <div className="absolute bottom-5 left-5 bg-white px-5 py-3">

      <p className="text-sm font-semibold text-gray-500">
        ZS MENS
      </p>

      <p className="mt-1 text-sm font-medium text-gray-900">
        ESSENTIAL COLLECTION
      </p>

    </div>

  </div>

</div>
</div>

 
</section>
    );
}

export default Hero;