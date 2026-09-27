/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.alnujoomalmasiya.com",
  generateRobotsTxt: true,
  autoLastmod: false,
  transform: async (_config, path) => {
    const match = path.match(/^\/(en|ar|ru)(\/.*)?$/);
    if (!match || /\.(png|ico|xml|txt)$/.test(path)) return null;
    const suffix = match[2] ?? "";
    return {
      loc: path,
      alternateRefs: [
        ...["en", "ar", "ru"].map((locale) => ({
          hreflang: locale,
          href: `https://www.alnujoomalmasiya.com/${locale}${suffix}`,
          hrefIsAbsolute: true,
        })),
        { hreflang: "x-default", href: `https://www.alnujoomalmasiya.com/en${suffix}`, hrefIsAbsolute: true },
      ],
    };
  },
};
