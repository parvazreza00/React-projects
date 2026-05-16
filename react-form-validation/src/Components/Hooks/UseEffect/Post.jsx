import React from 'react'

const Post = ({post}) => {
    const {id, title,body} = post;
  return (
    <div>

        <div>
            <p>{title}</p>
        </div>
      
    </div>
  )
}

export default Post
