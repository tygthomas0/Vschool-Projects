import React from "react";

function BlogPost(props) {
    return (
        <div class="blogPost">
            <h1 class="postTitle">{props.title}</h1>
            <p class="postSubtitle">{props.subTitle}</p>
            <p class="byline">Posted by <span class="darkAuthor">{props.author}</span> on {props.date}</p>
            <hr></hr>
        </div>
    )
}

export default BlogPost;