import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

// Removed import of cn from non-existent lib/utils
// You may need to add a utility function for classNames if needed

const Avatar = React.forwardRef(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full " +
      (className || "")
    }
    {...props}
  />
))
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={"aspect-square h-full w-full " + (className || "")}
    {...props}
  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={
      "flex h-full w-full items-center justify-center rounded-full bg-muted " +
      (className || "")
    }
    {...props}
  />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback }
