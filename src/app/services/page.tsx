"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";
import { SERVICES } from "@/constants/services";
import BookingFormOverlay from "@/components/body/booking-form-overlay";

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <>
      <main className="min-h-screen bg-slate-50 pt-36 pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-violet-700">
            <Sparkles size={14} />
            Explore Services
          </span>

          <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
            Pick a service and book your slot.
          </h1>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <button
                key={service.id}
                type="button"
                onClick={() => setSelectedService(service.title)}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white text-left shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="p-5">
                  <div className="mb-3 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-violet-50 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-violet-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-2xl font-black text-slate-900">{service.title}</h2>
                  <p className="mt-1 text-sm font-semibold text-slate-500">Click to open booking form</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </main>
      <BookingFormOverlay
        isOpen={selectedService !== null}
        serviceName={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </>
  );
};

export default ServicesPage;
