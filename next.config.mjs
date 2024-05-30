/** @type {import('next').NextConfig} */


const nextConfig = {
    webpack: (config) => {
      config.resolve.alias["@public"] = "./public";
      config.resolve.alias["@components"] = "./src/sidebar";
      config.resolve.alias["@interfaces"] = "./src/interfaces";
      config.resolve.alias["@pages"] = "./src/app";
  
      return config;
    },
  };

export default nextConfig;
