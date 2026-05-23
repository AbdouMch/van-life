import { http, HttpResponse } from "msw"

import { vans } from "./data"

export const handlers = [
    http.get("/api/vans", () => {
        return HttpResponse.json({ vans })
    }),

    http.get("/api/vans/:id", ({ params }) => {
        const van = vans.find((v) => v.id === params.id)
        if (!van) return new HttpResponse(null, { status: 404 })
        return HttpResponse.json({ van })
    }),
]
