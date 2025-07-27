import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combine class names conditionally, supports Tailwind merging.
 * Usage: cn("px-2", isActive && "bg-red-500")
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}

export default cn;
