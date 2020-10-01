import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { Link } from "gatsby"

export default function Home({ data }) {
  return (
    <Layout>
        {data.allDirectory.edges.map(({ node }, index) => (
            <Link to={node.relativePath}>
              <h1 className="text-bright">{node.relativePath.split('/')[1]}</h1>
            </Link>
        ))}
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
