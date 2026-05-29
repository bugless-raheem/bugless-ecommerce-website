import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../data/products";
import { useEffect } from "react";

export default function ProductDetails() {
  const { id } = useParams();
  const product = getProductById(id);
  const navigate = useNavigate();

  useEffect(() => {
    const foundProduct = getProductById(id);

    if (!foundProduct) {
      navigate("/");
      return;
    }
  });
  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col lg:flex-row gap-8">
        <img
          className="w-full lg:w-1/2 h-96 object-cover"
          src={product.image}
          alt={product.name}
        />
        <div className="p-8 flex-1">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {product.name}
          </h1>
          <p className="text-xl font-semibold text-blue-600 mb-4">
            ${product.price}
          </p>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <button className="px-6 py-3 bg-blue-700 text-white rounded-md hover:bg-blue-600">
            Add to cart
          </button>
          
        </div>
      </div>
    </div>
  );
}
