import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../layout/layout";
import BlockContent from "@sanity/block-content-to-react";
import "../../styles/blog.scss";

const BlogPost = ({ data }) => {
  const body = data.sanityPost.body.map((block) => {
    block.markDefs = [];
    return block;
  });
  return (
    <Layout pageTitle={data.sanityPost.title}>
    <span className="date">{`av ${data.sanityPost.author.name} - ${data.sanityPost.publishedAt}`}</span>
      <div className="blog">
        <BlockContent blocks={body} />
      </div>
    </Layout>
  );
};

export default BlogPost;

export const query = graphql`
  query ($id: String!) {
    sanityPost(id: { eq: $id }) {
      title
      slug {
        current
      }
      body {
        _type
        children {
          text
          marks
          _type
          _key
        }
      }
      publishedAt(locale: "nb", formatString: "DD-MM-YYYY HH:mm")
      author {
        name
      }
    }
  }
`;
