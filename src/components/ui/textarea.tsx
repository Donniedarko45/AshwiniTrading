import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex field-sizing-content min-h-24 w-full rounded-xl border border-input bg-white px-3 py-3 text-base text-foreground shadow-sm transition-all duration-250 outline-none placeholder:text-muted-foreground hover:border-brand-primary/45 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/35 disabled:cursor-not-allowed disabled:bg-muted disabled:text-muted-foreground disabled:opacity-70 aria-invalid:border-brand-error aria-invalid:ring-3 aria-invalid:ring-brand-error/20 md:text-sm dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-500 dark:hover:border-brand-primary/45 dark:disabled:bg-white/10 dark:aria-invalid:border-brand-error-light dark:aria-invalid:ring-brand-error/30",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
