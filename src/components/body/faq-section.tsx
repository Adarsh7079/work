"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQ_ITEMS = [
  {
    question: "What is 10MINS HOME?",
    answer: "10MINS HOME is a doorstep service platform where verified professionals arrive quickly for home tasks.",
  },
  {
    question: "How fast can I get a service?",
    answer: "Most services are assigned instantly and professionals typically reach within 10 to 20 minutes based on your area.",
  },
  {
    question: "Are your professionals verified?",
    answer: "Yes. We onboard trained professionals and run quality and identity checks before activating them on the platform.",
  },
  {
    question: "How do I pay?",
    answer: "You can pay online or on completion. Pricing is shown before confirmation with no hidden charges.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="mb-8 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">FAQs</h2>

        <div className="space-y-5">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <article key={item.question} className="rounded-2xl border border-slate-300/80 bg-slate-100/80 px-7 py-5">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 text-left"
                >
                  <h3 className="text-2xl font-black text-slate-900">{item.question}</h3>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-800 text-white">
                    <Plus className={cn("h-5 w-5 transition-transform duration-200", isOpen && "rotate-45")} />
                  </span>
                </button>

                {isOpen && <p className="mt-4 pr-14 text-sm font-medium leading-6 text-slate-600">{item.answer}</p>}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
