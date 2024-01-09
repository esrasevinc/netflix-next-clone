const { webpack } = require('next/dist/compiled/webpack/webpack');

/** @type {import('next').NextConfig} */
const nextConfig = {}



webpack: (config) => {
    config.externals = [...config.externals, 'bcrypt'];
    return config;
}

module.exports = nextConfig