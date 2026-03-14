import { DollarSign, TrendingUp, ShoppingBag, Users } from "lucide-react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const dailyRevenue = [
  { day: "Mon", revenue: 2400, orders: 45 },
  { day: "Tue", revenue: 1800, orders: 32 },
  { day: "Wed", revenue: 3200, orders: 58 },
  { day: "Thu", revenue: 2800, orders: 51 },
  { day: "Fri", revenue: 4200, orders: 78 },
  { day: "Sat", revenue: 5100, orders: 92 },
  { day: "Sun", revenue: 4800, orders: 85 },
];

const topSellingItems = [
  {
    id: "1",
    name: "Classic Burger",
    sales: 156,
    revenue: 2026.44,
    percentage: 18,
  },
  {
    id: "2",
    name: "Margherita Pizza",
    sales: 142,
    revenue: 2270.58,
    percentage: 16,
  },
  {
    id: "3",
    name: "Grilled Steak",
    sales: 98,
    revenue: 2449.02,
    percentage: 14,
  },
  {
    id: "4",
    name: "Pasta Carbonara",
    sales: 124,
    revenue: 1798.00,
    percentage: 12,
  },
  {
    id: "5",
    name: "Sushi Platter",
    sales: 87,
    revenue: 1652.13,
    percentage: 10,
  },
];

const categoryData = [
  { name: "Food", value: 12450, color: "#10b981" },
  { name: "Drinks", value: 3280, color: "#3b82f6" },
  { name: "Dessert", value: 1870, color: "#f59e0b" },
];

export default function SalesRevenue() {
  const totalRevenue = dailyRevenue.reduce((sum, day) => sum + day.revenue, 0);
  const totalOrders = dailyRevenue.reduce((sum, day) => sum + day.orders, 0);
  const avgOrderValue = totalRevenue / totalOrders;
  const todayRevenue = dailyRevenue[dailyRevenue.length - 1].revenue;

  return (
    <div className="h-screen bg-black p-6 overflow-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Sales & Revenue</h1>
        <p className="text-zinc-400">Analytics and performance insights</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-zinc-900 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
              <DollarSign size={24} className="text-green-500" />
            </div>
            <div>
              <p className="text-xs text-zinc-400">Total Revenue</p>
              <p className="text-2xl font-bold">${totalRevenue.toLocaleString()}</p>
            </div>
          </div>
          <div className="flex items-center gap-1 text-sm text-green-500">
            <TrendingUp size={16} />
            <span>+12.5% from last week</span>
          </div>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
              <ShoppingBag size={24} className="text-blue-500" />
            </div>
            <div>
              <p className="text-xs text-zinc-400">Total Orders</p>
              <p className="text-2xl font-bold">{totalOrders}</p>
            </div>
          </div>
          <div className="flex items-center gap-1 text-sm text-blue-500">
            <TrendingUp size={16} />
            <span>+8.2% from last week</span>
          </div>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
              <Users size={24} className="text-purple-500" />
            </div>
            <div>
              <p className="text-xs text-zinc-400">Avg Order Value</p>
              <p className="text-2xl font-bold">${avgOrderValue.toFixed(2)}</p>
            </div>
          </div>
          <div className="flex items-center gap-1 text-sm text-purple-500">
            <TrendingUp size={16} />
            <span>+5.3% from last week</span>
          </div>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center">
              <DollarSign size={24} className="text-orange-500" />
            </div>
            <div>
              <p className="text-xs text-zinc-400">Today's Revenue</p>
              <p className="text-2xl font-bold">${todayRevenue.toLocaleString()}</p>
            </div>
          </div>
          <div className="flex items-center gap-1 text-sm text-orange-500">
            <TrendingUp size={16} />
            <span>+18.7% from yesterday</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-6">
        {/* Revenue Chart */}
        <div className="bg-zinc-900 rounded-2xl p-6">
          <h3 className="font-medium mb-4">Weekly Revenue</h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={dailyRevenue}>
              <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
              <XAxis dataKey="day" stroke="#71717a" />
              <YAxis stroke="#71717a" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#18181b",
                  border: "1px solid #3f3f46",
                  borderRadius: "8px",
                  color: "#fff",
                }}
              />
              <Bar dataKey="revenue" fill="#10b981" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Orders Trend */}
        <div className="bg-zinc-900 rounded-2xl p-6">
          <h3 className="font-medium mb-4">Orders Trend</h3>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={dailyRevenue}>
              <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
              <XAxis dataKey="day" stroke="#71717a" />
              <YAxis stroke="#71717a" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#18181b",
                  border: "1px solid #3f3f46",
                  borderRadius: "8px",
                  color: "#fff",
                }}
              />
              <Line
                type="monotone"
                dataKey="orders"
                stroke="#3b82f6"
                strokeWidth={3}
                dot={{ fill: "#3b82f6", r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Top Selling Items */}
        <div className="bg-zinc-900 rounded-2xl p-6">
          <h3 className="font-medium mb-4">Top Selling Items</h3>
          <div className="space-y-3">
            {topSellingItems.map((item, index) => (
              <div key={item.id} className="bg-zinc-800 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white text-black flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-xs text-zinc-400">
                        {item.sales} orders
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">${item.revenue.toFixed(2)}</p>
                    <p className="text-xs text-green-500">
                      {item.percentage}% of sales
                    </p>
                  </div>
                </div>
                <div className="h-2 bg-zinc-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-green-500 rounded-full"
                    style={{ width: `${item.percentage * 5}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Breakdown */}
        <div className="bg-zinc-900 rounded-2xl p-6">
          <h3 className="font-medium mb-4">Sales by Category</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "#18181b",
                  border: "1px solid #3f3f46",
                  borderRadius: "8px",
                  color: "#fff",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-3 gap-3 mt-4">
            {categoryData.map((category) => (
              <div
                key={category.name}
                className="bg-zinc-800 rounded-lg p-3 text-center"
              >
                <div
                  className="w-3 h-3 rounded-full mx-auto mb-2"
                  style={{ backgroundColor: category.color }}
                />
                <p className="text-xs text-zinc-400 mb-1">{category.name}</p>
                <p className="font-bold">${category.value.toLocaleString()}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
