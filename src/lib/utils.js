import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
/**
 * Combine class names conditionally, supports Tailwind merging.
 * Usage: cn("px-2", isActive && "bg-red-500")
 */
export function cn(...inputs) {
    return twMerge(clsx(...inputs));
}
export default cn;
