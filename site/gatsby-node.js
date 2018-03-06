var axios = require('axios');
const API = 'http://gpsite-centrodph.c9users.io/';

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ boundActionCreators, graphql }) => {
    const { createPage } = boundActionCreators;

    return new Promise((resolve, reject) => {
        const blogPostTemplate = await axios.get(API + 'todo');
        // Query for markdown nodes to use in creating pages.
        resolve(
            graphql(
                `
                    {
                        allTodo(limit: 1000) {
                            edges {
                                node {
                                    frontmatter {
                                        id
                                        title
                                    }
                                }
                            }
                        }
                    }
                `
            ).then((result) => {
                if (result.errors) {
                    reject(result.errors);
                }

                // Create pages for each markdown file.
                result.data.allTodo.edges.forEach(({ node }) => {
                    const path = node.frontmatter.id;
                    const title = node.frontmatter.title;
                    const id = node.frontmatter.id;
                    createPage({
                        path,
                        component: blogPostTemplate,
                        // If you have a layout component at src/layouts/blog-layout.js
                        layout: `blog-layout`,
                        // In your blog post template's graphql query, you can use path
                        // as a GraphQL variable to query for data from the markdown file.
                        context: {
                            path,
                            title,
                            id
                        }
                    });
                });
            })
        );
    });
};

// exports.sourceNodes = async ({ boundActionCreators }) => {
//     const { createNode } = boundActionCreators;
//     // Create nodes here, generally by downloading data
//     // from a remote API.
//     const data = await axios.get(API + 'todo');

//     console.log(data.data);

//     // Process data into nodes.
//     data.data.forEach((datum) => createNode(processDatum(datum)));

//     // We're done, return.
//     return;
// };

// const processDatum = ()=>{
//   return createPage({
//     path: `/my-sweet-new-page/`,
//     component: path.resolve(`./src/templates/my-sweet-new-page.js`),
//     // If you have a layout component at src/layouts/blog-layout.js
//     layout: `blog-layout`,
//     // The context is passed as props to the component as well
//     // as into the component's GraphQL query.
//     context: {
//       id: `123456`,
//     },
//   })
// }
