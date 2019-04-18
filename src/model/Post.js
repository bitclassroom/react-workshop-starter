export default class Post {
    constructor({ id, title, body }) {
        this.id = id
        this.title = title
        this.body = body
    }

    get shortTitle() {
        return this.title.slice(0, 10)
    }

    get shortBody() {
        return this.body.slice(0, 50)
    }
}
