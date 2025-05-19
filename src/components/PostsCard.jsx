import React from 'react'

const PostsCard = () => {
    return (
        <div>
            {count.map((post) => {
                return (
                    <div key={post.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">{post.title}</h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary">{post.category}</h6>
                            <p className="card-text">{post.content}.</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default PostsCard
