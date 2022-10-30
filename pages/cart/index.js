const Cart = () => {
  return (
    <section className="wrapper flex flex-col gap-3 py-14 sm:flex-row">
      <ul className="cart-items flex-1 text-base text-neutral-500">
        <li className="flex justify-evenly items-center py-2 sm:justify-between">
          <img src="./images/pizza.png" alt="pizza" className="w-20" />
          <div className="flex flex-col p-1 border-x border-neutral-300 md:flex-1 md:flex-row md:justify-evenly md:border-none">
            <h4 className="text-neutral-800">Pepperoni</h4>
            <p>Extra Cheese, Garlic Sauce</p>
          </div>
          <div className="flex flex-col md:flex-1 md:flex-row md:justify-evenly">
            <p>Total: 2</p>
            <p>$37.60</p>
          </div>
        </li>
        <li className="flex justify-evenly items-center py-2 sm:justify-between">
          <img src="./images/pizza.png" alt="pizza" className="w-20" />
          <div className="flex flex-col p-1 border-x border-neutral-300 md:flex-1 md:flex-row md:justify-evenly md:border-none">
            <h4 className="text-neutral-800">Pepperoni</h4>
            <p>Extra Cheese, Garlic Sauce</p>
          </div>
          <div className="flex flex-col md:flex-1 md:flex-row md:justify-evenly">
            <p>Total: 2</p>
            <p>$37.60</p>
          </div>
        </li>
        <li className="flex justify-evenly items-center py-2 sm:justify-between">
          <img src="./images/pizza.png" alt="pizza" className="w-20" />
          <div className="flex flex-col p-1 border-x border-neutral-300 md:flex-1 md:flex-row md:justify-evenly md:border-none">
            <h4 className="text-neutral-800">Pepperoni</h4>
            <p>Extra Cheese, Garlic Sauce</p>
          </div>
          <div className="flex flex-col md:flex-1 md:flex-row md:justify-evenly">
            <p>Total: 2</p>
            <p>$37.60</p>
          </div>
        </li>
        <li className="flex justify-evenly items-center py-2 sm:justify-between">
          <img src="./images/pizza.png" alt="pizza" className="w-20" />
          <div className="flex flex-col p-1 border-x border-neutral-300 md:flex-1 md:flex-row md:justify-evenly md:border-none">
            <h4 className="text-neutral-800">Pepperoni</h4>
            <p>Extra Cheese, Garlic Sauce</p>
          </div>
          <div className="flex flex-col md:flex-1 md:flex-row md:justify-evenly">
            <p>Total: 2</p>
            <p>$37.60</p>
          </div>
        </li>
      </ul>
      <div>
        <div className="sticky top-20 p-6 bg-neutral-600 text-white rounded-lg">
          <h5 className="mb-3 text-center text-2xl">
            TOTAL: <span>$94.65</span>
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
