import React from "react"
import { graphql } from "gatsby"

const Consulta = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

export const query = graphql`
  {
    allFile {
      edges {
        node {
          id
        }
      }
      nodes {
        id
      }
    }
  }
`

export default Consulta

