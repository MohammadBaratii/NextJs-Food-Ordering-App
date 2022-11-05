import { useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../../components/CartItem";
import PaymentModal from "../../components/PaymentModal";

const Cart = () => {
  const [showModal, setShowModal] = useState(false);
  const { products, totalPrice } = useSelector((state) => state.cart);

  const handleHideModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <PaymentModal onHideModal={handleHideModal} totalPrice={totalPrice} />
      )}
      <section className="wrapper flex flex-col gap-3 py-14 sm:flex-row">
        {products.length ? (
          <ul className="cart-items flex-1 text-base text-neutral-500">
            {products.map((product) => {
              return <CartItem key={product._id} {...product} />;
            })}
          </ul>
        ) : (
          <p className="flex flex-1 items-center">Your Cart is Empty!</p>
        )}
        <div>
          <div className="sticky top-20 p-6 bg-neutral-600 text-white rounded-lg">
            <h5 className="mb-3 text-center text-2xl">
              TOTAL: ${totalPrice.toFixed(2)}
            </h5>
            <button
              className={`${
                !products.length && "cursor-not-allowed"
              } block m-auto p-3 py-1 bg-white text-primary rounded`}
              disabled={!products.length}
              onClick={() => setShowModal(true)}
            >
              Check Out Now!
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
