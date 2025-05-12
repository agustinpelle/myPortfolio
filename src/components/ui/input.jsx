import * as React from "react"

// Removed import of cn from non-existent lib/utils
// You may need to add a utility function for classNames if needed

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm " +
        (className || "")
      }
      ref={ref}
      {...props}
    />
  )
})
Input.displayName = "Input"

export { Input }
