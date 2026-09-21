"use client";

import React, { useState } from "react";
import { 
  Home, 
  Settings, 
  User, 
  ShoppingBag, 
  Bell, 
  HelpCircle, 
  Menu, 
  X 
} from "lucide-react"; // Using Lucide React for modern, standard icons

interface MenuItem {
  id: number;
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
}

export default function CircularMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Configuration matrix for the 6 circular items
  const menuItems: MenuItem[] = [
    { id: 1, label: "Home", icon: <Home className="w-5 h-5" />, onClick: () => console.log("Home clicked") },
    { id: 2, label: "Profile", icon: <User className="w-5 h-5" />, onClick: () => console.log("Profile clicked") },
    { id: 3, label: "Shop", icon: <ShoppingBag className="w-5 h-5" />, onClick: () => console.log("Shop clicked") },
    { id: 4, label: "Alerts", icon: <Bell className="w-5 h-5" />, onClick: () => console.log("Alerts clicked") },
    { id: 5, label: "Support", icon: <HelpCircle className="w-5 h-5" />, onClick: () => console.log("Support clicked") },
    { id: 6, label: "Settings", icon: <Settings className="w-5 h-5" />, onClick: () => console.log("Settings clicked") },
  ];

  return (
    <div className="flex items-center justify-center min-h-[500px] bg-slate-900 overflow-hidden">
      {/* The Core Circular Wrapper
        Tailwind custom properties handle structural variables clean and isolated.
      */}
      <div 
        className="relative flex items-center justify-center"
        style={{
          // Define design system bounds using standard values
          "--radius": "140px",     // Radial spread distance
          "--btn-size": "52px",    // Nodes diameter size
          "--total-items": "6"     // Absolute item baseline count
        } as React.CSSProperties}
      >
        
        {/* ── CENTRAL TOGGLE/HUB BUTTON ──────────────────────────────── */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle radial control panel"
          className={`
            z-20 w-16 h-16 rounded-full border flex items-center justify-center
            shadow-xl font-medium tracking-wide cursor-pointer transition-all duration-300
            ${isOpen 
              ? "bg-rose-600 border-rose-500 text-white rotate-180 hover:bg-rose-700 focus:ring-rose-500" 
              : "bg-indigo-600 border-indigo-500 text-white hover:bg-indigo-700 focus:ring-indigo-500"
            }
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900
          `}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* ── THE 6 CIRCULAR PERIPHERAL NODES ───────────────────────── */}
        {menuItems.map((item, index) => {
          // Math Formula Strategy: Spacing matches: index * (360 degrees / total items)
          const angleDegrees = index * (360 / menuItems.length);
          
          return (
            <button
              key={item.id}
              onClick={item.onClick}
              title={item.label}
              aria-label={item.label}
              disabled={!isOpen}
              className={`
                absolute z-10 w-[var(--btn-size)] h-[var(--btn-size)] rounded-full
                bg-slate-800 border border-slate-700 text-slate-200 
                flex items-center justify-center shadow-lg
                hover:bg-slate-700 hover:text-white hover:border-indigo-500
                focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-900
                transition-all duration-500 cubic-bezier(0.175, 0.885, 0.32, 1.275)
              `}
              style={{
                // Pass individual loop instance details straight into CSS engine
                "--angle": `${angleDegrees}deg`,
                
                // Advanced Structural Transform:
                // If open: translates coordinates outward radially using native math.
                // If closed: collapses nodes scaling cleanly back into point origin zero (center).
                transform: isOpen
                  ? `translate(calc(cos(var(--angle)) * var(--radius)), calc(sin(var(--angle)) * var(--radius))) scale(1)`
                  : `translate(0, 0) scale(0.3)`,
                opacity: isOpen ? 1 : 0,
                // Sequential transition stagger delay for high-end feel
                transitionDelay: isOpen ? `${index * 40}ms` : "0ms"
              } as React.CSSProperties}
            >
              {item.icon}
            </button>
          );
        })}

        {/* Optional Ambient Background Track Ring */}
        <div 
          className={`
            absolute rounded-full border-2 border-dashed border-slate-800 pointer-events-none transition-all duration-700
            ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-75"}
          `}
          style={{
            width: "calc(var(--radius) * 2)",
            height: "calc(var(--radius) * 2)",
          }}
        />

      </div>
    </div>
  );
}