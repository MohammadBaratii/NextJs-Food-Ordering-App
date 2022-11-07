import { useRouter } from "next/router";
import { useState } from "react";
import { useRef } from "react";

const PaymentModal = ({ onHideModal, totalPrice }) => {
  const [message, setMessage] = useState({ type: null });

  const nameRef = useRef();
  const addressRef = useRef();

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nameRef.current.value.trim() || !addressRef.current.value.trim()) {
      setMessage({ type: "error" });
      return;
    }
    setMessage({ type: "pending" });

    const response = await fetch("http://localhost:3000/api/orders", {
      method: "POST",
      body: JSON.stringify({
        customer: nameRef.current.value,
        address: addressRef.current.value,
        total: totalPrice,
        status: 1,
        method: 2,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    if (!response.ok) {
      setMessage({ type: "not ok" });
      return;
    }

    router.push(`/orders/${data._id}`);
  };

  return (
    <div
      className="fixed grid place-content-center top-0 left-0 w-full h-full bg-black/50 z-10"
      onClick={onHideModal}
    >
      <form
        className="relative grid gap-3 w-fit p-4 pt-8 bg-white rounded-lg animate-[modal-drop_0.4s_ease-out_forwards]"
        onSubmit={handleSubmit}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-1 right-3 text-rose-500"
          onClick={onHideModal}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <input
          type="text"
          placeholder="Your Name"
          className="w-72 p-2 bg-neutral-200 rounded outline-neutral-400"
          ref={nameRef}
        />
        <textarea
          type="text"
          placeholder="Your Address"
          rows="3"
          className="w-72 p-2 bg-neutral-200 rounded outline-neutral-400"
          ref={addressRef}
        ></textarea>
        <button
          className="p-1 bg-primary text-white rounded transition hover:bg-primary/80"
          disabled={message.type === "pending"}
        >
          {message.type === "pending" ? "Pending..." : `PAY $${totalPrice}`}
        </button>
        {message.type === "error" && (
          <p className="text-rose-500 text-center">
            The inputs should NOT be empty!
          </p>
        )}
        {message.type === "not ok" && (
          <p className="text-rose-500 text-center">
            There is something wrong! Try again.
          </p>
        )}
      </form>
    </div>
  );
};

export default PaymentModal;
