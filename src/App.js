import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import Services from './pages/Services';
import Social from './pages/Social';
import Contact from './pages/Contact';
function App() {
	return (
		<>
			<Navbar />
			<Router>
				<Switch>
					<Route path="/" component={Home} exact />	
					<Route path="/services" component={Services} />
					<Route path="/social" component={Social} />
					<Route path="/contact" component={Contact} />
				</Switch>
			</Router>
		</>
	);
}

export default App;
