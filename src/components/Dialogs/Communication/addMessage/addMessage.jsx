import c from './addMessage.module.scss';
import React from 'react';

const AddMessage = (props) => {

	let messageInput = React.createRef();

	let addMessage = () => {
		let text = messageInput.current.value;
		alert(text);
	}

	return (
		<div className={c.addMessage}>
			<textarea placeholder='Отправь пидорасу хуйню...' type="text" className={c.input} ref={messageInput} />
			{/* <p className={c.placeholder}>Отправь пидорасу хуйню</p> */}
			<button className={c.submit} onClick={addMessage}>Отправить</button>
		</div>
	);
}

export default AddMessage;