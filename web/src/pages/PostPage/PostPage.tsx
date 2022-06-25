import { MetaTags } from '@redwoodjs/web'

import PostCell from 'src/components/PostCell'

interface Props {
  id: number
}

const PostPage = ({ id }: Props) => {
  return (
    <>
      <MetaTags title="Post" description="Post page" />
      <PostCell id={id} />
    </>
  )
}

export default PostPage
