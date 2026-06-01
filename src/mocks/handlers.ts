import { delay, http, HttpResponse } from "msw"

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

    http.get("/api/host/:id/vans", async ({ params }) => {
        const hostVans = vans.filter((v) => v.hostId === params.id)
        await delay(1000)

        return HttpResponse.json({ vans: hostVans })
    }),

    http.get("/api/host/:hostId/vans/:vanId", ({ params }) => {
        const van = vans.find((v) => v.id === params.vanId && v.hostId === params.hostId)
        if (!van) return new HttpResponse(null, { status: 404 })
        return HttpResponse.json({ van })
    }),
]
