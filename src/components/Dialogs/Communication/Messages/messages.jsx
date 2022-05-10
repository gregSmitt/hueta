import Message from './Message/message';
import c from './messages.module.scss';

const Messages = ({ messages }) => {

	return (

		< ul className={c.messages} >
			{messages.map(message => <Message message={message} />)}
		</ ul>
	);
}

export default Messages;