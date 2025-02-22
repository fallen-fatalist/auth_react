import { useState } from "react";
export const useFetching = (callback, timeout=10000) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('');

    const fetching = async (...args) => {
        try {
            setLoading(true)

            const timeoutPromise = new Promise((_, reject) => 
                setTimeout(() => reject(new Error("Request timed out")), timeout)
            );

            // Race API call against timeout
            await Promise.race([callback(...args), timeoutPromise]);
        } catch (e) {
            setError(e.message)
        } finally {
            setLoading(false)
        }
    }

    return [fetching, loading, error]
}