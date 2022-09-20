interface PersistentStorage {
    getItem(teamId: string): string | null
    getItem(teamId:string, value: any): void
}

class LocalStorage implements PersistentStorage {
    getItem(teamId: string) {
        const item = localStorage.getItem(teamId)

        if (item === null) return undefined
        if (item === "null") return null
        if (item === "undefined") return undefined

        try {

        return JSON.parse(item)
        } catch {}
        
        return item
    }
    setItem(teamId: string, value: any) {
        if (value === undefined) {
            localStorage.removeItem(teamId)
        } else {
            localStorage.setItem(teamId, JSON.stringify(value))
        }
    }
}

class MockStorage implements PersistentStorage {
    getItem() {
        return null
    }
    setItem() {}
}

export const persistentStorage = window?.localStorage 
    ? new LocalStorage()
    : new MockStorage()
