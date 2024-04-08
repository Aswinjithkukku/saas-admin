/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "api-server-i1.mytravellerschoice.com",
				port: "8189",
				pathname: "/public/images/**",
			},
		],
	},
};

export default nextConfig;
