export default class Storage {
    save(key, value) {
        localStorage.setItem(key, JSON.stringify(value))
    }

    read(key) {
        const data = localStorage.getItem(key)
        return JSON.parse(data)
    }
}

export const storage = new Storage()
