module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production' ? '/antdv-admin-shop/' : '/',
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
