import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../layout/layout";

const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="Blog">
      <ul>
        {data.allSanityPost.nodes.map((blogPost) => (
          <li>
            <Link to={"/blog/" + blogPost.slug.current}>{blogPost.title}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  {
    allSanityPost {
      nodes {
        title
        slug {
          current
        }
      }
    }
  }
`;

export default IndexPage;
