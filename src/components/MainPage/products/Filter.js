import React from 'react'
import data from '../products/data'

export default function Filter() {
    return (
        <div className="filter_menu">
            <div className="row">
                <span>Filters: </span>
                <select name="category" >
                    <option>All Products</option>
                    {
                        data.products.map(product => (
                            <option value={product.category}>
                                {product.name}
                            </option>
                        ))
                    }
                </select>
            </div>

            <input type="text" placeholder="Enter your search!"/>

            <div className="row sort">
                <span>Sort By: </span>
                <select>
                    <option value=''>Newest</option>
                    <option value='sort=oldest'>Oldest</option>
                    <option value='sort=-sold'>Best sales</option>
                    <option value='sort=-price'>Price: Hight-Low</option>
                    <option value='sort=price'>Price: Low-Hight</option>
                </select>
            </div>
        </div>
    )
}
