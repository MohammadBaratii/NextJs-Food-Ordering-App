import { useSelector } from "react-redux";

const Cart = () => {
  const { products, totalPrice } = useSelector((state) => state.cart);

  return (
    <section className="wrapper flex flex-col gap-3 py-14 sm:flex-row">
      <ul className="cart-items flex-1 text-base text-neutral-500">
        {products.map((product) => {
          return (
            <li
              key={product._id}
              className="flex justify-evenly items-center py-2 sm:justify-between"
            >
              <img src={product.img} alt={product.title} className="w-20" />
              <div className="flex flex-col p-1 border-x border-neutral-300 md:flex-1 md:flex-row md:justify-evenly md:border-none">
                <h4 className="text-neutral-800">{product.title}</h4>
                <p className="">
                  {product.extras.map((extra) => (
                    <span key={extra._id}>{extra.text}, </span>
                  ))}
                </p>
              </div>
              <div className="flex flex-col md:flex-1 md:flex-row md:justify-evenly">
                <p>{product.amount}</p>
                <p>${(product.price * product.amount).toFixed(2)}</p>
              </div>
            </li>
          );
        })}
      </ul>
      <div>
        <div className="sticky top-20 p-6 bg-neutral-600 text-white rounded-lg">
          <h5 className="mb-3 text-center text-2xl">
            TOTAL: ${totalPrice.toFixed(2)}
          </h5>
          <button className="block m-auto p-3 py-1 bg-white text-primary rounded">
            Check Out Now!
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
