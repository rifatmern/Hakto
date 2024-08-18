import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

let apiData = createContext()

console.log(apiData);


const Contextapi = ({ children }) => {

    let [info, setInfo] = useState([]);

    let getdata = () => axios.get("https://dummyjson.com/products").then((response) => {
        setInfo(response.data.products)
    })

    useEffect(() => {
        getdata()
    }, []);

    return (
        <>
            <apiData.Provider value={info}>{children}</apiData.Provider>
        </>
    )
}

export default {Contextapi, apiData}