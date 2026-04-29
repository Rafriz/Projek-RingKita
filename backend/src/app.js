function createApp() {
  return {
    health() {
      return {
        service: 'ringkita-backend',
        status: 'ok',
      };
    },
  };
}

module.exports = { createApp };
