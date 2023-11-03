import './App.css';
import P from './components/P/P';
import Button from './components/ButtonComponent/ButtonComponent';
import Counter from "./components/Counter/Counter";
import {useState} from "react";
function App() {
	const [count, setCount] = useState(0);

	function incrementCount() {
		setCount(count + 1);
	}

	function decrementCount() {
		setCount(count - 1);
	}

	return (
		<>
			<Button onClick={decrementCount}>-</Button>
			<P>{count}</P>
			<Button onClick={incrementCount}>+</Button>

		</>
	);
}

export default App;
