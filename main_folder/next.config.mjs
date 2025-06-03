/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['three'],

  // -----GLSL -----
  webpack(config) {
    config.module.rules.push({
      test: /\.(glsl|vert|frag)$/,
      exclude: /node_modules/,
      use: 'raw-loader'
    })
    return config
  }
}

export default nextConfig
