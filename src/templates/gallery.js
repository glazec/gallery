import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { css } from "@emotion/core"


export default function BlogPost({ data }) {
    // console.log(JSON.stringify(data))
    const images = data.allFile.edges
    // const post = data.markdownRemark
    return (
      <div>
      <Layout></Layout>
      <center>
      <div css={css`max-width:100% `}>
            {images.map(({ node }, index) => (
                // <tr key={index}>
                //     <td>{node.relativePath}</td>
                // </tr>
              <img src={node.publicURL} key={index} alt='' css={css`
        margin: 0 auto;margin-right:4px;margin-left:4px `} loading="lazy"></img>
            ))}
            </div>
      </center>
      </div>
    )
}

export const query = graphql`
  query($slug:String!){
    allFile(filter: {relativeDirectory: {regex: $slug }},sort: {fields: base}) {
      edges {
        node {
          id
          relativePath
          publicURL
        }
      }
    }
  }
`