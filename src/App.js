// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import Counter from './feature/counter/counter'
import PostsList from './feature/posts/postsList';
import AddpostForm from './feature/posts/AddpostForm';

function App() {
  return (
    <div className="App">
      <Counter />
      <PostsList />
      <AddpostForm />


    </div>
  );
}

export default App;
