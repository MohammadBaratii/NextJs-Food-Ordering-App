import PizzaItem from "./PizzaItem";

const PizzaList = ({ pizzas }) => {
  return (
    <section className="wrapper mt-5">
      <h2 className="flex justify-center items-center mb-4 text-3xl">
        Order Pizza
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-7 h-7 mt-2 animate-bounce"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"
          />
        </svg>
      </h2>
      <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {pizzas.map((pizza) => {
          return <PizzaItem key={pizza._id} {...pizza} />;
        })}
      </ul>
    </section>
  );
};

export default PizzaList;
