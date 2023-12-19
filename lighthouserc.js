module.exports = {
    ci: {
      collect: {
        url: [
          `https://${process.env.ECOM_PREVIEW_URL}`,  // URL for the first project
          `https://${process.env.ELECTRONICS_PREVIEW_URL}`,  // URL for the second project
          // ... add more URLs as needed
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
  