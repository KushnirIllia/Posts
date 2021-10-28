class ApiService {
  constructor(baseUrl) {
    this.url = baseUrl
  }
  async createPost(post) {
    try {
      const request = new Request(this.url + '/posts.json', {
        method: 'post',
        body: JSON.stringify(post)
      })
      return useReq(request)
    } catch (e) {
      console.error(e)
    }
  }
  async fetchPosts() {
    try {
      const request  = new Request(`${this.url}/posts.json`, {
        method: 'get'
      })
      return useReq(request)
    } catch (e) {
      console.error(e)
    }
  }
  async fetchPostById(id) {
    try {
      const request  = new Request(`${this.url}/posts/${id}.json`, {
        method: 'get'
      })
      return useReq(request)
    } catch (e) {
      console.error(e)
    }
  }
}
async function useReq(req) {
  const res = await fetch(req)
  return await res.json()
}
export const apiService = new ApiService('https://posts-js-f3cdc-default-rtdb.firebaseio.com')