import React,{Component} from 'react';
import './Post.css';
import {withRouter} from 'react-router-dom'

//@withRouter
 class Post extends Component {
    render(){
    console.log(this.props); //to show route props
    return(
    <article className="Post" onClick={this.props.clicked}>
        <h1>{this.props.title}</h1>
        <div className="Info">
            <div className="Author">{this.props.author}</div>
        </div>
    </article>)
    }
}



//export default Post;
export default withRouter(Post); //pas histor and route props to its tree
