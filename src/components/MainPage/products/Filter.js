import React, { useState, useEffect } from 'react'
import DataLoader from './data'
import NewDataLoader from './newdata'
import SaleDataLoader from './saledata'

export default function Filter(props) {
    const [sort, setSort] = useState('relevance');
    const [searchTerm, setSearchTerm] = useState('');

    const form_submit = (e) => {
        // e.preventDefault();

        // fetch("http://localhost:9000/search?keywords=" + searchTerm + "&by=" + sort)
        // .then(res => res.json())
        // .then(json => {
        //     console.log(json);
        //     return json;
        // })
        // .then(json => json.content)
        // .then(content => props.onSubmit(content))
    }

    return (
        <form className="filter_menu" onSubmit={form_submit}>
            <div className="row">
                <span>Filters: </span>
                <select name="category" >
                    <option>All Products</option>
                    {/* {
                        products.map(product => (
                            <option>
                                {product.category}
                            </option>
                        ))
                    } */}
                </select>
            </div>

            <input type="text" placeholder="Enter your search!" value={searchTerm} onChange={(e) => {
                setSearchTerm(e.target.value);
            }} />

            <div className="row sort">
                <span>Sort By: </span>
                <select value={sort} onChange={(e) => { setSort(e.target.value) }}>
                    <option value='relevance'>Relevance</option>
                    <option value='rating'>Rating</option>
                    <option value='currentPrice'>Price</option>
                    {/* <option value='sort=-price'>Price: Hight-Low</option>
                    <option value='sort=price'>Price: Low-Hight</option> */}
                </select>
            </div>

            <button type="submit" value="Search" className="btn_search">Search</button>
        </form>
    )
}
