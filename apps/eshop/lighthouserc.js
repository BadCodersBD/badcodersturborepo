module.exports = {
	ci: {
		collect: {
			url: [
				`https://${process.env.ECOM_PREVIEW_URL}`,
			],
			startServerCommand:
				process.env.NODE_ENV === 'production' ? undefined : 'npm run dev',
		},
		assert: {
			preset: 'lighthouse:no-pwa',
		},
		upload: {
			target: 'temporary-public-storage',
		},
	},
};