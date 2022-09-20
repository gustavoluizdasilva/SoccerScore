import { useEffect, useState } from "react"
import { persistentStorage } from "./persistentstorage"

export function usePersistentValue<T>(teamId: string, initialValue?: T) {
    const [value, setValue] = useState<T>(() => {
        const valueFromStorage = persistentStorage.getItem(teamId)

        if (
            typeof initialValue === "object" &&
            !Array.isArray(initialValue) &&
            initialValue !== null
        ) {
            return {
                ...initialValue,
                ...valueFromStorage,
            }
        }

        return valueFromStorage || initialValue
    })

    useEffect(() => {
    persistentStorage.setItem(teamId, value)
}, [teamId, value])

    return [value, setValue] as const
}
