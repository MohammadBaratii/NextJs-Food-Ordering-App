const PaymentModal = ({ onHideModal, totalPrice }) => {
  return (
    <div
      className="fixed grid place-content-center top-0 left-0 w-full h-full bg-black/50 z-10"
      onClick={onHideModal}
    >
      <form
        className="relative grid gap-3 w-fit p-4 pt-8 bg-white rounded-lg animate-[modal-drop_0.4s_ease-out_forwards]"
        onSubmit={(e) => e.preventDefault()}
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
        />
        <textarea
          type="text"
          placeholder="Your Address"
          rows="3"
          className="w-72 p-2 bg-neutral-200 rounded outline-neutral-400"
        ></textarea>
        <button className="p-1 bg-primary text-white rounded transition hover:bg-primary/80">
          PAY ${totalPrice}
        </button>
      </form>
    </div>
  );
};

export default PaymentModal;
