import { Outlet, Link, useLocation } from "react-router";
import { ShoppingCart, UtensilsCrossed, Package, Receipt, TrendingUp, LogOut } from "lucide-react";

export default function Layout() {
  const location = useLocation();

  const navItems = [
    { path: "/", icon: ShoppingCart, label: "POS / Orders" },
    { path: "/menu", icon: UtensilsCrossed, label: "Menu" },
    { path: "/inventory", icon: Package, label: "Inventory" },
    { path: "/tax", icon: Receipt, label: "Tax Settings" },
    { path: "/sales", icon: TrendingUp, label: "Sales" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <div className="flex h-screen bg-black text-white">
      {/* Sidebar */}
      <div className="w-20 bg-zinc-900 flex flex-col items-center py-6 border-r border-zinc-800">
        {/* Logo */}
        <div className="mb-8 w-12 h-12 rounded-xl bg-white flex items-center justify-center">
          <span className="text-black font-bold text-xl">F&B</span>
        </div>

        {/* Nav Items */}
        <nav className="flex-1 flex flex-col gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all ${
                  active
                    ? "bg-white text-black"
                    : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
                }`}
                title={item.label}
              >
                <Icon size={24} />
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <button className="w-14 h-14 rounded-xl text-zinc-400 hover:bg-zinc-800 hover:text-white transition-all">
          <LogOut size={24} className="mx-auto" />
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
}
