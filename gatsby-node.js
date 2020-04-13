const path = require(`path`);
const locales = require('./src/config/locales.js');

exports.createPages = ({actions, graphql}) => {
  const {createPage} = actions;

  const MarkdownPageLayout = path.resolve(`src/layout/MarkdownPageLayout.tsx`);

  return graphql(`
    {
      allMarkdownRemark(
        sort: {order: DESC, fields: [frontmatter___date]}
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    return result.data.allMarkdownRemark.edges.forEach(({node}) => {
      createPage({
        path: node.frontmatter.path,
        component: MarkdownPageLayout,
        context: {}
      });
    });
  });
};

// For each page, basically just deleting it (so we can take over)
// and creating it again for each language passing the locale to the page context.
exports.onCreatePage = ({page, actions}) => {
  const {createPage, deletePage} = actions;

  return new Promise(resolve => {
    deletePage(page);

    Object.keys(locales).map(language => {
      // add locale to path only if it is not the default language, i.e. "en"
      const localizedPath = locales[language].default
        ? page.path
        : locales[language].path + page.path;

      return createPage({
        ...page,
        path: localizedPath,
        context: {
          locale: language,
          pagePath: page.path
        }
      });
    });

    resolve();
  });
};
