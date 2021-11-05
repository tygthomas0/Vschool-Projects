import React from "react";

function BlogPost(props) {
    return (
        <div className="blogPost">
            <h1 className="postTitle">{props.title}</h1>
            <p className="postSubtitle">{props.subTitle}</p>
            <p className="byline">Posted by <span className="darkAuthor">{props.author}</span> on {props.date}</p>
            <hr></hr>
        </div>
    )
}

export default BlogPost;