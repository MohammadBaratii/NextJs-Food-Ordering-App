import PizzaList from "../../components/PizzaList";
import server from "../../config";

const Menu = ({ pizzas }) => {
  return <PizzaList pizzas={pizzas} text="Order Now" />;
};

export async function getStaticProps() {
  const res = await fetch(`${server}/api/products`);
  const data = await res.json();

  return {
    props: {
      pizzas: data.products,
    },
  };
}

export default Menu;
