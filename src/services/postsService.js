import { api } from '../shared/api'
import Post from '../model/Post'

class PostsService {
    fetchPosts() {
        return api.get('/posts').then(postsArr => {
            console.log(postsArr)
            const posts = postsArr.map(post => {
                return new Post(post)
            })

            console.log(posts)
            return posts
        })
    }
}

export const postsService = new PostsService()
