import { Route, Routes } from 'react-router-dom';
import AddMessage from './addMessage/addMessage';
import c from './communication.module.scss';
import Friends from './Friends/friends';
import Messages from './Messages/messages';

const Communication = (props) => {

	return (
		<div className={c.communication}>
			<Friends freiendList={props.dialogsPage.freiends} />
			<div className={c.col}>
				<Routes>
					<Route path="/" element={<Messages messages={props.dialogsPage.dialogs[1]} />} />
					<Route path="1" element={<Messages messages={props.dialogsPage.dialogs[1]} />} />
					<Route path="4" element={<Messages messages={props.dialogsPage.dialogs[4]} />} />
				</Routes>
				<AddMessage />
			</div>
		</div>
	);
}

export default Communication;