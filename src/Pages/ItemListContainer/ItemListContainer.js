import { products } from "../../data/products";
import { useEffect, useState } from "react";
import ItemList from '../../components/ItemList/ItemList'
import { useParams } from "react-router-dom";

export default function ItemListContainer ({greeting}) {
    const [productList, setProductList] = useState([])
    const { categoryId } = useParams()
    console.log(categoryId)
    const getProducts = new Promise((res, rej) => {
        if(categoryId) {
            const filteredProducts = products.filter((item) => item.category === categoryId)
            setTimeout(() => {
                res(filteredProducts)
            }, 2000)
        } else {
                setTimeout(() => {
                res(products)
            }, 2000)
        }
        
    })

    useEffect(() => {
        getProducts
        .then((response) => {
            setProductList(response)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [categoryId])

    return (
        <section>
            <div className="banner">
                <h1>{greeting}</h1>
            </div>
            <div>
            <ItemList productList={productList}/>
            </div>
        </section>
    )
}