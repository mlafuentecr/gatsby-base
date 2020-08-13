import React from "react"
import Layout from "../components/layoutinternal"

export default function post(props) {

  const content = () => { return { __html: props.pageContext.content }; };

  return (
    <Layout>
      <div className="content" dangerouslySetInnerHTML={content()} />
    </Layout>
  )
}
