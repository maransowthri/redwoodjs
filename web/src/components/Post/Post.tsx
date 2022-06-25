import type { Post } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

interface Props {
  post: Post
}

const PostDetail = ({ post }: Props) => {
  return (
    <article key={post.id}>
      <header>
        <Link to={routes.post({ id: post.id })}>{post.title}</Link>
      </header>
      <p>{post.body}</p>
      <div>Posted at: {post.createdAt}</div>
    </article>
  )
}

export default PostDetail
