/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ["mongoose"],
    
  },
  images: {
    domains: ["cdn.imagin.studio"],
  },
  typescript:{
    ignoreBuildErrors:true
  }
  
};


module.exports = nextConfig;
