export default class User {
    constructor({ id, name, email, website }) {
        this.id = id
        this.name = name
        this.email = email
        this.website = website
    }

    get username() {
        return `${this.name}-${this.id}`
    }
}
