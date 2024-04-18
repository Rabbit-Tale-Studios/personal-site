import Button from 'components/Button'
import Layout from 'components/social/Layout'
import Post from 'components/social/Post' // Fixed import
import PostFilters from 'components/social/PostFilters'
import PostForm from 'components/social/PostForm'
import React from 'react'

const Page = () => {
  return (
    <Layout>
      {/* <PostFilters /> */}
      <PostForm />
      <Post />
    </Layout>
  )
}

export default Page
