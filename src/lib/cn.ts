import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const typeBg: Record<string, string> = {
    simple: "bg-van-type-simple",
    luxury: "bg-van-type-luxury",
    rugged: "bg-van-type-rugged",
}
