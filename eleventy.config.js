module.exports = function (eleventyConfig) {
  // Options to customise the appearance of your design history
  // https://x-govuk.github.io/govuk-eleventy-plugin/options/
  eleventyConfig.addPlugin(require('@x-govuk/govuk-eleventy-plugin'), {
    stylesheets: [
      '/styles/application.css'
    ],
    headingPermalinks: true,
    header: {
      logotype: {
        text: 'HM Land Registry'
      },
      productName: '',
      search: {
        indexPath: '/search.json',
        sitemapPath: '/sitemap'
      }
    },
    footer: {
      contentLicence: {
        html: '<!-- -->' // hide content licence
      },
      copyright: {
        html: '<span class="govuk-footer__copyright-logo govuk-footer__copyright-logo--hmlr"></span>' // This should hide the copyright
      },
      meta: {
        items: [
          {
            href: '/sitemap',
            text: 'Sitemap'
          }
        ]
      }
    },
    url:
      process.env.GITHUB_ACTIONS &&
      'https://x-govuk.github.io/govuk-design-history-template/'
  })

  // Sections
    eleventyConfig.addCollection('drs', collection => {
    return collection.getFilteredByGlob('app/posts/drs/*.md')
  })
  // Passthrough
  eleventyConfig.addPassthroughCopy({ './app/images': '.' })

  // Config
  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'app',
      layouts: '_layouts',
      includes: '_components'
    },
    pathPrefix: process.env.GITHUB_ACTIONS && '/govuk-design-history-template/'
  }
}
