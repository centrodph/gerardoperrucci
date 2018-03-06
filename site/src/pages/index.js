import React from 'react';
import Link from 'gatsby-link';

const IndexPage = ({ data }) => (
    <div>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <ul>
            {data.allStrapiArticle.edges.map((document) => (
                <li key={document.node.id}>
                    <h2>
                        <Link to={`/${document.node.id}`}>{document.node.title}</Link>
                    </h2>
                </li>
            ))}
        </ul>
        <Link to="/page-2/">Go to page 2</Link>
    </div>
);

export default IndexPage;

export const pageQuery = graphql`
    query IndexQuery {
        allTodo {
            edges {
                node {
                    id
                    title
                }
            }
        }
    }
`;
