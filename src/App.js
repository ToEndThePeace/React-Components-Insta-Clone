/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React, { useState } from "react";
import "./App.css";
// import the PostsPage and SearchBar and add them to the App
import "./components/PostsContainer/PostsPage";
import "./components/SearchBar/SearchBarContainer";
import PostsPage from "./components/PostsContainer/PostsPage";
import SearchBar from "./components/SearchBar/SearchBarContainer";
import dummyData from "./dummy-data";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [posts] = useState(dummyData);

  const getFilteredPosts = posts.filter((post) => {
    if (post.username.toLowerCase().includes(searchTerm.toLowerCase())) return post;
  });

  return (
    <div className="App">
      <SearchBar setSearchTerm={setSearchTerm} />
      <PostsPage 
        posts={getFilteredPosts}
      />
    </div>
  );
};

export default App;
