const siteUrl = 'https://kingtaxaccounting.co.za/';

module.exports = {
	siteUrl,
	generateRobotsTxt: true,
	robotsTxtOptions: {
		policies: [
			{
				userAgent: '*',
				allow: '/',
			},
		],
		additionalSitemaps: [`${siteUrl}/sitemap.xml`],
	},
};
