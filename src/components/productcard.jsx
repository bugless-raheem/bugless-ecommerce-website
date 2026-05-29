import { Link } from "react-router-dom";
export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md  transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
      <img
        className="w-full h-64 object-cover"
        src={product.image}
        alt={product.name}
      />
      <div className="m-4 space-y-2">
        <div className="space-y-2">
          <h3 className="text-2xl text-gray-800">{product.name}</h3>
          <p className="text-xl font-bold text-blue-500">${product.price}</p>
        </div>
        <div className="flex gap-1">
          <Link
            to={`/products/${product.id}`}
            className="px-4 py-2 bg-gray-700 text-white  hover:bg-gray-600 text-sm"
          >
            View details
          </Link>
          <button className="cursor-pointer px-4 py-2 bg-blue-700 text-white  hover:bg-blue-600 text-sm">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
