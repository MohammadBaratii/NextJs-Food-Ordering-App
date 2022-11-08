import PizzaList from "../../components/PizzaList";

const Menu = ({ pizzas }) => {
  return <PizzaList pizzas={pizzas} text="Order Now" />;
};

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/products");
  const data = await res.json();

  return {
    props: {
      pizzas: data.products,
    },
  };
}

export default Menu;
