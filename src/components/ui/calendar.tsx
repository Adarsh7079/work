"use client";

import * as React from "react";
import { DayPicker } from "react-day-picker";
import { cn } from "@/lib/utils";

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: React.ComponentProps<typeof DayPicker>) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("rounded-xl border border-slate-200 bg-white p-3", className)}
      classNames={{
        months: "flex flex-col",
        month: "space-y-3",
        caption: "flex items-center justify-center py-1",
        caption_label: "text-sm font-bold text-slate-900",
        nav: "flex items-center gap-1",
        nav_button: "h-7 w-7 rounded-md border border-slate-200 text-slate-700 hover:bg-slate-100",
        table: "w-full border-collapse",
        head_row: "flex",
        head_cell: "w-9 text-[11px] font-bold text-slate-400",
        row: "mt-2 flex w-full",
        cell: "relative h-9 w-9 p-0 text-center text-sm",
        day: "h-9 w-9 rounded-md font-semibold text-slate-700 hover:bg-violet-50",
        day_selected: "bg-violet-600 text-white hover:bg-violet-600",
        day_today: "border border-violet-300",
        day_outside: "text-slate-300",
        day_disabled: "text-slate-300",
        ...classNames,
      }}
      {...props}
    />
  );
}

export { Calendar };
