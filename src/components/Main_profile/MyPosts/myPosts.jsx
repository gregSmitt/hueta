import c from './myPosts.module.css';
import Post from './Post/post.jsx';
import AddPost from './AddPost/addPost.jsx';


const MyPosts = (props) => {


	let postsElements = props.profilePage.posts.map(post => <Post id={post.id} text={post.text} likesCount={post.likesCount} />)




	return (
		<div className={c.main}>
			<h2 className={c.name}>My posts</h2>
			<AddPost newPostElement={props.profilePage.newPostElement} />
			<div className={c.posts}>
				{postsElements}
			</div>
		</div>
	);
}
export default MyPosts;