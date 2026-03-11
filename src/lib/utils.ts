import { clsx } from "clsx";
import { merge } from "tailwind-merge";

export function cn(...inputs: (string | undefined)[]) {
  return merge(clsx(inputs));
}