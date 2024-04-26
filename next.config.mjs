/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [{hostname: "www.artic.edu"}],
	},

	async redirects() {
		return [
			{
				source: "/",
				destination: "/home",
				permanent: true,
			},
		];
	},
};

export default nextConfig;
