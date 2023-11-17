import React, { useState } from 'react';
import Post from './posts/Post';
import Suggestions from './Suggestions';
import "./Timeline.css";

function Timeline() {
    const [posts, setPosts] = useState([
        {
            user: "Samira_",
            postImage: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
            likes:12,
            timestamp: "1h",
        },

        {
            user: "Sang_",
            postImage: "https://images.pexels.com/photos/19011533/pexels-photo-19011533/free-photo-of-parasol-mushroom-on-grass.jpeg?auto=compress&cs=tinysrgb&w=600",
            likes:12,
            timestamp: "1h",
        },
       
        {   
            user: "Neha10",
            postImage:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
            likes:89,
            timestamp: "12h",
        },
        {
            user: "Bakshi",
            postImage: "https://images.pexels.com/photos/12157048/pexels-photo-12157048.jpeg?auto=compress&cs=tinysrgb&w=600",
            timestamp: "1h",
        },
        {
            user: "LamJ_19",
            postImage:"data:image/jpeg;base64,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",
            likes:47,
            timestamp: "1d",
        },
    ]);
  return (
    <div className="timeline">
        <div className="timeline__left">
            <div className="timeline__posts">
                {posts.map((post) => (
                     <Post
                     user={post.user}
                     postImage={post.postImage}
                     likes={post.likes}
                     timestamp={post.timestamp}
                   />
                ))}                
            </div>
            </div>
        <div className="timeline__right">
            <Suggestions/>
        </div>
    </div>
  );
}

export default Timeline;