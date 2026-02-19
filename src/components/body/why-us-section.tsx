"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Clock3, ShieldCheck, Sparkles } from "lucide-react";

const reasons = [
  {
    id: 1,
    title: "10-Minute Arrival",
    description: "Closest verified professional gets assigned instantly.",
    icon: Clock3,
    tone: "from-violet-500 to-indigo-500",
  },
  {
    id: 2,
    title: "Verified Experts",
    description: "Background-checked, trained, and quality-rated after every job.",
    icon: ShieldCheck,
    tone: "from-emerald-500 to-teal-500",
  },
  {
    id: 3,
    title: "No Hidden Fees",
    description: "Transparent pricing before you confirm your booking.",
    icon: BadgeCheck,
    tone: "from-amber-500 to-orange-500",
  },
];

const stats = [
  { id: 1, value: "50k+", label: "Bookings Completed" },
  { id: 2, value: "4.9/5", label: "Average Rating" },
  { id: 3, value: "120+", label: "Service Partners" },
];

const WhyUsSection = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24">
      <div className="pointer-events-none absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-300/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-violet-700">
            <Sparkles size={14} />
            Why Us
          </span>
          <h2 className="mt-5 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
            Fast service, trusted people, zero stress.
          </h2>
          <p className="mt-4 text-base font-medium text-slate-500 md:text-lg">
            We built 10MINS HOME to feel as reliable as your favorite neighborhood pro, only faster.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <motion.article
                key={reason.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className={`mb-5 inline-flex rounded-2xl bg-gradient-to-r p-3 text-white ${reason.tone}`}>
                  <Icon size={20} />
                </div>
                <h3 className="text-xl font-black text-slate-900">{reason.title}</h3>
                <p className="mt-2 text-sm font-medium text-slate-500">{reason.description}</p>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.15 }}
          className="mt-8 rounded-3xl border border-violet-100 bg-white p-6 shadow-sm md:p-8"
        >
          <div className="grid gap-5 md:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="rounded-2xl bg-slate-50 p-5 text-center">
                <p className="text-3xl font-black tracking-tight text-violet-600">{stat.value}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUsSection;
