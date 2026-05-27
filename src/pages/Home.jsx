import { getproducts } from "../data/product";
import Productcard from "../components/productcard";

export default function Home() {
  const products = getproducts();
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="md:text-4xl lg:text-5xl text-2xl  font-bold text-gray-800">
          Welcome to Shophub
        </h1>
        <p className="text-gray-600  mt-3 md:text-xl">
          Your modern shopping experience starts here
        </p>
      </div>
      <div className="">
        <div className="mt-10 font-bold text-lg md:text-xl text-gray-800 ">
          Our Products
        </div>
        {/* products grid  */}
        <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-8 mt-8">
          {products.map((product) => (
            <Productcard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
