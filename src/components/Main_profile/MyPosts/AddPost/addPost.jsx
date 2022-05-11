import c from './addPost.module.scss';

const AddPost = (props) => {
    // let loadCash = () => {
    //     alert('rerendered');
    //     props.newPostElement.current.value = props.inputCash;
    // };

    // loadCash();

    let addCash = () => {
        let text = props.newPostElement.current.value;
        props.addPostCash(text);
        // props.addPost(text);
        // props.newPostElement.current.value = '';
    };

    let addPost = () => {
        // let text = props.newPostElement.current.value;
        props.addPost();
        props.newPostElement.current.value = '';
    };

    return (
        <div className={c.add}>
            <input
                type="text"
                value={props.inputCash}
                placeholder="Въебиче-нить"
                className={c.input}
                ref={props.newPostElement}
                onChange={addCash}
                // onBlur={addPost}
            />
            <button onClick={addPost}>add</button>
        </div>
    );
};
export default AddPost;
