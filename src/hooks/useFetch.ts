import { useEffect, useState } from "react"

export default function useFetch<T>(url: string) {
    const [data, setData] = useState<T | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`Request failed with status ${res.status}`)
                }

                return res.json()
            })
            .then(setData)
            .catch((error: unknown) => {
                setError(error instanceof Error ? error.message : "An unexpected error occurred")
            })
            .finally(() => {
                setLoading(false)
            })
    }, [url])

    return { data, loading, error }
}
