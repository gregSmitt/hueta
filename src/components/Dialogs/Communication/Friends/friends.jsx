import Friend from './Friend/friend';
import c from './friends.module.scss';

const Friends = (props) => {


	let dialogsElements = props.freiendList.map(dialog => <Friend name={dialog.name} id={dialog.id} />)

	return (
		<ul className={c.friends}>
			{dialogsElements}
		</ul>
	);
}

export default Friends;