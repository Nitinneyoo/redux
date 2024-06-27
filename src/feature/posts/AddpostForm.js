import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { postsAdded } from './postsSlice';
import "./AddpostForm.css";

const AddpostForm = () => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const onTitleChanged = (e) => {
        setTitle(e.target.value);
    };

    const onContentChanged = (e) => {
        setContent(e.target.value);
    };

    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(
                postsAdded({
                    id: nanoid(),
                    title,
                    content
                })
            );
            setTitle('');
            setContent('');
        }
    };

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
                        type="submit"
                        onClick={onSavePostClicked}>
                        Save Post
                    </button>
                </form>
            </div>
        </div >
    );
};

export default AddpostForm;
