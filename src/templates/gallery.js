import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function BlogPost({ data }) {
    // console.log(JSON.stringify(data))
    const images = data.allFile.edges
    // const post = data.markdownRemark
    return (
        <Layout>
            {/* {JSON.stringify(data)} */}
            {/* <pr>{JSON.stringify(images[0])}</pr> */}
            {images.map(({ node }, index) => (
                // <tr key={index}>
                //     <td>{node.relativePath}</td>
                // </tr>
                <img src={node.publicURL} key={index} alt=''></img>
            ))}
        </Layout>
    )
}

export const query = graphql`
  query($slug:String!){
    allFile(filter: {relativeDirectory: {regex: $slug }}) {
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