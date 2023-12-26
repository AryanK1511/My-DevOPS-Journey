"use client";

import React, { useState, useEffect } from "react";
import Error from "next/error";
import "./counter-styles.css";

// Makes an API call to the backend to see how many times the page has been visited
async function getData() {
    const res = await fetch('http://localhost:8000/api/visits');
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }
     
    return res.json();
}

// Displays the visitor count data to the user
const Counter = () => {
    const [count, setCount] = useState(0);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getData();
                setCount(data);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchData();
    }, []); // pass an empty dependency array to useEffect to avoid unnecessary re-renders

    if (error) {
        // handle the error here or render an error component
        return <Error statusCode={500} title={error} />;
    }

    return (
        <h1 className="counter-heading">{count}</h1>
    );
};

export default Counter;