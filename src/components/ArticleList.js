import React from "react";
import Article from "./Article";

function ArticleList({posts}) {
    return (
        <main>
            {posts.map((post) => <Article title={post.title} key={post.id} preview={post.preview} date={post.date}/>)}
        </main>
    )
}

export default ArticleList;