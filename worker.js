export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // 如果请求路径是以 /api 开头的，转发到后端服务器
    if (url.pathname.startsWith('/api')) {
      const backendIP = "http://43.137.12.22:53372"; // 替换成你的 NodePort 地址
      const newUrl = backendIP + url.pathname + url.search;
      
      const newRequest = new Request(newUrl, request);
      return fetch(newRequest);
    }

    // 否则，默认返回前端静态资源
    return env.ASSETS.fetch(request);
  }
}
