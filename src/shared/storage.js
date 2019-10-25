class MyStorage {
    save(key, value) {
        sessionStorage.setItem(key, JSON.stringify(value))
    }

    load(key) {
        const data = sessionStorage.getItem(key)
        return JSON.parse(data)
    }
}

export const myStorage = new MyStorage()
