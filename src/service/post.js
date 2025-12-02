export default class PostService {
  constructor(http, tokenStorage) {
    this.http = http;
    this.tokenStorage = tokenStorage;
  }

  async getPosts(userid) {
    const query = userid ? `userid=${userid}` : "";
    return this.http.fetch(`/post${query}`, {
      method: "GET",
      headers: this.getHeaders(),
    });
  }

  async createPost(text) {
    return this.http.fetch(`/post`, {
      method: "POST",
      headers: this.getHeaders(),
      body: JSON.stringify({ text }),
    });
  }

  // 삭제할 postId
  async deletePost(postId) {
    return this.http.fetch(`/post/${postId}`, {
      method: "DELETE",
      headers: this.getHeaders(),
    });
  }

  // 변경할 postId 보내고 그에 해당하는 text 수정
  async updatePost(postId, text) {
    return this.http.fetch(`/post/${postId}`, {
      method: "PUT",
      headers: this.getHeaders(),
      body: JSON.stringify({ text }),
    });
  }

  getHeaders() {
    const token = this.tokenStorage.getToken();
    return {
      Authorization: `Bearer ${token}`,
    };
  }
}
