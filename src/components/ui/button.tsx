import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-xl border border-transparent bg-clip-padding font-extrabold whitespace-nowrap tracking-wide transition-all duration-250 ease-out outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-brand-primary-grad-start to-brand-primary-grad-end text-brand-primary-foreground shadow-lg shadow-brand-primary/20 hover:-translate-y-0.5 hover:brightness-105 hover:shadow-xl hover:shadow-brand-primary/25 active:translate-y-0 active:brightness-95 uppercase",
        
        secondary:
          "bg-brand-secondary text-brand-secondary-foreground shadow-md shadow-brand-secondary/15 hover:-translate-y-0.5 hover:bg-brand-secondary-light hover:shadow-lg hover:shadow-brand-secondary/20 active:translate-y-0 active:bg-brand-secondary-hover uppercase",
        
        outline:
          "border-white/15 bg-white/5 text-white hover:-translate-y-0.5 hover:border-brand-primary/50 hover:bg-brand-primary/10 hover:text-brand-primary-light active:translate-y-0 dark:border-white/15",
        
        ghost:
          "text-slate-300 hover:bg-white/10 hover:text-white active:bg-white/15",
        
        destructive:
          "bg-brand-error text-brand-error-foreground shadow-md shadow-brand-error/15 hover:bg-brand-error-light hover:shadow-lg hover:shadow-brand-error/20 focus-visible:border-brand-error-light focus-visible:ring-brand-error/20 dark:focus-visible:ring-brand-error/40",
        
        link: "h-auto rounded-md px-0 text-brand-primary underline-offset-4 hover:text-brand-primary-light hover:underline shadow-none",

        text: "h-auto rounded-md px-0 text-brand-primary hover:text-brand-primary-light hover:underline underline-offset-4 shadow-none",

        dark:
          "bg-brand-bg-dark text-white shadow-md hover:-translate-y-0.5 hover:bg-brand-accent hover:shadow-lg active:translate-y-0 uppercase",

        "light-outline":
          "bg-white border-brand-light-border text-brand-light-heading shadow-sm hover:-translate-y-0.5 hover:border-brand-primary/40 hover:bg-brand-primary-soft hover:text-brand-light-heading active:translate-y-0",
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
