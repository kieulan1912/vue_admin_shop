module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vue_admin_shop/' : '/',
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
  },
};
