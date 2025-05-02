import axios from "axios";
import { useEffect } from "react";

const Products = () => {
    useEffect (() => {
        const fetchData = async() =>{
            await axios.get('https://fakestoreapi.com/products')
            .then ((res) => console.log (res.data));
        };
        fetchData();
    }, []);
}

export default Products;
