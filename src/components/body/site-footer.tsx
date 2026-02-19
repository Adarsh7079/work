import Link from "next/link";

const SiteFooter = () => {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <h3 className="text-3xl font-black tracking-tight">10MINS HOME</h3>
          <p className="mt-3 max-w-md text-sm font-medium text-slate-300">
            Quick, reliable and verified doorstep services for everyday home needs.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-black uppercase tracking-wider text-slate-400">Company</h4>
          <ul className="mt-4 space-y-2 text-sm font-semibold text-slate-200">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/">Why Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-black uppercase tracking-wider text-slate-400">Support</h4>
          <ul className="mt-4 space-y-2 text-sm font-semibold text-slate-200">
            <li><Link href="/">FAQs</Link></li>
            <li><Link href="/">Contact</Link></li>
            <li><Link href="/">Terms</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800 px-6 py-5 text-center text-xs font-semibold text-slate-400">
        © {new Date().getFullYear()} 10MINS HOME. All rights reserved.
      </div>
    </footer>
  );
};

export default SiteFooter;
