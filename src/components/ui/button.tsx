import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-xl border border-transparent bg-clip-padding font-bold whitespace-nowrap transition-all duration-250 ease-out outline-none select-none focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:border-ring active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        /* ─── Primary: Gold Gradient CTA ─── */
        default:
          "bg-gradient-to-r from-brand-orange-grad-start to-brand-orange-grad-end text-slate-950 font-extrabold tracking-wide hover:brightness-110 shadow-lg shadow-brand-orange/15 uppercase",
        
        /* ─── Secondary: Cyan Accent ─── */
        secondary:
          "bg-brand-cyan/10 text-brand-cyan border-brand-cyan/20 hover:bg-brand-cyan/20 hover:border-brand-cyan/30 font-bold tracking-wide uppercase",
        
        /* ─── Outline: Ghost border button ─── */
        outline:
          "border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/30 font-bold tracking-wide",
        
        /* ─── Ghost: No background ─── */
        ghost:
          "hover:bg-white/10 hover:text-white text-slate-300 font-medium",
        
        /* ─── Destructive: Error ─── */
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        
        /* ─── Link: Text-only ─── */
        link: "text-brand-orange underline-offset-4 hover:underline font-semibold",

        /* ─── Dark: For light sections ─── */
        dark:
          "bg-brand-bg-dark text-white hover:bg-slate-900 font-bold tracking-wide uppercase shadow-md",

        /* ─── Light Outline: For light sections ─── */
        "light-outline":
          "bg-white border-brand-light-border text-brand-light-heading hover:bg-brand-light-bg hover:text-brand-light-heading font-bold",
      },
      size: {
        default:
          "h-10 gap-2 px-5 text-sm",
        xs: "h-7 gap-1 rounded-lg px-3 text-xs",
        sm: "h-8 gap-1.5 rounded-lg px-4 text-[13px]",
        lg: "h-12 gap-2 px-6 text-sm",
        xl: "h-14 gap-2.5 px-8 text-base",
        icon: "size-10",
        "icon-xs": "size-7 rounded-lg",
        "icon-sm": "size-8 rounded-lg",
        "icon-lg": "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
