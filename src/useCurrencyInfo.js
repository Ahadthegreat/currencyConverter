import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((y) => {
                setData(y[currency] || {}); 
            })
            .catch((error) => {
                console.error('Fetch error:', error);
            });
    }, [currency]);

    console.log(data);
    return data;
}

export default useCurrencyInfo;
