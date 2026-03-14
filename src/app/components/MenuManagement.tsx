import { useState } from "react";
import { Edit2, Eye, EyeOff, DollarSign, Plus } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  available: boolean;
}

const initialMenuItems: MenuItem[] = [
  {
    id: "1",
    name: "Classic Burger",
    price: 12.99,
    category: "Food",
    image: "https://images.unsplash.com/photo-1671106672702-5626deb87b0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJnZXIlMjBmb29kJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzczNDg4OTg0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    available: true,
  },
  {
    id: "2",
    name: "Margherita Pizza",
    price: 15.99,
    category: "Food",
    image: "https://images.unsplash.com/photo-1667422542005-eb6909ac24c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMHNsaWNlJTIwZm9vZHxlbnwxfHx8fDE3NzM0NTU3ODd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    available: true,
  },
  {
    id: "3",
    name: "Pasta Carbonara",
    price: 14.50,
    category: "Food",
    image: "https://images.unsplash.com/photo-1712746784067-e9e1bd86c043?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0YSUyMGRpc2glMjByZXN0YXVyYW50fGVufDF8fHx8MTc3MzQyNTExMXww&ixlib=rb-4.1.0&q=80&w=1080",
    available: false,
  },
  {
    id: "4",
    name: "Caesar Salad",
    price: 9.99,
    category: "Food",
    image: "https://images.unsplash.com/photo-1649531794884-b8bb1de72e68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxhZCUyMGJvd2wlMjBoZWFsdGh5fGVufDF8fHx8MTc3MzQxMjA4Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    available: true,
  },
  {
    id: "5",
    name: "Grilled Steak",
    price: 24.99,
    category: "Food",
    image: "https://images.unsplash.com/photo-1693422660544-014dd9f3ef73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVhayUyMGdyaWxsZWQlMjBtZWF0fGVufDF8fHx8MTc3MzQ2NTc4OHww&ixlib=rb-4.1.0&q=80&w=1080",
    available: true,
  },
  {
    id: "6",
    name: "Sushi Platter",
    price: 18.99,
    category: "Food",
    image: "https://images.unsplash.com/photo-1708738749907-8618aaf409fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXNoaSUyMHJvbGxzJTIwYXNpYW58ZW58MXx8fHwxNzczNDk2MTMyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    available: true,
  },
  {
    id: "7",
    name: "Espresso",
    price: 3.50,
    category: "Drinks",
    image: "https://images.unsplash.com/photo-1564676677001-92e8f1a0df30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBjdXAlMjBkcmlua3xlbnwxfHx8fDE3NzMzODU3MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    available: true,
  },
  {
    id: "8",
    name: "Fresh Orange Juice",
    price: 4.99,
    category: "Drinks",
    image: "https://images.unsplash.com/photo-1641659735894-45046caad624?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqdWljZSUyMGdsYXNzJTIwZnJlc2h8ZW58MXx8fHwxNzczNDk2MTMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    available: true,
  },
  {
    id: "9",
    name: "Chocolate Cake",
    price: 6.99,
    category: "Dessert",
    image: "https://images.unsplash.com/photo-1607257882338-70f7dd2ae344?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjYWtlJTIwZGVzc2VydHxlbnwxfHx8fDE3NzM0NTYxMTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    available: true,
  },
  {
    id: "10",
    name: "Ice Cream Sundae",
    price: 5.99,
    category: "Dessert",
    image: "https://images.unsplash.com/photo-1673551493011-2b5f771013d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY2UlMjBjcmVhbSUyMGRlc3NlcnR8ZW58MXx8fHwxNzczNDY2NDkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    available: false,
  },
];

export default function MenuManagement() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(initialMenuItems);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editPrice, setEditPrice] = useState("");

  const categories = ["All", "Food", "Drinks", "Dessert"];

  const toggleAvailability = (id: string) => {
    setMenuItems(
      menuItems.map((item) =>
        item.id === id ? { ...item, available: !item.available } : item
      )
    );
  };

  const startEditing = (id: string, currentPrice: number) => {
    setEditingId(id);
    setEditPrice(currentPrice.toString());
  };

  const savePrice = (id: string) => {
    const newPrice = parseFloat(editPrice);
    if (!isNaN(newPrice) && newPrice > 0) {
      setMenuItems(
        menuItems.map((item) =>
          item.id === id ? { ...item, price: newPrice } : item
        )
      );
    }
    setEditingId(null);
  };

  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="h-screen bg-black p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Menu Management</h1>
          <p className="text-zinc-400">Manage menu items, prices, and availability</p>
        </div>
        <button className="bg-white text-black px-6 py-3 rounded-xl font-medium hover:bg-zinc-200 transition-all flex items-center gap-2">
          <Plus size={20} />
          Add New Item
        </button>
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
      <div className="grid grid-cols-4 gap-4">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className={`bg-zinc-900 rounded-2xl overflow-hidden ${
              !item.available ? "opacity-50" : ""
            }`}
          >
            <div className="aspect-video overflow-hidden relative">
              <ImageWithFallback
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
              {!item.available && (
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-lg font-medium text-sm">
                    Unavailable
                  </span>
                </div>
              )}
            </div>
            <div className="p-4">
              <div className="mb-3">
                <h3 className="font-medium mb-1">{item.name}</h3>
                <span className="text-xs text-zinc-500 bg-zinc-800 px-2 py-1 rounded">
                  {item.category}
                </span>
              </div>

              {/* Price Edit */}
              <div className="mb-3">
                {editingId === item.id ? (
                  <div className="flex items-center gap-2">
                    <div className="flex items-center bg-zinc-800 rounded-lg px-3 py-2 flex-1">
                      <DollarSign size={16} className="text-zinc-500" />
                      <input
                        type="number"
                        value={editPrice}
                        onChange={(e) => setEditPrice(e.target.value)}
                        onBlur={() => savePrice(item.id)}
                        onKeyDown={(e) =>
                          e.key === "Enter" && savePrice(item.id)
                        }
                        className="bg-transparent outline-none w-full ml-1"
                        autoFocus
                      />
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold">
                      ${item.price.toFixed(2)}
                    </span>
                    <button
                      onClick={() => startEditing(item.id, item.price)}
                      className="text-zinc-400 hover:text-white transition-colors p-2"
                    >
                      <Edit2 size={16} />
                    </button>
                  </div>
                )}
              </div>

              {/* Availability Toggle */}
              <button
                onClick={() => toggleAvailability(item.id)}
                className={`w-full py-2 rounded-lg font-medium flex items-center justify-center gap-2 transition-all ${
                  item.available
                    ? "bg-green-500/10 text-green-500 hover:bg-green-500/20"
                    : "bg-red-500/10 text-red-500 hover:bg-red-500/20"
                }`}
              >
                {item.available ? (
                  <>
                    <Eye size={16} />
                    Available
                  </>
                ) : (
                  <>
                    <EyeOff size={16} />
                    Unavailable
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
