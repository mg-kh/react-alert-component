const path = require(`path`)

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@containers': path.resolve(__dirname, 'src/containers/'),
      '@constants': path.resolve(__dirname, 'src/constants/'),
      '@hooks': path.resolve(__dirname, 'src/hooks/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@services': path.resolve(__dirname, 'src/services/'),
      '@store': path.resolve(__dirname, 'src/store/'),
    },
  },
}
