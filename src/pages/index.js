import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { Link } from "gatsby"

export default function Home({ data }) {
  return (
    <Layout>
      <h1>Amazing Pandas Eating Things</h1>
      <div>
        <img
          src="https://2.bp.blogspot.com/-BMP2l6Hwvp4/TiAxeGx4CTI/AAAAAAAAD_M/XlC_mY3SoEw/s1600/panda-group-eating-bamboo.jpg"
          alt="Group of pandas eating bamboo"
        />
      </div>
      <div>
        <pre>{JSON.stringify(data, null, 4)}</pre>
        {data.allDirectory.edges.map(({ node }, index) => (
          <tr key={index}>
            <Link to={node.relativePath}>
             {node.relativePath}
            </Link>
            {/* <td>{node.base}</td> */}
          </tr>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allDirectory(filter: {relativeDirectory: {regex: "/gallery$/"}}) {
      edges {
        node {
          relativeDirectory
          id
          relativePath
          base
          name
        }
      }
    }
  }
`
