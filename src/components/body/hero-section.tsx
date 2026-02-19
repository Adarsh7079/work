"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Wrench, Sparkles, Utensils, Car, Home, Search, MapPin, Clock } from 'lucide-react';

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const services = [
    { id: 1, name: 'Electrician', icon: <Zap />, color: 'hover:bg-amber-500', bg: 'bg-slate-100', eta: '8 min' },
    { id: 2, name: 'Plumbing', icon: <Wrench />, color: 'hover:bg-violet-500', bg: 'bg-slate-100', eta: '12 min' },
    { id: 3, name: 'Chef/Cook', icon: <Utensils />, color: 'hover:bg-rose-500', bg: 'bg-slate-100', eta: '15 min' },
    { id: 4, name: 'Beautician', icon: <Sparkles />, color: 'hover:bg-fuchsia-500', bg: 'bg-slate-100', eta: '10 min' },
    { id: 5, name: 'Car Wash', icon: <Car />, color: 'hover:bg-emerald-500', bg: 'bg-slate-100', eta: '9 min' },
    { id: 6, name: 'Home Deep Clean', icon: <Home />, color: 'hover:bg-indigo-500', bg: 'bg-slate-100', eta: '14 min' },
  ];

  if (!mounted) return null;

  return (
    <section className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center space-y-8 mb-16">
          
          {/* Urgency Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 bg-violet-50 border border-violet-100 px-4 py-2 rounded-full"
          >
            <span className="flex h-2 w-2 rounded-full bg-violet-600 animate-pulse" />
            <span className="text-violet-700 text-xs font-bold uppercase tracking-widest">Available in your city now</span>
          </motion.div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight">
            Home help arrived <br /> 
            <span className="text-violet-600">before you finish tea.</span>
          </h1>

          <p className="max-w-xl text-lg text-slate-500 font-medium">
            Everything from electricians to cooks at your doorstep in under 10 minutes.
          </p>

          {/* Search Bar - No Blue */}
          <div className="w-full max-w-2xl bg-slate-100 p-2 rounded-[2rem] flex items-center shadow-inner">
            <div className="flex-1 flex items-center px-6 gap-3">
              <MapPin className="text-slate-400" size={20} />
              <input 
                type="text" 
                placeholder="Where do you need us?" 
                className="bg-transparent w-full py-4 outline-none font-semibold text-slate-700"
              />
            </div>
            <button className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-[1.5rem] font-bold transition-all flex items-center gap-2">
              <Search size={18} />
              Find Now
            </button>
          </div>
        </div>

        {/* Service Selection Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {services.map((service) => (
            <motion.div
              key={service.id}
              whileHover={{ y: -10 }}
              className={`group flex flex-col items-center p-8 rounded-[2.5rem] ${service.bg} ${service.color} transition-all duration-300 cursor-pointer`}
            >
              <div className="mb-4 p-4 bg-white rounded-2xl group-hover:bg-white/20 transition-colors group-hover:text-white text-violet-600">
                {service.icon}
              </div>
              <h3 className="font-bold text-slate-800 group-hover:text-white text-sm whitespace-nowrap">
                {service.name}
              </h3>
              <span className="mt-2 text-[10px] font-black uppercase tracking-tighter text-slate-400 group-hover:text-white/80 flex items-center gap-1">
                <Clock size={12} /> {service.eta}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;