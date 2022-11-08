import Head from "next/head";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import PizzaList from "../components/PizzaList";

const Home = ({ pizzas }) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div className="relative wrapper p-0">
        <div className="absolute top-0 right-0 w-[30rem] -z-10 overflow-hidden sm:w-[40rem] md:w-[50rem]">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="block relative -top-40 -right-52 -rotate-[100deg]"
          >
            <path
              fill="#FF9F0D"
              d="M44.2,-76.5C55.8,-69.8,62.9,-55.1,70.7,-41C78.5,-26.9,87,-13.5,86.9,0C86.9,13.4,78.2,26.7,70.4,40.9C62.7,55.1,55.9,70,44.3,79C32.7,88,16.4,91,2.5,86.6C-11.3,82.2,-22.6,70.4,-32.7,60.6C-42.9,50.8,-52,43,-62.4,33.3C-72.9,23.5,-84.8,11.8,-86.4,-0.9C-88,-13.6,-79.5,-27.3,-68.6,-36.3C-57.7,-45.4,-44.5,-49.8,-32.7,-56.4C-20.9,-63,-10.4,-71.9,2.9,-76.9C16.3,-82,32.5,-83.2,44.2,-76.5Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
      </div>
      <Navbar />
      <Hero />
      <PizzaList pizzas={pizzas} text="Featured Foods" />
      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/products");
  const data = await res.json();
  const featuredPizzas = data.products.filter((item) => item.isFeatured);

  return {
    props: {
      pizzas: featuredPizzas,
    },
  };
}

export default Home;
