import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../api/axiosInstance";
import { Plus, Edit2, Trash2, CreditCard, MapPin } from "lucide-react";
import { setCart } from "../store/actions/cartActions";

const CITIES = [
  "Adana", "Adıyaman", "Afyonkarahisar", "Ağrı", "Amasya", "Ankara", "Antalya", "Artvin", "Aydın", "Balıkesir", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa", "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Edirne", "Elazığ", "Erzincan", "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkari", "Hatay", "Isparta", "Mersin", "İstanbul", "İzmir", "Kars", "Kastamonu", "Kayseri", "Kırklareli", "Kırşehir", "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa", "Kahramanmaraş", "Mardin", "Muğla", "Muş", "Nevşehir", "Niğde", "Ordu", "Rize", "Sakarya", "Samsun", "Siirt", "Sinop", "Sivas", "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Şanlıurfa", "Uşak", "Van", "Yozgat", "Zonguldak", "Aksaray", "Bayburt", "Karaman", "Kırıkkale", "Batman", "Şırnak", "Bartın", "Ardahan", "Iğdır", "Yalova", "Karabük", "Kilis", "Osmaniye", "Düzce"
];

export default function CreateOrderPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const cart = useSelector((state) => state.shoppingCart.cart);

  const [activeTab, setActiveTab] = useState("address"); // "address" | "payment"

  // Address States
  const [addresses, setAddresses] = useState([]);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);
  const [selectedShipping, setSelectedShipping] = useState(null);
  const [selectedBilling, setSelectedBilling] = useState(null);
  const [loadingAddresses, setLoadingAddresses] = useState(true);

  // Card States
  const [cards, setCards] = useState([]);
  const [showCardForm, setShowCardForm] = useState(false);
  const [editingCard, setEditingCard] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [loadingCards, setLoadingCards] = useState(true);

  const {
    register: registerAddress,
    handleSubmit: handleSubmitAddress,
    reset: resetAddress,
    setValue: setValueAddress,
    formState: { errors: errorsAddress },
  } = useForm();

  const {
    register: registerCard,
    handleSubmit: handleSubmitCard,
    reset: resetCard,
    setValue: setValueCard,
    formState: { errors: errorsCard },
  } = useForm();

  useEffect(() => {
    let active = true;
    api.get("/user/address").then(res => {
      if (active) {
        setAddresses(res.data);
        setLoadingAddresses(false);
      }
    }).catch(err => {
      console.error(err);
      if (active) setLoadingAddresses(false);
    });

    api.get("/user/card").then(res => {
      if (active) {
        setCards(res.data);
        setLoadingCards(false);
      }
    }).catch(err => {
      console.error(err);
      if (active) setLoadingCards(false);
    });

    return () => { active = false; };
  }, []);

  const fetchAddresses = async () => {
    try {
      const response = await api.get("/user/address");
      setAddresses(response.data);
    } catch (error) {
      console.error("Failed to fetch addresses", error);
    }
  };

  const fetchCards = async () => {
    try {
      const response = await api.get("/user/card");
      setCards(response.data);
    } catch (error) {
      console.error("Failed to fetch cards", error);
    }
  };

  // --- ADDRESS HANDLERS ---
  const onAddressSubmit = async (data) => {
    try {
      if (editingAddress) {
        await api.put("/user/address", { ...data, id: editingAddress.id });
      } else {
        await api.post("/user/address", data);
      }
      setShowAddressForm(false);
      setEditingAddress(null);
      resetAddress();
      fetchAddresses();
    } catch (error) {
      console.error("Failed to save address", error);
    }
  };

  const handleEditAddress = (address) => {
    setEditingAddress(address);
    setShowAddressForm(true);
    Object.keys(address).forEach((key) => {
      setValueAddress(key, address[key]);
    });
  };

  const handleDeleteAddress = async (id) => {
    try {
      await api.delete(`/user/address/${id}`);
      fetchAddresses();
      if (selectedShipping === id) setSelectedShipping(null);
      if (selectedBilling === id) setSelectedBilling(null);
    } catch (error) {
      console.error("Failed to delete address", error);
    }
  };

  const openNewAddressForm = () => {
    setEditingAddress(null);
    resetAddress();
    setShowAddressForm(true);
  };

  // --- CARD HANDLERS ---
  const onCardSubmit = async (data) => {
    try {
      const payload = {
        ...data,
        expire_month: parseInt(data.expire_month, 10),
        expire_year: parseInt(data.expire_year, 10)
      };

      if (editingCard) {
        await api.put("/user/card", { ...payload, id: editingCard.id });
      } else {
        await api.post("/user/card", payload);
      }
      setShowCardForm(false);
      setEditingCard(null);
      resetCard();
      fetchCards();
    } catch (error) {
      console.error("Failed to save card", error);
    }
  };

  const handleEditCard = (card) => {
    setEditingCard(card);
    setShowCardForm(true);
    setValueCard("card_no", card.card_no);
    setValueCard("expire_month", card.expire_month);
    setValueCard("expire_year", card.expire_year);
    setValueCard("name_on_card", card.name_on_card);
  };

  const handleDeleteCard = async (id) => {
    try {
      await api.delete(`/user/card/${id}`);
      fetchCards();
      if (selectedCard === id) setSelectedCard(null);
    } catch (error) {
      console.error("Failed to delete card", error);
    }
  };

  const openNewCardForm = () => {
    setEditingCard(null);
    resetCard();
    setShowCardForm(true);
  };

  const handleCompleteOrder = async () => {
    const card = cards.find(c => c.id === selectedCard);
    if (!card || !selectedShipping) return;

    const checkedItems = cart.filter(item => item.checked);
    const productsTotal = checkedItems.reduce((sum, item) => sum + (item.product.price * item.count), 0);
    const shippingCost = productsTotal > 0 ? 29.99 : 0;
    const discount = productsTotal >= 150 ? 29.99 : 0; 
    const grandTotal = productsTotal > 0 ? productsTotal + shippingCost - discount : 0;

    const payload = {
      address_id: selectedShipping,
      order_date: new Date().toISOString(),
      card_no: Number(card.card_no),
      card_name: card.name_on_card,
      card_expire_month: card.expire_month,
      card_expire_year: card.expire_year,
      card_ccv: 321,
      price: grandTotal,
      products: checkedItems.map(item => ({
        product_id: item.product.id,
        count: item.count,
        detail: "standart"
      }))
    };

    try {
      await api.post("/order", payload);
      toast.success("Order completed successfully! Congratulations!");
      dispatch(setCart([]));
      history.push("/");
    } catch (error) {
      console.error("Failed to create order", error);
      toast.error("Failed to create order. Please try again.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-2xl font-bold mb-6">Create Order</h1>

      {/* Tabs */}
      <div className="flex border-b mb-6">
        <button
          onClick={() => setActiveTab("address")}
          className={`flex items-center px-4 py-3 font-semibold ${
            activeTab === "address" ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-500 hover:text-gray-700"
          }`}
        >
          <MapPin className="mr-2" size={20} />
          Address Information
        </button>
        <button
          onClick={() => setActiveTab("payment")}
          className={`flex items-center px-4 py-3 font-semibold ${
            activeTab === "payment" ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-500 hover:text-gray-700"
          }`}
        >
          <CreditCard className="mr-2" size={20} />
          Payment Options
        </button>
      </div>

      {/* --- ADDRESS TAB CONTENT --- */}
      {activeTab === "address" && (
        <>
          {loadingAddresses ? (
            <p>Loading addresses...</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">Your Addresses</h2>
                  <button
                    onClick={openNewAddressForm}
                    className="flex items-center text-sm bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 transition"
                  >
                    <Plus size={16} className="mr-1" /> Add Address
                  </button>
                </div>

                {addresses.length === 0 ? (
                  <p className="text-gray-500">No addresses found. Please add one.</p>
                ) : (
                  addresses.map((address) => (
                    <div key={address.id} className="border p-4 rounded-md shadow-sm bg-white">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold text-lg">{address.title}</h3>
                          <p className="text-sm text-gray-600">{address.name} {address.surname}</p>
                          <p className="text-sm text-gray-600">{address.phone}</p>
                        </div>
                        <div className="flex space-x-2">
                          <button onClick={() => handleEditAddress(address)} className="text-blue-500 hover:text-blue-700">
                            <Edit2 size={18} />
                          </button>
                          <button onClick={() => handleDeleteAddress(address.id)} className="text-red-500 hover:text-red-700">
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                      <p className="text-sm text-gray-700">
                        {address.neighborhood}, {address.district}, {address.city}
                      </p>

                      <div className="mt-4 flex flex-col space-y-2">
                        <label className="flex items-center space-x-2 text-sm">
                          <input
                            type="radio"
                            name="shipping"
                            checked={selectedShipping === address.id}
                            onChange={() => setSelectedShipping(address.id)}
                            className="form-radio"
                          />
                          <span>Use as Shipping Address</span>
                        </label>
                        <label className="flex items-center space-x-2 text-sm">
                          <input
                            type="radio"
                            name="billing"
                            checked={selectedBilling === address.id}
                            onChange={() => setSelectedBilling(address.id)}
                            className="form-radio"
                          />
                          <span>Use as Billing Address</span>
                        </label>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {showAddressForm && (
                <div className="border p-6 rounded-md shadow-sm bg-white">
                  <h2 className="text-xl font-semibold mb-4">
                    {editingAddress ? "Update Address" : "Add New Address"}
                  </h2>
                  <form onSubmit={handleSubmitAddress(onAddressSubmit)} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Address Title</label>
                      <input {...registerAddress("title", { required: "Title is required" })} className="w-full border rounded p-2 text-sm" placeholder="e.g. Home, Office" />
                      {errorsAddress.title && <span className="text-red-500 text-xs">{errorsAddress.title.message}</span>}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Name</label>
                        <input {...registerAddress("name", { required: "Name is required" })} className="w-full border rounded p-2 text-sm" />
                        {errorsAddress.name && <span className="text-red-500 text-xs">{errorsAddress.name.message}</span>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Surname</label>
                        <input {...registerAddress("surname", { required: "Surname is required" })} className="w-full border rounded p-2 text-sm" />
                        {errorsAddress.surname && <span className="text-red-500 text-xs">{errorsAddress.surname.message}</span>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Phone</label>
                      <input {...registerAddress("phone", { required: "Phone is required" })} className="w-full border rounded p-2 text-sm" placeholder="05xxxxxxxxx" />
                      {errorsAddress.phone && <span className="text-red-500 text-xs">{errorsAddress.phone.message}</span>}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">City</label>
                        <select {...registerAddress("city", { required: "City is required" })} className="w-full border rounded p-2 text-sm">
                          <option value="">Select a city</option>
                          {CITIES.map((city) => (
                            <option key={city} value={city}>{city}</option>
                          ))}
                        </select>
                        {errorsAddress.city && <span className="text-red-500 text-xs">{errorsAddress.city.message}</span>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">District</label>
                        <input {...registerAddress("district", { required: "District is required" })} className="w-full border rounded p-2 text-sm" />
                        {errorsAddress.district && <span className="text-red-500 text-xs">{errorsAddress.district.message}</span>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Neighborhood & Address Details</label>
                      <textarea {...registerAddress("neighborhood", { required: "Address details are required" })} className="w-full border rounded p-2 text-sm" rows={3} placeholder="Neighborhood, street, building and door numbers..."></textarea>
                      {errorsAddress.neighborhood && <span className="text-red-500 text-xs">{errorsAddress.neighborhood.message}</span>}
                    </div>

                    <div className="flex justify-end space-x-2 pt-2">
                      <button type="button" onClick={() => { setShowAddressForm(false); setEditingAddress(null); resetAddress(); }} className="px-4 py-2 border rounded text-sm hover:bg-gray-100 transition">Cancel</button>
                      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 transition">{editingAddress ? "Update" : "Save"}</button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          )}
          <div className="mt-8 flex justify-end">
            <button 
              onClick={() => setActiveTab("payment")} 
              disabled={!selectedShipping || !selectedBilling}
              className="bg-[#23A6F0] text-white px-6 py-3 rounded font-bold hover:bg-blue-600 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Continue to Payment
            </button>
          </div>
        </>
      )}

      {/* --- PAYMENT TAB CONTENT --- */}
      {activeTab === "payment" && (
        <>
          {loadingCards ? (
            <p>Loading payment methods...</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">Your Cards</h2>
                  <button
                    onClick={openNewCardForm}
                    className="flex items-center text-sm bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 transition"
                  >
                    <Plus size={16} className="mr-1" /> Add Card
                  </button>
                </div>

                {cards.length === 0 ? (
                  <p className="text-gray-500">No saved cards found. Please add one.</p>
                ) : (
                  cards.map((card) => (
                    <div key={card.id} className={`border p-4 rounded-md shadow-sm bg-white cursor-pointer ${selectedCard === card.id ? 'border-blue-500 ring-1 ring-blue-500' : ''}`} onClick={() => setSelectedCard(card.id)}>
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-3">
                          <input 
                            type="radio" 
                            name="selectedCard" 
                            checked={selectedCard === card.id}
                            onChange={() => setSelectedCard(card.id)}
                            className="form-radio"
                          />
                          <div>
                            <p className="font-semibold text-lg">{card.name_on_card}</p>
                            <p className="text-sm text-gray-600">**** **** **** {card.card_no.slice(-4)}</p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <button onClick={(e) => { e.stopPropagation(); handleEditCard(card); }} className="text-blue-500 hover:text-blue-700">
                            <Edit2 size={18} />
                          </button>
                          <button onClick={(e) => { e.stopPropagation(); handleDeleteCard(card.id); }} className="text-red-500 hover:text-red-700">
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                      <p className="text-sm text-gray-500 ml-8">Expires: {card.expire_month}/{card.expire_year}</p>
                    </div>
                  ))
                )}
              </div>

              {showCardForm && (
                <div className="border p-6 rounded-md shadow-sm bg-white h-fit">
                  <h2 className="text-xl font-semibold mb-4">
                    {editingCard ? "Update Card" : "Add New Card"}
                  </h2>
                  <form onSubmit={handleSubmitCard(onCardSubmit)} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Name on Card</label>
                      <input {...registerCard("name_on_card", { required: "Name is required" })} className="w-full border rounded p-2 text-sm" />
                      {errorsCard.name_on_card && <span className="text-red-500 text-xs">{errorsCard.name_on_card.message}</span>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Card Number</label>
                      <input 
                        {...registerCard("card_no", { 
                          required: "Card number is required",
                          pattern: {
                            value: /^\d{16}$/,
                            message: "Card number must be 16 digits"
                          }
                        })} 
                        className="w-full border rounded p-2 text-sm" 
                        placeholder="1234123412341234"
                        maxLength={16}
                      />
                      {errorsCard.card_no && <span className="text-red-500 text-xs">{errorsCard.card_no.message}</span>}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Expire Month</label>
                        <select {...registerCard("expire_month", { required: "Month is required" })} className="w-full border rounded p-2 text-sm">
                          <option value="">Month</option>
                          {Array.from({ length: 12 }, (_, i) => i + 1).map(m => (
                            <option key={m} value={m}>{m.toString().padStart(2, '0')}</option>
                          ))}
                        </select>
                        {errorsCard.expire_month && <span className="text-red-500 text-xs">{errorsCard.expire_month.message}</span>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Expire Year</label>
                        <select {...registerCard("expire_year", { required: "Year is required" })} className="w-full border rounded p-2 text-sm">
                          <option value="">Year</option>
                          {Array.from({ length: 15 }, (_, i) => new Date().getFullYear() + i).map(y => (
                            <option key={y} value={y}>{y}</option>
                          ))}
                        </select>
                        {errorsCard.expire_year && <span className="text-red-500 text-xs">{errorsCard.expire_year.message}</span>}
                      </div>
                    </div>

                    <div className="flex justify-end space-x-2 pt-2">
                      <button type="button" onClick={() => { setShowCardForm(false); setEditingCard(null); resetCard(); }} className="px-4 py-2 border rounded text-sm hover:bg-gray-100 transition">Cancel</button>
                      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 transition">{editingCard ? "Update" : "Save"}</button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          )}
          <div className="mt-8 flex justify-end">
            <button 
              onClick={handleCompleteOrder}
              disabled={!selectedCard}
              className="bg-[#23A6F0] text-white px-6 py-3 rounded font-bold hover:bg-blue-600 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Complete Order
            </button>
          </div>
        </>
      )}
    </div>
  );
}
