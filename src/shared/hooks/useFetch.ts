import { useEffect, useState } from "react"

export default function useFetch<T>(url: string) {
    const [data, setData] = useState<T | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const controller = new AbortController()

        fetch(url, { signal: controller.signal })
            .then((res) => {
                if (!res.ok) {
                    if (res.status === 404) return null
                    throw new Error(`Request failed with status ${res.status}`)
                }
                return res.json()
            })
            .then(setData)
            .catch((error: unknown) => {
                if (error instanceof DOMException && error.name === "AbortError") return
                setError(error instanceof Error ? error.message : "An unexpected error occurred")
            })
            .finally(() => {
                if (!controller.signal.aborted) setLoading(false)
            })

        return () => controller.abort()
    }, [url])

    return { data, loading, error }
}
