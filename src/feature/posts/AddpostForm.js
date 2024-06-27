import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postsAdded } from './postsSlice';
import { selectAllUsers } from '../users/usersSlice';
import "./AddpostForm.css";

const AddpostForm = () => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('');

    const users = useSelector(selectAllUsers)


    const onTitleChanged = (e) => {
        setTitle(e.target.value);
    };

    const onContentChanged = (e) => {
        setContent(e.target.value);
    };

    const onAuthorChanged = (e) => {
        setUserId(e.target.value);
    };

    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(
                postsAdded(title, content, userId)
            );
            setTitle('');
            setContent('');
            // setUserId('userId');
        }
    };
    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

    const usersOptions = users.map(user => (
        <option
            key={user.id}
            value={user.id}>
            {user.name}
        </option>
    ))

    return (
        <div className='post'>
            <h2 >Add a New Post</h2>
            <div className='form-section'>
                <form className='form'>
                    <label htmlFor="postTitle">Post Title:</label>
                    <input
                        className='input'
                        type="text"
                        id="postTitle"
                        name="postTitle"
                        value={title}
                        onChange={onTitleChanged}
                    />

                    <label htmlFor='postAuthor'>Author:</label>
                    <select id='PostAuthor' value={userId} onChange={onAuthorChanged}>
                        <option value=""></option>
                        {usersOptions}
                    </select>

                    <label htmlFor="postContent">Post Content:</label>
                    <input
                        className='input'
                        type="text"
                        id="postContent"
                        name="postContent"
                        value={content}
                        onChange={onContentChanged}
                    />
                    <button
                        className='submit-button'
                        type="button"
                        onClick={onSavePostClicked}
                        disabled={!canSave}

                    >
                        Save Post
                    </button>
                </form>
            </div>
        </div >
    );
};

export default AddpostForm;
