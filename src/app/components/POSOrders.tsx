import { useState } from "react";
import { Plus, Minus, Trash2, CreditCard, Wallet, Banknote } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
}

interface OrderItem extends MenuItem {
  quantity: number;
}

const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Classic Burger",
    price: 12.99,
    category: "Food",
    image: "https://images.unsplash.com/photo-1671106672702-5626deb87b0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJnZXIlMjBmb29kJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzczNDg4OTg0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "2",
    name: "Margherita Pizza",
    price: 15.99,
    category: "Food",
    image: "https://images.unsplash.com/photo-1667422542005-eb6909ac24c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMHNsaWNlJTIwZm9vZHxlbnwxfHx8fDE3NzM0NTU3ODd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "3",
    name: "Pasta Carbonara",
    price: 14.50,
    category: "Food",
    image: "https://images.unsplash.com/photo-1712746784067-e9e1bd86c043?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0YSUyMGRpc2glMjByZXN0YXVyYW50fGVufDF8fHx8MTc3MzQyNTExMXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "4",
    name: "Caesar Salad",
    price: 9.99,
    category: "Food",
    image: "https://images.unsplash.com/photo-1649531794884-b8bb1de72e68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxhZCUyMGJvd2wlMjBoZWFsdGh5fGVufDF8fHx8MTc3MzQxMjA4Nnww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "5",
    name: "Grilled Steak",
    price: 24.99,
    category: "Food",
    image: "https://images.unsplash.com/photo-1693422660544-014dd9f3ef73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVhayUyMGdyaWxsZWQlMjBtZWF0fGVufDF8fHx8MTc3MzQ2NTc4OHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "6",
    name: "Sushi Platter",
    price: 18.99,
    category: "Food",
    image: "https://images.unsplash.com/photo-1708738749907-8618aaf409fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXNoaSUyMHJvbGxzJTIwYXNpYW58ZW58MXx8fHwxNzczNDk2MTMyfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "7",
    name: "Espresso",
    price: 3.50,
    category: "Drinks",
    image: "https://images.unsplash.com/photo-1564676677001-92e8f1a0df30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBjdXAlMjBkcmlua3xlbnwxfHx8fDE3NzMzODU3MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "8",
    name: "Fresh Orange Juice",
    price: 4.99,
    category: "Drinks",
    image: "https://images.unsplash.com/photo-1641659735894-45046caad624?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqdWljZSUyMGdsYXNzJTIwZnJlc2h8ZW58MXx8fHwxNzczNDk2MTMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "9",
    name: "Chocolate Cake",
    price: 6.99,
    category: "Dessert",
    image: "https://images.unsplash.com/photo-1607257882338-70f7dd2ae344?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjYWtlJTIwZGVzc2VydHxlbnwxfHx8fDE3NzM0NTYxMTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "10",
    name: "Ice Cream Sundae",
    price: 5.99,
    category: "Dessert",
    image: "https://images.unsplash.com/photo-1673551493011-2b5f771013d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY2UlMjBjcmVhbSUyMGRlc3NlcnR8ZW58MXx8fHwxNzczNDY2NDkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export default function POSOrders() {
  const [selectedCategory, setSelectedCategory] = useState("Food");
  const [order, setOrder] = useState<OrderItem[]>([]);

  const categories = ["Food", "Drinks", "Dessert"];

  const addToOrder = (item: MenuItem) => {
    const existingItem = order.find((orderItem) => orderItem.id === item.id);
    if (existingItem) {
      setOrder(
        order.map((orderItem) =>
          orderItem.id === item.id
            ? { ...orderItem, quantity: orderItem.quantity + 1 }
            : orderItem
        )
      );
    } else {
      setOrder([...order, { ...item, quantity: 1 }]);
    }
  };

  const updateQuantity = (id: string, change: number) => {
    setOrder(
      order
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(0, item.quantity + change) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromOrder = (id: string) => {
    setOrder(order.filter((item) => item.id !== id));
  };

  const subtotal = order.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  const clearOrder = () => {
    setOrder([]);
  };

  return (
    <div className="h-screen bg-black p-6 flex gap-6">
      {/* Menu Section */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Point of Sale</h1>
          <p className="text-zinc-400">Select items to add to order</p>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-3 mb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                selectedCategory === category
                  ? "bg-white text-black"
                  : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-3 gap-4 overflow-auto flex-1">
          {menuItems
            .filter((item) => item.category === selectedCategory)
            .map((item) => (
              <button
                key={item.id}
                onClick={() => addToOrder(item)}
                className="bg-zinc-900 rounded-2xl overflow-hidden hover:bg-zinc-800 transition-all border-2 border-transparent hover:border-white group"
              >
                <div className="aspect-video overflow-hidden">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="p-4 text-left">
                  <h3 className="font-medium mb-1">{item.name}</h3>
                  <p className="text-xl font-bold">${item.price.toFixed(2)}</p>
                </div>
              </button>
            ))}
        </div>
      </div>

      {/* Order Summary Panel */}
      <div className="w-96 bg-zinc-900 rounded-2xl p-6 flex flex-col">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Current Order</h2>
          {order.length > 0 && (
            <button
              onClick={clearOrder}
              className="text-zinc-400 hover:text-red-500 transition-colors"
            >
              <Trash2 size={20} />
            </button>
          )}
        </div>

        {/* Order Items */}
        <div className="flex-1 overflow-auto mb-6 space-y-3">
          {order.length === 0 ? (
            <div className="text-center text-zinc-500 py-12">
              <p>No items in order</p>
            </div>
          ) : (
            order.map((item) => (
              <div
                key={item.id}
                className="bg-zinc-800 rounded-xl p-4 flex items-center gap-4"
              >
                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium truncate">{item.name}</h3>
                  <p className="text-zinc-400">${item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="w-8 h-8 rounded-lg bg-zinc-700 hover:bg-zinc-600 flex items-center justify-center"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-8 text-center font-medium">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="w-8 h-8 rounded-lg bg-zinc-700 hover:bg-zinc-600 flex items-center justify-center"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                <button
                  onClick={() => removeFromOrder(item.id)}
                  className="text-zinc-400 hover:text-red-500 transition-colors"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Totals */}
        {order.length > 0 && (
          <>
            <div className="border-t border-zinc-800 pt-4 space-y-2 mb-6">
              <div className="flex justify-between text-zinc-400">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Tax (10%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-2xl font-bold pt-2">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Payment Buttons */}
            <div className="grid grid-cols-3 gap-3">
              <button className="bg-zinc-800 hover:bg-zinc-700 rounded-xl p-4 flex flex-col items-center gap-2 transition-all">
                <Banknote size={24} />
                <span className="text-sm">Cash</span>
              </button>
              <button className="bg-zinc-800 hover:bg-zinc-700 rounded-xl p-4 flex flex-col items-center gap-2 transition-all">
                <CreditCard size={24} />
                <span className="text-sm">Card</span>
              </button>
              <button className="bg-zinc-800 hover:bg-zinc-700 rounded-xl p-4 flex flex-col items-center gap-2 transition-all">
                <Wallet size={24} />
                <span className="text-sm">E-wallet</span>
              </button>
            </div>

            <button className="w-full bg-white text-black font-bold py-4 rounded-xl mt-3 hover:bg-zinc-200 transition-all">
              Complete Order
            </button>
          </>
        )}
      </div>
    </div>
  );
}
