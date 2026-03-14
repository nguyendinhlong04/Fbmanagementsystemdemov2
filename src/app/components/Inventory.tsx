import { useState } from "react";
import { Plus, Minus, AlertTriangle, Package } from "lucide-react";

interface InventoryItem {
  id: string;
  name: string;
  currentStock: number;
  unit: string;
  minStock: number;
  maxStock: number;
  lastUpdated: string;
}

const initialInventory: InventoryItem[] = [
  {
    id: "1",
    name: "Beef Patties",
    currentStock: 45,
    unit: "pcs",
    minStock: 20,
    maxStock: 100,
    lastUpdated: "2 hours ago",
  },
  {
    id: "2",
    name: "Burger Buns",
    currentStock: 12,
    unit: "pcs",
    minStock: 30,
    maxStock: 150,
    lastUpdated: "3 hours ago",
  },
  {
    id: "3",
    name: "Cheese Slices",
    currentStock: 75,
    unit: "pcs",
    minStock: 40,
    maxStock: 120,
    lastUpdated: "1 hour ago",
  },
  {
    id: "4",
    name: "Tomatoes",
    currentStock: 28,
    unit: "kg",
    minStock: 15,
    maxStock: 50,
    lastUpdated: "5 hours ago",
  },
  {
    id: "5",
    name: "Lettuce",
    currentStock: 8,
    unit: "kg",
    minStock: 10,
    maxStock: 30,
    lastUpdated: "2 hours ago",
  },
  {
    id: "6",
    name: "Pizza Dough",
    currentStock: 55,
    unit: "pcs",
    minStock: 25,
    maxStock: 80,
    lastUpdated: "4 hours ago",
  },
  {
    id: "7",
    name: "Mozzarella",
    currentStock: 32,
    unit: "kg",
    minStock: 20,
    maxStock: 60,
    lastUpdated: "3 hours ago",
  },
  {
    id: "8",
    name: "Pasta",
    currentStock: 18,
    unit: "kg",
    minStock: 15,
    maxStock: 50,
    lastUpdated: "6 hours ago",
  },
  {
    id: "9",
    name: "Coffee Beans",
    currentStock: 4,
    unit: "kg",
    minStock: 5,
    maxStock: 20,
    lastUpdated: "1 hour ago",
  },
  {
    id: "10",
    name: "Milk",
    currentStock: 22,
    unit: "L",
    minStock: 15,
    maxStock: 40,
    lastUpdated: "2 hours ago",
  },
  {
    id: "11",
    name: "Chicken Breast",
    currentStock: 35,
    unit: "kg",
    minStock: 20,
    maxStock: 60,
    lastUpdated: "3 hours ago",
  },
  {
    id: "12",
    name: "Ice Cream",
    currentStock: 68,
    unit: "L",
    minStock: 30,
    maxStock: 100,
    lastUpdated: "5 hours ago",
  },
];

export default function Inventory() {
  const [inventory, setInventory] = useState<InventoryItem[]>(initialInventory);

  const getStockStatus = (item: InventoryItem) => {
    const percentage = (item.currentStock / item.maxStock) * 100;
    if (item.currentStock < item.minStock) return "critical";
    if (percentage < 40) return "low";
    if (percentage < 70) return "medium";
    return "good";
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "critical":
        return "bg-red-500";
      case "low":
        return "bg-orange-500";
      case "medium":
        return "bg-yellow-500";
      case "good":
        return "bg-green-500";
      default:
        return "bg-zinc-500";
    }
  };

  const getStatusBgColor = (status: string) => {
    switch (status) {
      case "critical":
        return "bg-red-500/10 border-red-500/30";
      case "low":
        return "bg-orange-500/10 border-orange-500/30";
      case "medium":
        return "bg-yellow-500/10 border-yellow-500/30";
      case "good":
        return "bg-green-500/10 border-green-500/30";
      default:
        return "bg-zinc-900 border-zinc-800";
    }
  };

  const updateStock = (id: string, change: number) => {
    setInventory(
      inventory.map((item) =>
        item.id === id
          ? {
              ...item,
              currentStock: Math.max(
                0,
                Math.min(item.maxStock, item.currentStock + change)
              ),
              lastUpdated: "Just now",
            }
          : item
      )
    );
  };

  const criticalItems = inventory.filter(
    (item) => item.currentStock < item.minStock
  ).length;
  const lowStockItems = inventory.filter((item) => {
    const percentage = (item.currentStock / item.maxStock) * 100;
    return percentage < 40 && item.currentStock >= item.minStock;
  }).length;

  return (
    <div className="h-screen bg-black p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Inventory Management</h1>
          <p className="text-zinc-400">Track stock levels and manage inventory</p>
        </div>
        <button className="bg-white text-black px-6 py-3 rounded-xl font-medium hover:bg-zinc-200 transition-all flex items-center gap-2">
          <Plus size={20} />
          Add Item
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-zinc-900 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
              <Package size={24} className="text-green-500" />
            </div>
            <div>
              <p className="text-zinc-400 text-sm">Total Items</p>
              <p className="text-2xl font-bold">{inventory.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center">
              <AlertTriangle size={24} className="text-orange-500" />
            </div>
            <div>
              <p className="text-zinc-400 text-sm">Low Stock</p>
              <p className="text-2xl font-bold text-orange-500">{lowStockItems}</p>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center">
              <AlertTriangle size={24} className="text-red-500" />
            </div>
            <div>
              <p className="text-zinc-400 text-sm">Critical</p>
              <p className="text-2xl font-bold text-red-500">{criticalItems}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Inventory Grid */}
      <div className="grid grid-cols-3 gap-4">
        {inventory.map((item) => {
          const status = getStockStatus(item);
          const stockPercentage = (item.currentStock / item.maxStock) * 100;

          return (
            <div
              key={item.id}
              className={`rounded-2xl p-6 border-2 ${getStatusBgColor(status)}`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="font-medium mb-1">{item.name}</h3>
                  <p className="text-xs text-zinc-500">{item.lastUpdated}</p>
                </div>
                {status === "critical" && (
                  <AlertTriangle size={20} className="text-red-500" />
                )}
              </div>

              {/* Stock Display */}
              <div className="mb-4">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl font-bold">{item.currentStock}</span>
                  <span className="text-zinc-500">/ {item.maxStock}</span>
                  <span className="text-zinc-500">{item.unit}</span>
                </div>

                {/* Progress Bar */}
                <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${getStatusColor(status)} transition-all`}
                    style={{ width: `${Math.min(100, stockPercentage)}%` }}
                  />
                </div>
              </div>

              {/* Min Stock Warning */}
              {item.currentStock < item.minStock && (
                <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                  <p className="text-xs text-red-500 font-medium">
                    Below minimum stock ({item.minStock} {item.unit})
                  </p>
                </div>
              )}

              {/* Quick Actions */}
              <div className="flex gap-2">
                <button
                  onClick={() => updateStock(item.id, -1)}
                  className="flex-1 bg-zinc-800 hover:bg-zinc-700 rounded-lg py-2 flex items-center justify-center gap-2 transition-all"
                >
                  <Minus size={16} />
                  <span className="text-sm font-medium">Use</span>
                </button>
                <button
                  onClick={() => updateStock(item.id, 10)}
                  className="flex-1 bg-white text-black hover:bg-zinc-200 rounded-lg py-2 flex items-center justify-center gap-2 transition-all"
                >
                  <Plus size={16} />
                  <span className="text-sm font-medium">Restock</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
