import Information from './Information/information';
import c from './message.module.scss';

const Message = (props) => {
	return (
		<li className={c.message}>
			<Information imageUrl={props.message.url} name={props.message.name} />
			<p className={c.text}>{props.message.text}</p>
		</li>
	);
}

export default Message;