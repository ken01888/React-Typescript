import * as React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Chirps from '../components/Chirps'
import Info from '../components/Info'

const App: React.FC<IAppProps> = (props) => {

   


    return(
		<BrowserRouter>
		<Switch>
			<Route exact path = '/' component={Chirps} />
			<Route exact path = '/:id/info' component={Info} />
		</Switch>
		</BrowserRouter>
    );
}


export default App;
interface IAppProps {}


