import Result from "../Result/Result";

export default function Results({ data, inputValue }) {
    // Фильтруем данные на основе введенного текста
    const filteredData = data.filter(item => item.includes(inputValue));
    return (
        <>
            {filteredData.length >0 ? (
                filteredData.map((value, index) => (
                <Result key={index} value={value} />
            ))
            ):(
                <p>Nothing found</p>
            )}
        </>
    )
}

