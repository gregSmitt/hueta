import c from './post.module.scss';

const Post = (props) => {
	return (
		<div className={c.post}>
			<div className={c.avatar}>
				<img src="https://cdn.fishki.net/upload/post/2016/11/19/2140537/57e499b00d825c1a89bfaaf5b4d6df72.jpg" alt="hui"></img>
			</div>
			<p className={c.text}>{props.text}</p>
			<button className={c.like}>Like {props.likesCount}</button>
		</div>
	);
}
export default Post;