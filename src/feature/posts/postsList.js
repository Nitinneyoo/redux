import React from "react"; // Import React if you'll use JSX
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./postAuthor";
import './postList.css'

const PostsList = () => {
    const posts = useSelector(selectAllPosts);

    const renderedPosts = posts.map(post => ( // Iterate over each individual post
        <article
            key={post.id}>
            <div >
                <h2>{post.title}</h2>
                <p>{post.content.substring(0, 100)}</p>
                <p className="postCredit">
                    <PostAuthor userid={post.userId} />
                </p>
            </div>
        </article>
    ));

    return (
        <div className="postList-section">
            <h2>Posts</h2>
            {renderedPosts}
        </div>
    );
};

export default PostsList;
