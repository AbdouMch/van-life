import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const typeBg: Record<string, string> = {
    simple: "bg-van-type-simple text-white capitalize",
    luxury: "bg-van-type-luxury text-white capitalize",
    rugged: "bg-van-type-rugged text-white capitalize",
}

export const typeHoverBg: Record<string, string> = {
    simple: "hover:bg-van-type-simple hover:text-white",
    luxury: "hover:bg-van-type-luxury hover:text-white",
    rugged: "hover:bg-van-type-rugged  hover:text-white",
}
