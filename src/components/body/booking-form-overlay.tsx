"use client";

import { format } from "date-fns";
import { Clock3, Calendar as CalendarIcon } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

type BookingFormOverlayProps = {
  isOpen: boolean;
  serviceName: string | null;
  onClose: () => void;
};

const BookingFormOverlay = ({ isOpen, serviceName, onClose }: BookingFormOverlayProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedDate || !selectedTime) {
      return;
    }
    onClose();
  };

  if (!isOpen || !serviceName) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-slate-950/60 p-4 text-black">
      <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl">
        <div className="mb-5">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-violet-600">Book Slot</p>
          <h3 className="mt-2 text-2xl font-black text-slate-900">{serviceName}</h3>
          <p className="mt-1 text-sm text-slate-500">Fill your details and choose a slot.</p>
        </div>

        <form className="space-y-3" onSubmit={handleSubmit}>
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
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsCalendarOpen(true)}
              className="h-12 justify-start rounded-xl border-slate-200 text-left text-sm font-semibold text-slate-700"
            >
              <CalendarIcon className="mr-2 h-4 w-4 text-violet-600" />
              {selectedDate ? format(selectedDate, "PPP") : "Select date"}
            </Button>

            <div className="relative">
              <Clock3 className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-violet-600" />
              <input
                required
                name="time"
                type="time"
                value={selectedTime}
                onChange={(event) => setSelectedTime(event.target.value)}
                className="h-12 w-full rounded-xl border border-slate-200 py-3 pr-4 pl-10 text-sm font-medium outline-none transition-colors focus:border-violet-400"
              />
            </div>
          </div>
          <input type="hidden" name="date" value={selectedDate ? format(selectedDate, "yyyy-MM-dd") : ""} />
          <textarea
            required
            name="address"
            placeholder="Service address"
            rows={3}
            className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium outline-none transition-colors focus:border-violet-400"
          />

          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-bold text-slate-700 transition-colors hover:bg-slate-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-xl bg-violet-600 px-5 py-2 text-sm font-bold text-white transition-colors hover:bg-violet-700"
            >
              Confirm Booking
            </button>
          </div>
        </form>
      </div>

      {isCalendarOpen && (
        <div
          className="fixed inset-0 z-[220] flex items-center justify-center bg-slate-950/55 p-4"
          onClick={() => setIsCalendarOpen(false)}
        >
          <div className="rounded-2xl bg-white p-3 shadow-2xl" onClick={(event) => event.stopPropagation()}>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={(date) => {
                setSelectedDate(date);
                if (date) {
                  setIsCalendarOpen(false);
                }
              }}
              disabled={{ before: new Date() }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingFormOverlay;
