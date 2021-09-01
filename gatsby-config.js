module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "BedEx",
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "uj9ryu6g",
        dataset: "production",
        watchMode: true
      },
    },
    "gatsby-plugin-sass",
  ],
};
