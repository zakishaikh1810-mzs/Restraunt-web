function FeaturedCategories() {
  return (
    <section className="bg-white px-4 py-20 md:px-8 lg:px-12">

      {/* HEADING */}
      <div className="mx-auto mb-12 max-w-7xl">

        <p className="text-xs font-semibold tracking-[0.25em] text-gray-500">
          SHOP BY CATEGORY
        </p>

        <div className="mt-4 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">

          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            Find Your Style.
          </h2>

          <p className="max-w-md text-sm leading-6 text-gray-500">
            Explore our essential collections, designed for
            everyday comfort and modern style.
          </p>

        </div>

      </div>


      {/* 2 × 2 GRID */}
      <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2">


        {/* SHIRTS */}
        <div className="group relative h-96 overflow-hidden bg-gray-100">

          <img
            src="https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=1000&q=85"
            alt="Men's shirts"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/20 transition duration-500 group-hover:bg-black/40"></div>

          {/* CONTENT */}
          <div className="absolute bottom-0 left-0 w-full p-6">

            <p className="text-xs font-semibold tracking-widest text-white/70">
              01 / COLLECTION
            </p>

            <h3 className="mt-2 text-3xl font-semibold text-white">
              Shirts
            </h3>

            <button className="mt-5 flex items-center gap-3 border border-white px-5 py-2.5 text-sm font-medium text-white transition duration-300 hover:bg-white hover:text-black">
              SHOP NOW
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>

          </div>

        </div>


        {/* T-SHIRTS */}
        <div className="group relative h-96 overflow-hidden bg-gray-100">

          <img
            src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&q=85"
            alt="Men's t-shirts"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/20 transition duration-500 group-hover:bg-black/40"></div>

          <div className="absolute bottom-0 left-0 w-full p-6">

            <p className="text-xs font-semibold tracking-widest text-white/70">
              02 / COLLECTION
            </p>

            <h3 className="mt-2 text-3xl font-semibold text-white">
              T-Shirts
            </h3>

            <button className="mt-5 flex items-center gap-3 border border-white px-5 py-2.5 text-sm font-medium text-white transition duration-300 hover:bg-white hover:text-black">
              SHOP NOW
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>

          </div>

        </div>


        {/* TROUSERS */}
        <div className="group relative h-96 overflow-hidden bg-gray-100">

          <img
            src="https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=1000&q=85"
            alt="Men's trousers"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/20 transition duration-500 group-hover:bg-black/40"></div>

          <div className="absolute bottom-0 left-0 w-full p-6">

            <p className="text-xs font-semibold tracking-widest text-white/70">
              03 / COLLECTION
            </p>

            <h3 className="mt-2 text-3xl font-semibold text-white">
              Trousers
            </h3>

            <button className="mt-5 flex items-center gap-3 border border-white px-5 py-2.5 text-sm font-medium text-white transition duration-300 hover:bg-white hover:text-black">
              SHOP NOW
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>

          </div>

        </div>


        {/* JACKETS */}
        <div className="group relative h-96 overflow-hidden bg-gray-100">

          <img
            src="https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1000&q=85"
            alt="Men's jackets"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/20 transition duration-500 group-hover:bg-black/40"></div>

          <div className="absolute bottom-0 left-0 w-full p-6">

            <p className="text-xs font-semibold tracking-widest text-white/70">
              04 / COLLECTION
            </p>

            <h3 className="mt-2 text-3xl font-semibold text-white">
              Jackets
            </h3>

            <button className="mt-5 flex items-center gap-3 border border-white px-5 py-2.5 text-sm font-medium text-white transition duration-300 hover:bg-white hover:text-black">
              SHOP NOW
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default FeaturedCategories;