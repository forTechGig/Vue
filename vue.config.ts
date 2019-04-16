
module.exports = {
  devServer: {
    proxy: {
      "/account-api": {
        target: "http://localhost:8080",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/account-api": "/account-api"
        }
      }
    }
  }
};

// module.exports = {
//   publicPath: "http://localhost:8080",
//   devServer: {
//     proxy: {
//       "/account-api": {
//         target: "http://localhost:8080",
//         ws: true,
//         changeOrigin: true,
//         agent: proxyConfig.httpProxyAgent(),
//         pathRewrite: {
//           "^/account-api": "/account-api"
//         }
//       }
//     }
//   }
// };

