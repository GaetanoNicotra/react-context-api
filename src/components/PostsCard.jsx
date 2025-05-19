import React from 'react'

const PostsCard = (props) => {
    // utilizzo le props
    const { title, content, category } = props.post;

    return (
        // definisco la struttura delle card
        <div className="col-lg-6 col-md-10 col-sm-12 mb-4">
            <div className="card h-100">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <h6 className="card-subtitle text-body-secondary mt-3">{category}</h6>
                    <p className="card-text">{content}.</p>
                </div>
            </div>
        </div>
    )
}

export default PostsCard;
