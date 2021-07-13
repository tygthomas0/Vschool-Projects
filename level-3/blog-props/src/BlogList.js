import React from "react";
import BlogPost from "./BlogPost"
import blogData from "./blogData"

function BlogList() {
    const blogComponents = blogData.map(data => <BlogPost key={data.title} title={data.title} subTitle={data.subTitle} author={data.author} date={data.date}/>)

    return (
        <div id="listContainer">
            <ul id="blogList">
                {blogComponents}
            </ul>
            <div id="olderPosts">
                <h1>OLDER POSTS -{'>'}</h1>
            </div>
        </div>
    )
}

export default BlogList;