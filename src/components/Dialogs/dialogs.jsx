import Communication from './Communication/communication';
import c from './dialogs.module.scss';

const Dialogs = (props) => {



	return (
		<div className="dialogs">
			<h1>DIALOGS</h1>
			<Communication dialogsPage={props.dialogsPage} />
		</div>
	);
}

export default Dialogs;