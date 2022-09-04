import ProductItem from "./ProductsItem";
import {useState, useEffect} from "react";
import axios from "axios";


const ProductList = () => {
    const [products, setProducts] = useState([])


    // function getData() {
    //     let products = []
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(response => response.json())
    //         .then(data=> {
    //             setProducts(data)
    //             const date = new Date()
    //             console.log(date)
    //         })
    // }

    const getData = () => {
        let products = []
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((er) => console.log(er));

    }

    // function getAxios() {
    //     axios.get('https://jsonplaceholder.typicode.com/users')
    //         .then(response => setProducts(response.data))
    // }
    //
    //
    // useEffect(getAxios, [])


    useEffect(getData, [])

    return (
        <div>
            <h1>Список товаров</h1>
            {products.map(
                product => <ProductItem
                    item={product}
                    key={product.id}
                />
            )}
        </div>
    )
}

export default ProductList;
