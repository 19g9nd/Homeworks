import './App.css';
import {useState} from "react";
import SearchInput from "./components/SearchInput/SearchInput";
import Results from "./components/Results/Results";
import Result from "./components/Result/Result";
function App() {
	const data = ['1', '2', '11', '22','3'];
	const [searchText, setSearchText] = useState('');
	const updateResults = (text) => {
		setSearchText(text);
	};

	return (
		<>

			<SearchInput updateResults={updateResults}/>
				<Result value={<Results data={data} inputValue={searchText}/>}></Result>
			{/*можно и без result, но в условии было 3 компоненты*/}
				{/*<Results data={data} inputValue={searchText}/>*/}
		</>
	);
}

export default App;
