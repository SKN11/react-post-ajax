import React,{ Component } from "react";
import axios from '../../../axios'

import Post from '../../../components/Post/Post'
import classes from './Posts.module.css'
import  './Posts.css'




class Posts extends Component {

    
    state = {
        posts:[]
        //selectedPostId:null,
       // error:false
    }

    componentDidMount(){
        axios.get('/posts')
        .then((response) =>{
            const paginatedPost = response.data.slice(0,4);
            const updatedPost = paginatedPost.map((post) => {
               return {
                    ...post,
                    author : 'SKY'
                }
            });
            
            this.setState({posts:updatedPost})
            console.log(response);
        } )
        .catch( error => {
           // this.setState({error:true});
            console.log(error);
        })

    }

    selectedPostHandler = (id) => (
        this.setState({
            selectedPostId:id
        })
    )

    render () {
        
    let posts = <p style={{textAlign:'center'}}>Something went Worng</p>
        if(!this.state.error)
         {
             posts = this.state.posts.map(
             (post) => <Post 
                key={post.id} 
                title={post.title} 
                author = {post.author}
                clicked={()=> this.selectedPostHandler(post.id)}  />
        );

         }

         return (
    
            <section className="Posts">
                    {posts}
                </section>

         );
    }
}


export default Posts;