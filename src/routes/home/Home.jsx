import { BsCartPlus } from "react-icons/bs";
import { RxUpdate } from "react-icons/rx";
import { useGetProductQuery, useUpdateProductMutation } from '../../redux/api/product';
import Container from "../../container/Container";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/slices/cartSlice';

const Products = () => {
  const { data: products } = useGetProductQuery();
  const [updateProduct, { data: updateData }] = useUpdateProductMutation();
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    updateProduct({ id: item.id, title: "Title Updated as well", description: "Description Updated as well" });
  }

  const handleAddToCartBasket = (product) => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  }

  const filteredProducts = products?.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container>
      <div className="bg-gray-100 p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Products</h1>

        <div className="w-full text-center mb-6">
          <input 
            type="text" 
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            className="w-full max-w-96 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" 
          />
        </div>
        
        <div className="grid grid-cols-4 gap-8">
          {filteredProducts?.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-all hover:shadow-2xl transform hover:scale-95 duration-300 flex flex-col"
            >
              <img
                src={item.images}
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h1 className="text-xl font-semibold text-gray-900 mb-3 truncate">{item.title}</h1>

                <p className="text-gray-500 text-sm line-clamp-3 mb-4 flex-grow">
                  {item.description}
                </p>

                <div className="flex justify-between items-center mt-0.5">
                  <p className="text-red-500 font-bold text-lg truncate cursor-pointer">${item.price}</p>
                  <RxUpdate onClick={() => handleAddToCart(item)} className="w-6 h-6 text-gray-700 hover:text-indigo-500 cursor-pointer transition-colors" />
                  <button
                    onClick={() => handleAddToCartBasket(item)}
                    className="object-cover rounded-full hover:scale-110 transition-transform cursor-pointer">
                    <BsCartPlus className="text-xl" style={{ color: "green"}} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

export default Products;
