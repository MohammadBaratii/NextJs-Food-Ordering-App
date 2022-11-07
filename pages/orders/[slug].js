const Orders = () => {
  return (
    <section className="wrapper flex flex-col gap-3 py-14 sm:flex-row">
      <div className="grid gap-8 flex-1">
        <ul className="sm:grid sm:grid-cols-2 md:grid-cols-4">
          <li className="flex justify-center items-center gap-2 md:flex-col md:gap-0">
            Order ID
            <span className="text-base text-neutral-600">10293940</span>
          </li>
          <li className="flex justify-center items-center gap-2 md:flex-col md:gap-0">
            Customer
            <span className="text-base text-neutral-600">John Doe</span>
          </li>
          <li className="flex justify-center items-center gap-2 md:flex-col md:gap-0">
            Address <span className="text-base text-neutral-600">Some st.</span>
          </li>
          <li className="flex justify-center items-center gap-2 md:flex-col md:gap-0">
            Total <span className="text-base text-neutral-600">$47.99</span>
          </li>
        </ul>
        <ul className="sm:grid sm:grid-cols-2 md:grid-cols-4">
          <li className="grid justify-items-center my-4 sm:my-2 md:my-4">
            <img src="/images/paid.png" alt="paid" className="w-10" />
            <span className="text-base text-neutral-600">Payment</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-emerald-600"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clipRule="evenodd"
              />
            </svg>
          </li>
          <li className="grid justify-items-center my-4 animate-[blink_1.5s_linear_infinite] sm:my-2 md:my-4">
            <img src="/images/bake.png" alt="baking" className="w-10" />
            <span className="text-base text-neutral-600">Preparing</span>
          </li>
          <li className="grid justify-items-center my-4 sm:my-2 md:my-4">
            <img
              src="/images/bike.png"
              alt="motorbike"
              className="w-10 opacity-30"
            />
            <span className="text-base text-black/30">On the way</span>
          </li>
          <li className="grid justify-items-center my-4 sm:my-2 md:my-4">
            <img
              src="/images/delivered.png"
              alt="delivered"
              className="w-10 opacity-30"
            />
            <span className="text-base text-black/30">Delivered</span>
          </li>
        </ul>
      </div>
      <div>
        <div className="sticky top-20 p-6 bg-neutral-600 text-white rounded-lg">
          <h5 className="mb-3 text-center text-2xl">
            TOTAL: <span>$94.65</span>
          </h5>
          <button className="block m-auto p-3 py-1 bg-white text-primary rounded cursor-not-allowed">
            Paid!
          </button>
        </div>
      </div>
    </section>
  );
};

export default Orders;
