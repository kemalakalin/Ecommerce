import React, { useEffect, useState } from "react";
import { api } from "../api/axiosInstance";

export default function PreviousOrdersPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedOrderId, setExpandedOrderId] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await api.get("/order");
        // Sort orders by date descending
        const sortedOrders = (response.data || []).sort(
          (a, b) => new Date(b.order_date) - new Date(a.order_date)
        );
        setOrders(sortedOrders);
      } catch (err) {
        setError(err.message || "Failed to fetch orders.");
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  const toggleOrderDetails = (orderId) => {
    setExpandedOrderId(expandedOrderId === orderId ? null : orderId);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Error! </strong>
          <span className="block sm:inline">{error}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl min-h-[50vh]">
      <h1 className="text-2xl font-bold mb-6 text-[#252B42]">My Previous Orders</h1>
      {orders.length === 0 ? (
        <div className="bg-white p-8 rounded-lg border text-center shadow-sm">
          <p className="text-gray-500 text-lg">You don't have any previous orders.</p>
        </div>
      ) : (
        <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b">
                  <th className="py-4 px-6 font-bold text-sm text-[#252B42]">Order ID</th>
                  <th className="py-4 px-6 font-bold text-sm text-[#252B42]">Date</th>
                  <th className="py-4 px-6 font-bold text-sm text-[#252B42]">Total Price</th>
                  <th className="py-4 px-6 font-bold text-sm text-center text-[#252B42]">Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <React.Fragment key={order.id}>
                    <tr className={`border-b hover:bg-gray-50 transition-colors ${expandedOrderId === order.id ? 'bg-blue-50' : ''}`}>
                      <td className="py-4 px-6 text-sm font-medium text-gray-700">#{order.id}</td>
                      <td className="py-4 px-6 text-sm text-gray-600">{new Date(order.order_date).toLocaleString()}</td>
                      <td className="py-4 px-6 text-sm font-bold text-[#23A6F0]">${order.price.toFixed(2)}</td>
                      <td className="py-4 px-6 text-sm text-center">
                        <button
                          onClick={() => toggleOrderDetails(order.id)}
                          className="text-white bg-[#23A6F0] hover:bg-blue-500 px-4 py-2 rounded-md font-bold text-xs transition"
                        >
                          {expandedOrderId === order.id ? "Hide Details" : "View Details"}
                        </button>
                      </td>
                    </tr>
                    {expandedOrderId === order.id && (
                      <tr className="bg-gray-50 border-b">
                        <td colSpan="4" className="py-6 px-8">
                          <div className="bg-white border rounded-md p-6 shadow-inner">
                            <h4 className="font-bold text-lg text-[#252B42] border-b pb-3 mb-4">Order Items</h4>
                            <div className="space-y-3">
                              {order.products?.map((product, idx) => (
                                <div key={idx} className="flex justify-between items-center py-2 border-b last:border-0 text-sm">
                                  <div className="flex flex-col">
                                    <span className="font-medium text-gray-800">Product ID: {product.product_id}</span>
                                    <span className="text-gray-500 text-xs">Detail: {product.detail}</span>
                                  </div>
                                  <div className="text-right">
                                    <span className="block font-semibold text-gray-700">Qty: {product.count}</span>
                                  </div>
                                </div>
                              ))}
                              {(!order.products || order.products.length === 0) && (
                                <p className="text-sm text-gray-500 italic">No detailed items available.</p>
                              )}
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
