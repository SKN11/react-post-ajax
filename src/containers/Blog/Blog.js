import React, { Component } from 'react';
import axios from 'axios'
//import axios from '../../axios'
import {Route} from 'react-router-dom'

import Post from '../../components/Post/Post';
import FullPost from './FullPost/FullPost';
import NewPost from './NewPost/NewPost';
import './Blog.css';
import Posts from './Posts/Posts' 

class Blog extends Component {


    



    render () {
        
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><a href ="/new-post">Home</a></li>
                            <li><a href ="/new-post">New Post</a></li>

                        </ul>
                    </nav>

                </header>
                <Posts/>
            </div>
        );
    }
}

export default Blog;