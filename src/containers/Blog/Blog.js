import React, { Component } from 'react';
import axios from 'axios'
//import axios from '../../axios'
import {Route,NavLink, Switch, Redirect} from 'react-router-dom'
import asyncComponent from '../../hoc/asyncComponent'
//import NewPost from './NewPost/NewPost';

import Posts from './Posts/Posts' 
import './Blog.css';

const AsyncNewPost = asyncComponent(()=> {
    return import('./NewPost/NewPost');
});


class Blog extends Component {

    state={
        auth:false,
    }
    
    render () {
        
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink exact
                             to ="/posts/"
                             activeClassName='my-active'
                             activeStyle={{
                                 color:'#fa923f',
                                 textDecoration:'underline'
                             }}>Home</NavLink></li>
                            {/* <li><Link to ={this.props.match.url+"/"}>Home</Link></li>
                             for reative path */} 
                            <li><NavLink to ={{
                                pathname:'/new-post'}}>
                                    New Post
                                    </NavLink></li>

                        </ul>
                    </nav>
                </header>
                 {/*
                 <Route path='/' exact render={() => <Posts/>}/>
                 */}
                <Switch>
                    {/* Guards
                    this.state.auth ? <Route path='/new-post'  component={NewPost} : null />
                    */}
                    {/*<Route path='/new-post'  component={NewPost} />*/}
                    <Route path='/new-post'  component={AsyncNewPost} />
                    <Route path='/posts'  component={Posts} />
                    <Redirect from='/' to='/posts' />
                </Switch>
            </div>
        );
    }
}

export default Blog;