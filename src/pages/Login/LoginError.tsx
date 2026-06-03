export default function LoginError({ message }: { message: string }) {
    return (
        <h2 className="mt-2.5 -mb-5 w-full rounded bg-red-500 py-2.5 text-center text-xl font-semibold text-white">
            {message}
        </h2>
    )
}
