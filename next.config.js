/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
    webpack: (config) => {
        config.resolve.alias['@src'] = path.join(__dirname, 'src')
        return config
    }
}

module.exports = nextConfig
