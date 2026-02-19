import Link from "next/link";

type BookPageProps = {
  searchParams: Promise<{ service?: string }>;
};

const BookPage = async ({ searchParams }: BookPageProps) => {
  const params = await searchParams;
  const serviceName = params.service || "Selected Service";
  const minDate = new Date().toISOString().split("T")[0];

  return (
    <main className="min-h-screen bg-slate-50 pt-36 pb-16">
      <div className="mx-auto w-full max-w-xl px-6">
        <Link href="/services" className="text-sm font-bold text-violet-600 hover:text-violet-700">
          Back to Services
        </Link>

        <div className="mt-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-violet-600">Book Slot</p>
          <h1 className="mt-2 text-3xl font-black text-slate-900">{serviceName}</h1>
          <p className="mt-2 text-sm text-slate-500">Fill your details and choose a convenient slot.</p>

          <form className="mt-6 space-y-3">
            <input
              required
              name="name"
              type="text"
              placeholder="Your name"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium outline-none transition-colors focus:border-violet-400"
            />
            <input
              required
              name="phone"
              type="tel"
              placeholder="Phone number"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium outline-none transition-colors focus:border-violet-400"
            />
            <div className="grid grid-cols-2 gap-3">
              <input
                required
                min={minDate}
                name="date"
                type="date"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium outline-none transition-colors focus:border-violet-400"
              />
              <input
                required
                name="time"
                type="time"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium outline-none transition-colors focus:border-violet-400"
              />
            </div>
            <textarea
              required
              name="address"
              placeholder="Service address"
              rows={4}
              className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium outline-none transition-colors focus:border-violet-400"
            />

            <button
              type="submit"
              className="w-full rounded-xl bg-violet-600 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-violet-700"
            >
              Confirm Booking
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default BookPage;
