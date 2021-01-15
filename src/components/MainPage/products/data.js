import React, {useState, useEffect} from 'react';

function DataLoader(props) {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("http://localhost:9000/product/get/all/page/" + ((props && props.id) ? props.id : 0))
        .then(response => response.json())
        .then(res => res.content)
        .then(data => setProducts(data))
    }, [])

    return products;
}

export default DataLoader;
