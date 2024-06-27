// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import Counter from './feature/counter/counter'
// import { Provider } from 'react-redux';
import PostsList from './feature/posts/postsList';
import AddpostForm from './feature/posts/AddpostForm';

function App() {
  return (
    <div className="App">
      <Counter />
      <AddpostForm />
      <PostsList />


    </div>
  );
}

export default App;
