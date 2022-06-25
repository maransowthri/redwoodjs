import { MetaTags } from '@redwoodjs/web'

import PostsCell from 'src/components/PostsCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <PostsCell />
    </>
  )
}

export default HomePage
