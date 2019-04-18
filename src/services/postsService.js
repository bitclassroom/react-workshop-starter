import { api } from '../shared/api'
import Post from '../model/Post'

class PostsService {
    async fetchPosts() {
        const postsArr = await api.get('/posts')

        const posts = postsArr.map(post => {
            return new Post(post)
        })

        return posts
    }
}

export const postsService = new PostsService()
