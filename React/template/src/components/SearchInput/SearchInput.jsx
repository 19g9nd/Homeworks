import { useState } from "react";
export default function SearchInput({updateResults}) {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e) => {
        const text = e.target.value;// можно еще trim сделать, тогда не будет принимать пробелы
        setInputValue(text);
        updateResults(text); // Передаем введенное значение в родительский компонент
    };

    return (
        <>
        <input
        type="text"
        placeholder="Search"
        value={inputValue}
        onChange={handleInputChange}
        />
        </>
    )
}

