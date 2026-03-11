import { clsx } from "clsx";
import { merge } from "tailwind-merge";

export function cn(...inputs: any[]) {
  return merge(clsx(...inputs));
}