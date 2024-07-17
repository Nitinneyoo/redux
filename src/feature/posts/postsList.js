import React from "react"; // Import React if you'll use JSX
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./postAuthor";
import TimeAgo from "./timeAgo";
import ReactionButton from "./ReactionButton";
import './postList.css'

const PostsList = () => {
    const posts = useSelector(selectAllPosts)

    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

    const renderedPosts = orderedPosts.map(post => (
        <article
            key={post.id}>

            <h2>{post.title}</h2>
            <p>{post.content.substring(0, 100)}</p>
            <p className="postCredit">
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
            </p>
            <ReactionButton post={post} />

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
