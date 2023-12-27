import { useDispatch, useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addToCart } from '../cart/cartSlice';
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../product/Products.css'

export default function Products() {
    const dispatch = useDispatch()
    const [Data, setData] = useState()
    const [filter, setFilter] = useState()

    useEffect(() => {
        FetchApiData()
    }, [])

    const FetchApiData = () => {
        axios.get("https://fakestoreapi.com/products")
            .then((response) => {
                const dataWithQuantity = response.data.map(item => ({ ...item, quantity: 1 }));
                setData(dataWithQuantity)
                setFilter(dataWithQuantity)
            })
    }
    const splitstring = (Keyur, no) => {
        if (Keyur.length > 0) {
            Keyur = Keyur.substring(0, no)
            Keyur += "..."

            return Keyur;
        }
        else {
            return Keyur;
        }
    }

    const filterProduct = (category) => {
        const updateList = Data.filter((x) => x.category === category);
        setFilter(updateList);
    }

    if (!filter) return null
    return (
        <>
            <div className='container'>
                <div className='button-box'>
               <Button variant="dark" className='catgory-btn' onClick={() => setFilter(Data)}>All</Button> 
                <Button variant="dark" className='catgory-btn' onClick={() => filterProduct("women's clothing")}>Women</Button>
                <Button variant="dark" className='catgory-btn' onClick={() => filterProduct("men's clothing")}>Men</Button>
                <Button variant="dark" className='catgory-btn' onClick={() => filterProduct("jewelery")}>Jewelery</Button>
                <Button variant="dark" className='catgory-btn' onClick={() => filterProduct("electronics")}>Electronics</Button>
                </div>
                <div className='row g-2  row-cols-lg-4  row-cols-xl-5 row-cols-md-3 row-cols-sm-2 row-cols-2  '>
                    {
                        filter?.map((item) => (
                            <div className='col'>
                                <Card >
                                    <div className='card-box'>
                                        <Card.Img variant="top" src={item.image} />
                                    </div>
                                    <Card.Body>
                                        {/* <h6>{item.category}</h6> */}
                                        <Card.Title>{splitstring(item.title, 20)}</Card.Title>
                                        <Card.Text>
                                            ${item.price}
                                        </Card.Text>
                                        <Button variant="outline-dark addtocart" onClick={() => dispatch(addToCart(item))}>Add To Carts</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
