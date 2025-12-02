export default class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  // 서버와 통신하는 메서드
  async fetch(url, options) {
    const res = await fetch(`${this.baseURL}${url}`, {
      ...options, // 요청 옵션을 펼쳐서 넣어줌
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    });
    let data;
    try {
      data = await res.json();
    } catch (error) {
      console.log(error);
    }

    if (res.status > 299 || res.status < 200) {
      const message = data && data.message ? data.message : "오류 !😢";
      throw new Error(message);
    }
    return data;
  }
}
