import React, { useEffect, useState } from "react";
import * as signalR from "@microsoft/signalr";

const StockPrices = () => {
    const [stocks, setStocks] = useState({});

    useEffect(() => {
        const connection = new signalR.HubConnectionBuilder()
            .withUrl("http://localhost:5030/stockHub")
            .withAutomaticReconnect()
            .build();

        connection.start()
            .then(() => {
                console.log("Connected to Stock Hub");
                // Request stock data after successful connection
                connection.invoke("FetchStocks").catch(err => console.error("Error fetching stocks: ", err));
            })
            .catch(err => console.error("Connection failed: ", err));

        connection.on("ReceiveStockUpdate", (stockName, price) => {
            setStocks(prevStocks => ({
                ...prevStocks,
                [stockName]: price
            }));
        });

        return () => {
            connection.stop();
        };
    }, []);

    return (
        <div>
            <h2>📈 Live Stock Prices</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Stock</th>
                        <th>Price ($)</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(stocks).map(stock => (
                        <tr key={stock}>
                            <td>{stock}</td>
                            <td>{stocks[stock]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StockPrices;
