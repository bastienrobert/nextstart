import React, { Component } from 'react'
import Head from 'next/head'

export default class Admin extends Component {
  componentDidMount() {
    const CMS = import('netlify-cms')
  }

  render() {
    return (
      <>
        <Head>
          <link
            href="static/admin/config.yml"
            type="text/yaml"
            rel="cms-config-url"
          />
        </Head>
      </>
    )
  }
}
