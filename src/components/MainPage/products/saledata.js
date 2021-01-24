import React, {useState, useEffect} from 'react';

function SaleDataLoader() {
    const saleproduct = [
        // {
        //     id:'1',
        //     name: "CARD MÀN HÌNH Radeon ™ RX VEGA 64 8G - Gigabyte",
        //     image: '/images/ip1.png',
        //     histories: [
        //         {
        //             price: 5500000,
        //             date: "2020-11-09"
        //         },
        //         {
        //             price: 4500000,
        //             date: "2020-11-11"
        //         },
        //         {
        //             price: 5500000,
        //             date: "2020-11-13"
        //         }
        //     ],
        //     url: "https://shopee.vn/CARD-M%C3%80N-H%C3%8CNH-Radeon-%E2%84%A2-RX-VEGA-64-8G-Gigabyte-i.201098428.7907727248",
        //     description: "RX Vega 64: 64 compute units containing 4096 stream processors , 256 texture units and 64 ROPs",
        //     currentPrice: 5500000,
        //     shopeeID: 7907727248,
        //     shopeeShopID: 201098428,
        //     brand: "Gigabyte",
        //     categories: [
        //         {
        //             name: "Máy tính & Laptop",
        //             shopeeCategoryID: 13030
        //         },
        //         {
        //             name: "Linh Kiện Máy Tính",
        //             shopeeCategoryID: 13069
        //         },
        //         {
        //             name: "VGA - Card Màn Hình",
        //             shopeeCategoryID: 13097
        //         }
        //     ],
        //     type: "RX Vega 64"
        // },
        // {
        //     id:'2',
        //     name: "CARD MÀN HÌNH Radeon ™ RX VEGA 64 8G - Gigabyte",
        //     image: '/images/ip1.png',
        //     histories: [
        //         {
        //             price: 5500000,
        //             date: "2020-11-09"
        //         },
        //         {
        //             price: 4500000,
        //             date: "2020-11-11"
        //         },
        //         {
        //             price: 5500000,
        //             date: "2020-11-13"
        //         }
        //     ],
        //     url: "https://shopee.vn/CARD-M%C3%80N-H%C3%8CNH-Radeon-%E2%84%A2-RX-VEGA-64-8G-Gigabyte-i.201098428.7907727248",
        //     description: "RX Vega 64: 64 compute units containing 4096 stream processors , 256 texture units and 64 ROPs",
        //     currentPrice: 5500000,
        //     shopeeID: 7907727248,
        //     shopeeShopID: 201098428,
        //     brand: "Gigabyte",
        //     categories: [
        //         {
        //             name: "Máy tính & Laptop",
        //             shopeeCategoryID: 13030
        //         },
        //         {
        //             name: "Linh Kiện Máy Tính",
        //             shopeeCategoryID: 13069
        //         },
        //         {
        //             name: "VGA - Card Màn Hình",
        //             shopeeCategoryID: 13097
        //         }
        //     ],
        //     type: "RX Vega 64"
        // },
        // {
        //     id:'3',
        //     name: "CARD MÀN HÌNH Radeon ™ RX VEGA 64 8G - Gigabyte",
        //     image: '/images/ip1.png',
        //     histories: [
        //         {
        //             price: 5500000,
        //             date: "2020-11-09"
        //         },
        //         {
        //             price: 4500000,
        //             date: "2020-11-11"
        //         },
        //         {
        //             price: 5500000,
        //             date: "2020-11-13"
        //         }
        //     ],
        //     url: "https://shopee.vn/CARD-M%C3%80N-H%C3%8CNH-Radeon-%E2%84%A2-RX-VEGA-64-8G-Gigabyte-i.201098428.7907727248",
        //     description: "RX Vega 64: 64 compute units containing 4096 stream processors , 256 texture units and 64 ROPs",
        //     currentPrice: 5500000,
        //     shopeeID: 7907727248,
        //     shopeeShopID: 201098428,
        //     brand: "Gigabyte",
        //     categories: [
        //         {
        //             name: "Máy tính & Laptop",
        //             shopeeCategoryID: 13030
        //         },
        //         {
        //             name: "Linh Kiện Máy Tính",
        //             shopeeCategoryID: 13069
        //         },
        //         {
        //             name: "VGA - Card Màn Hình",
        //             shopeeCategoryID: 13097
        //         }
        //     ],
        //     type: "RX Vega 64"
        // },
        // {
        //     id:'4',
        //     name: "CARD MÀN HÌNH Radeon ™ RX VEGA 64 8G - Gigabyte",
        //     image: '/images/ip1.png',
        //     histories: [
        //         {
        //             price: 5500000,
        //             date: "2020-11-09"
        //         },
        //         {
        //             price: 4500000,
        //             date: "2020-11-11"
        //         },
        //         {
        //             price: 5500000,
        //             date: "2020-11-13"
        //         }
        //     ],
        //     url: "https://shopee.vn/CARD-M%C3%80N-H%C3%8CNH-Radeon-%E2%84%A2-RX-VEGA-64-8G-Gigabyte-i.201098428.7907727248",
        //     description: "RX Vega 64: 64 compute units containing 4096 stream processors , 256 texture units and 64 ROPs",
        //     currentPrice: 5500000,
        //     shopeeID: 7907727248,
        //     shopeeShopID: 201098428,
        //     brand: "Gigabyte",
        //     categories: [
        //         {
        //             name: "Máy tính & Laptop",
        //             shopeeCategoryID: 13030
        //         },
        //         {
        //             name: "Linh Kiện Máy Tính",
        //             shopeeCategoryID: 13069
        //         },
        //         {
        //             name: "VGA - Card Màn Hình",
        //             shopeeCategoryID: 13097
        //         }
        //     ],
        //     type: "RX Vega 64"
        // },
        // {
        //     id:'5',
        //     name: "CARD MÀN HÌNH Radeon ™ RX VEGA 64 8G - Gigabyte",
        //     image: '/images/ip1.png',
        //     histories: [
        //         {
        //             price: 5500000,
        //             date: "2020-11-09"
        //         },
        //         {
        //             price: 4500000,
        //             date: "2020-11-11"
        //         },
        //         {
        //             price: 5500000,
        //             date: "2020-11-13"
        //         }
        //     ],
        //     url: "https://shopee.vn/CARD-M%C3%80N-H%C3%8CNH-Radeon-%E2%84%A2-RX-VEGA-64-8G-Gigabyte-i.201098428.7907727248",
        //     description: "RX Vega 64: 64 compute units containing 4096 stream processors , 256 texture units and 64 ROPs",
        //     currentPrice: 5500000,
        //     shopeeID: 7907727248,
        //     shopeeShopID: 201098428,
        //     brand: "Gigabyte",
        //     categories: [
        //         {
        //             name: "Máy tính & Laptop",
        //             shopeeCategoryID: 13030
        //         },
        //         {
        //             name: "Linh Kiện Máy Tính",
        //             shopeeCategoryID: 13069
        //         },
        //         {
        //             name: "VGA - Card Màn Hình",
        //             shopeeCategoryID: 13097
        //         }
        //     ],
        //     type: "RX Vega 64"
        // },
    ]

    return saleproduct;
}

export default SaleDataLoader;
