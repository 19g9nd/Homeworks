import './App.css';
import P from './components/P/P';
import Button from './components/ButtonComponent/ButtonComponent';
import Counter from "./components/Counter/Counter";
import {useState} from "react";
function App() {
	// const [count, setCount] = useState(0);
	return (
		<>
			{/*<Button>-</Button>*/}
			{/*<P>0</P>*/}
			{/*<Button>+</Button>*/}
			<Counter></Counter>
		</>
	);
}

export default App;
