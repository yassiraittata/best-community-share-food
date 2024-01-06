import Image from "next/image";

import PizaImage from "@/assets/hero/pizza.jpeg";
import BurgerImage from "@/assets/hero/burger.jpeg";
import PastaImage from "@/assets/hero/pasta.jpeg";

const Hero = () => {
  return (
    <section className="max-w-[80%] mx-auto p-5 h-fit bg-white rounded-2xl mt-5 flex items-center justify-between">
      <div className="w-1/2">
        <div className="flex items- p-5 relative h-80">
          <div className="w-52 h-52 flex absolute top-8 left-2">
            <Image
              src={PastaImage}
              width={500}
              height={500}
              alt="Pasta"
              className="object-fill shadow-2xl border-4 border-primary p-1"
            />
          </div>
          <div className="w-52 h-52 flex absolute top-28 left-40 ">
            <Image
              src={PizaImage}
              width={500}
              height={500}
              alt="Pizza"
              className="object-fill shadow-2xl border-4 border-primary p-1"
            />
          </div>
          <div className="w-52 h-52 flex absolute -top-1 left-80 ">
            <Image
              src={BurgerImage}
              width={500}
              height={500}
              alt="Burger"
              className="object-fill shadow-2xl border-4 border-primary p-1"
            />
          </div>
        </div>
      </div>
      <div className="w-1/2 flex flex-col">
        <span className="text-sm text-secodary">Hungry?</span>
        <h1 className="text-4xl font-extrabold font-oswald">
          Search <span className="text-primary">No MORE</span>. <br />
          Find more than <span className="text-primary">1000 recipes.</span>
        </h1>
        <p className="mt-3 font-semibold text-dark-gray">
          Cook delicious food, save your time!
        </p>
        <div className="mt-4 flex space-x-5">
          <button className="py-3 px-5 bg-secodary hover:bg-secodary/80 text-white font-medium rounded-lg shadow-lg transition-all">
            Share your delicious recipes
          </button>
          <button className="py-3 px-5 border-2 text-secodary border-secodary hover:bg-secodary hover:text-white font-medium rounded-lg shadow-lg transition-all">
            Find a recipe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
