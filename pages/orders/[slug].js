import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import server from "../../config";

const Orders = () => {
  const [orderData, setOrderData] = useState({});

  const {
    query: { slug },
  } = useRouter();

  useEffect(() => {
    // There is no need for this page to be pre-rendered so I use regular fetch here
    fetch(`${server}/api/orders/${slug}`)
      .then((response) => response.json())
      .then((data) => setOrderData(data));
  }, [slug]);

  return (
    <section className="wrapper flex flex-col gap-3 py-14 sm:flex-row">
      <div className="grid gap-8 flex-1">
        <ul className="grid justify-items-start gap-5 sm:grid-cols-2 sm:justify-items-center md:grid-cols-4 md:items-start">
          <li className="flex justify-center items-center gap-4 md:flex-col md:gap-0">
            Order ID
            <span className="text-neutral-600 break-all text-base sm:text-center">
              {orderData._id}
            </span>
          </li>
          <li className="flex justify-center items-center gap-4 md:flex-col md:gap-0">
            Customer
            <span className="text-neutral-600 break-words text-base sm:text-center">
              {orderData.customer}
            </span>
          </li>
          <li className="flex justify-center items-center gap-4 md:flex-col md:gap-0">
            Address{" "}
            <span className="text-neutral-600 break-words text-base sm:text-center">
              {orderData.address}
            </span>
          </li>
          <li className="flex justify-center items-center gap-4 md:flex-col md:gap-0">
            Total{" "}
            <span className="text-neutral-600 break-words text-base sm:text-center">
              ${orderData.total}
            </span>
          </li>
        </ul>
        <ul className="sm:grid sm:grid-cols-2 md:grid-cols-4">
          <li className="grid justify-items-center my-4 sm:my-2 md:my-4">
            <Image src="/images/paid.png" alt="paid" width={40} height={40} />
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
            <Image src="/images/bake.png" alt="baking" width={40} height={40} />
            <span className="text-base text-neutral-600">Preparing</span>
          </li>
          <li className="grid justify-items-center my-4 sm:my-2 md:my-4">
            <Image
              src="/images/bike.png"
              alt="motorbike"
              width={40}
              height={40}
              className="opacity-30"
            />

            <span className="text-base text-black/30">On the way</span>
          </li>
          <li className="grid justify-items-center my-4 sm:my-2 md:my-4">
            <Image
              src="/images/delivered.png"
              alt="delivered"
              width={40}
              height={40}
              className="opacity-30"
            />
            <span className="text-base text-black/30">Delivered</span>
          </li>
        </ul>
      </div>
      <div>
        <div className="sticky top-20 p-6 bg-neutral-600 text-white rounded-lg">
          <h5 className="mb-3 text-center text-2xl">
            TOTAL: <span>${orderData.total}</span>
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
