const PizzaItem = () => {
  return (
    <li className="grid gap-1 max-w-md m-auto p-3 bg-gray-200  rounded-md">
      <img src="./images/pizza.png" alt="pizza" className="m-auto" />
      <div className="flex justify-between items-center">
        <h3 className="font-bold">Pepperoni Pizza</h3>
        <p className="text-rose-500 text-base">$18.99</p>
      </div>
      <p className="text-neutral-600 text-base">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, labore.
      </p>
      <button
        className="block ml-auto p-5 py-1 bg-rose-400 text-white rounded-full transition text-lg hover:bg-primary
      "
      >
        Order
      </button>
    </li>
  );
};

export default PizzaItem;
