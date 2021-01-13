import React from 'react'
import DataLoader from './data'
import NewDataLoader from './newdata'
import SaleDataLoader from './saledata'

export default function Filter() {
    const products = DataLoader()
    return (
        <div className="filter_menu">
            <div className="row">
                <span>Filters: </span>
                <select name="category" >
                    <option>All Products</option>
                    {
                        products.map(product => (
                            <option>
                                {product.category}
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
