import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Trash2, Plus, Minus, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  removeFromCart, 
  updateCartItemCount, 
  toggleCartItemChecked 
} from '../store/actions/cartActions';

function ShoppingCartPage() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.shoppingCart.cart);

  const handleIncrement = (id, count) => {
    dispatch(updateCartItemCount(id, count + 1));
  };

  const handleDecrement = (id, count) => {
    if (count > 1) {
      dispatch(updateCartItemCount(id, count - 1));
    } else {
      dispatch(removeFromCart(id));
    }
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleToggleCheck = (id) => {
    dispatch(toggleCartItemChecked(id));
  };

  const productsTotal = cart
    .filter(item => item.checked)
    .reduce((sum, item) => sum + (item.product.price * item.count), 0);

  const selectedCount = cart.filter(item => item.checked).reduce((sum, item) => sum + item.count, 0);

  const shippingCost = productsTotal > 0 ? 29.99 : 0;
  // Free shipping on orders over $150
  const discount = productsTotal >= 150 ? 29.99 : 0; 
  const grandTotal = productsTotal > 0 ? productsTotal + shippingCost - discount : 0;

  return (
    <main className="bg-[#FAFAFA] min-h-screen py-10">
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="flex items-center gap-3 text-sm font-bold mb-8">
          <Link to="/" className="text-[#252B42]">Home</Link>
          <ChevronRight size={16} className="text-[#BDBDBD]" />
          <span className="text-[#BDBDBD]">Shopping Cart</span>
        </div>

        <h2 className="text-2xl font-bold text-[#252B42] mb-6">Shopping Cart</h2>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 bg-white shadow-sm rounded-md p-6">
            {cart.length === 0 ? (
              <p className="text-[#737373]">Your cart is empty.</p>
            ) : (
              <div className="flex flex-col gap-6">
                {cart.map((item, index) => (
                  <div key={index} className="flex flex-col sm:flex-row items-center gap-4 py-4 border-b border-[#E8E8E8] last:border-0">
                    <input 
                      type="checkbox" 
                      checked={item.checked} 
                      onChange={() => handleToggleCheck(item.product.id)}
                      className="w-5 h-5 accent-[#23A6F0] cursor-pointer"
                    />
                    
                    <div className="w-24 h-24 flex-shrink-0 bg-[#F5F5F5] rounded overflow-hidden">
                      <img 
                        src={item.product.images?.[0]?.url || "https://picsum.photos/200?random=" + index} 
                        alt={item.product.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0 flex flex-col justify-center">
                      <h3 className="text-lg font-bold text-[#252B42] truncate">{item.product.name}</h3>
                      <p className="text-sm text-[#737373] mt-1 line-clamp-1">{item.product.description}</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <button 
                        onClick={() => handleDecrement(item.product.id, item.count)}
                        className="w-8 h-8 flex items-center justify-center bg-[#23A6F0] text-white rounded hover:bg-blue-600 transition-colors"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-8 text-center font-bold text-[#252B42]">{item.count}</span>
                      <button 
                        onClick={() => handleIncrement(item.product.id, item.count)}
                        className="w-8 h-8 flex items-center justify-center bg-[#23A6F0] text-white rounded hover:bg-blue-600 transition-colors"
                      >
                        <Plus size={16} />
                      </button>
                    </div>

                    <div className="w-24 text-right">
                      <span className="text-lg font-bold text-[#23856D]">${(item.product.price * item.count).toFixed(2)}</span>
                    </div>

                    <button 
                      onClick={() => handleRemove(item.product.id)}
                      className="text-red-500 hover:text-red-700 transition-colors ml-2"
                      title="Remove Item"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="w-full lg:w-[350px]">
            <div className="bg-white shadow-sm rounded-md p-6">
              <h3 className="text-lg font-bold text-[#252B42] border-b border-[#E8E8E8] pb-4 mb-4">Order Summary</h3>
              
              <div className="flex justify-between items-center mb-3">
                <span className="text-[#737373]">Products Total:</span>
                <span className="font-bold text-[#252B42]">${productsTotal.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between items-center mb-3">
                <span className="text-[#737373]">Shipping:</span>
                <span className="font-bold text-[#252B42]">${shippingCost.toFixed(2)}</span>
              </div>
              
              {discount > 0 && (
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[#737373]">Discount:</span>
                  <span className="font-bold text-[#E77C40]">-${discount.toFixed(2)}</span>
                </div>
              )}
              
              <hr className="my-4 border-[#E8E8E8]" />
              
              <div className="flex justify-between items-center mb-6">
                <span className="text-lg font-bold text-[#252B42]">Grand Total:</span>
                <span className="text-xl font-bold text-[#23856D]">${grandTotal.toFixed(2)}</span>
              </div>
              
              {productsTotal > 0 && productsTotal < 150 && (
                <p className="text-xs text-[#E77C40] mb-4">
                  Add ${(150 - productsTotal).toFixed(2)} more for free shipping!
                </p>
              )}
              
              <button 
                disabled={selectedCount === 0}
                className="w-full py-3 bg-[#23A6F0] text-white font-bold rounded-md hover:bg-blue-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Create Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ShoppingCartPage;