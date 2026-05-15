export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // 如果请求路径是以 /api 开头的，转发到后端服务器
    if (url.pathname.startsWith('/api')) {
      
      // 1. 改为 HTTPS 直连你的纯 IP（依赖我们刚才配好的默认 IP 证书完成安全握手）
      const backendURL = "https://43.137.12.22"; 
      const newUrl = backendURL + url.pathname + url.search;

      // 2. 核心骚操作：克隆原请求头，并强行将 Host 篡改为 K8s 路由里写的假域名
      const newHeaders = new Headers(request.headers);
      newHeaders.set("Host", "api.clawhub.local");

      // 3. 构造新的安全请求，带着暗号去敲门
      const newRequest = new Request(newUrl, {
        method: request.method,
        headers: newHeaders,
        body: request.body,
        redirect: 'follow'
      });

      return fetch(newRequest);
    }

    // 否则，默认返回前端静态资源
    return env.ASSETS.fetch(request);
  }
}
