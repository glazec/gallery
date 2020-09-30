const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.relativeDirectory === `gallery`) {
        console.log(node.internal.type)
        console.log(createFilePath({ node, getNode }))
        const slug = createFilePath({ node, getNode, basePath: `src/gallery` })
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })
    }
}

exports.createPages = async ({ graphql, actions }) => {
    // **Note:** The graphql function call returns a Promise
    // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
    const { createPage } = actions
    const result = await graphql(`
    query {
       allDirectory(filter: {relativeDirectory: {regex: "/gallery$/"}}) {
    edges {
      node {
        fields{
          slug
        }
      }
    }
  }
}

  `)
    // console.log(JSON.stringify(result, null, 4))
    result.data.allDirectory.edges.forEach(({ node }) => {
        console.log("\/".concat(node.fields.slug).concat("\/"))
        createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/gallery.js`),
            context: {
                // Data passed to context is available
                // in page queries as GraphQL variables.
                slug: node.fields.slug
            },
        })
    })
}