"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import { SERVICES } from "@/constants/services";
import BookingFormOverlay from "@/components/body/booking-form-overlay";

const autoScrollItems = [...SERVICES, ...SERVICES];

const ServiceCarousel = () => {
  const router = useRouter();
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const handleBookClick = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
  };

  return (
    <>
      <section className="relative overflow-hidden bg-white py-24">
        <div className="mx-auto mb-10 max-w-7xl px-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-violet-700">
            <Sparkles size={14} />
            Popular Services
          </span>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
            <h2 className="max-w-2xl text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
              Choose your service and book in seconds.
            </h2>
            <button
              type="button"
              onClick={() => router.push("/services")}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-5 py-3 text-sm font-bold text-slate-700 transition-colors hover:bg-slate-100"
            >
              Explore All
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />

          <motion.div
            className="flex w-max gap-5 px-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          >
            {autoScrollItems.map((service, index) => (
              <button
                type="button"
                onClick={() => handleBookClick(service.title)}
                key={`${service.id}-${index}`}
                className="group relative h-[300px] w-[280px] shrink-0 overflow-hidden rounded-[2rem] bg-slate-900 text-left"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent" />

                <div className="absolute left-4 top-4 flex gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/90 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-black text-white">{service.title}</h3>
                  <p className="mt-1 text-sm font-semibold text-white/80">Book now in under 10 mins</p>
                </div>
              </button>
            ))}
          </motion.div>
        </div>
      </section>
      <BookingFormOverlay
        isOpen={selectedService !== null}
        serviceName={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </>
  );
};

export default ServiceCarousel;
