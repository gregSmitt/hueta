import c from './addPost.module.scss';

const AddPost = (props) => {

	// let newPostElement = React.createRef();

	let addPost = () => {
		let text = props.newPostElement.current.value;
		alert(text);
	}

	return (
		<div className={c.add}>
			{/* <h3>Write some bullshit</h3> */}
			<input type="text" placeholder="Въебиче-нить" className={c.input} ref={props.newPostElement} onBlur={addPost} />
		</div>
	);
}
export default AddPost;