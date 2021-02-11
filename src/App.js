import * as React from 'react';
import Container from '@material-ui/core/Container';
import FormComponent from './components/Form/Form';
import './styles/main.css';

const App = () => {
	return (
		<Container maxWidth="sm">
			<FormComponent/>
		</Container>
	);
};

export default App;
