import { delay, http, HttpResponse } from "msw"

import { users, vans } from "./data"

export const handlers = [
    http.post("/api/login", async ({ request }) => {
        const body = (await request.json()) as { email: string; password: string }
        const match = users.find((u) => u.email === body.email && u.password === body.password)
        await delay(400)

        if (!match) return new HttpResponse(null, { status: 401 })
        const { password: _, ...user } = match
        return HttpResponse.json({ user })
    }),

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
