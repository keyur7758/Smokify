import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import { DeleteCart, addToCart, decCart, incCart } from './cartSlice';
import '../cart/Cart.css'

export default function Cart() {
    const cart = useSelector(state => state.Cart)
    const dispatch = useDispatch()
    const [form, setForm] = useState(false)
    const [showCart, setShowCart] = useState(true)
    const [order, setOrder] = useState(false)
    return (
        <>
            <section class="h-100 gradient-custom cart-sec">
                <div className='cg-area'>
                    <div className='cg-box'>
                        <div className='cg-detail'>
                            <h1 className='main-title'>ITS TIME TO SHOW </h1>
                        </div>
                    </div>
                </div>
                <div class="container ">
                    {
                        showCart &&
                        <div className="row g-0 d-flex justify-content-center my-4">
                            <div className="col-md-8">
                                <div className="card mb-4">
                                    <div className="card-header py-3">
                                        <h5 className="mb-0">Cart - {cart.length} items</h5>
                                    </div>

                                    {cart?.map((data) => (
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                                                    <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                                                        <img src={data.image} alt="Blue Jeans Jacket" />
                                                        <a href="#!">
                                                            <div className="mask" style={{ background: "rgba(251, 251, 251, 0.2)" }}></div>
                                                        </a>
                                                    </div>
                                                </div>

                                                <div className="col-lg-5 col-md-12 mb-4 mb-lg-0">
                                                    <p className="cartitem-title"><strong>{data.title}</strong></p>
                                                    <p className="cartitem-text">{data.text}</p>

                                                    <div className="d-flex mb-4 cart-plus-minus">
                                                        <button className="btn btn-primary px-3 me-2 cal-btn" onClick={() => dispatch(decCart(data))}
                                                        >
                                                            <i className="fas fa-minus"></i>
                                                        </button>
                                                        <h6 className="cart-quantity">{data.quantity}</h6>
                                                        <button className="btn btn-primary px-3 ms-2 cal-btn"
                                                            onClick={() => dispatch(addToCart(data))}>
                                                            <i className="fas fa-plus"></i>
                                                        </button>
                                                    </div>

                                                    <p className="text-start">
                                                        <strong className="cart-price">${data.price * data.quantity}.00</strong>
                                                    </p>
                                                </div>

                                                <div className="col-lg-4 col-md-12 mb-4 mb-lg-0 cart-trash">
                                                    <button type="button" className="btn btn-danger btn-sm mb-2" data-mdb-toggle="tooltip"
                                                        title="Remove item" onClick={() => dispatch(DeleteCart(data.id))}>
                                                        <i className="fas fa-trash"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <hr className="my-4" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 deliver-date">
                                    <div className="card-body">
                                        <p><strong>Expected shipping delivery</strong></p>
                                        <p className="mb-0">After Orders Two Days</p>
                                    </div>
                                </div>

                                <div className="card mb-4 deliver-date">
                                    <div className="card-header py-3">
                                        <h5 className="mb-0">Summary</h5>
                                    </div>
                                    <div className="card-body">
                                        <ul className="list-group list-group-flush">
                                            <li
                                                className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                                Products
                                                <span>{cart.reduce((acc, data) => data.quantity + acc, 0)}</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                                Shipping
                                                <span>Gratis</span>
                                            </li>
                                            <li
                                                className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                                <div>
                                                    <strong>Total amount</strong>
                                                    <strong>
                                                        <p className="mb-0">(including VAT)</p>
                                                    </strong>
                                                </div>
                                                <span><strong>${cart.reduce((acc, data) => data.price * data.quantity + acc, 0)}.00</strong></span>
                                            </li>
                                        </ul>

                                        <button type="button" className="btn btn-dark btn-lg btn-block check-out-btn" onClick={() => { setShowCart(false); setForm(true) }}>
                                            Go to checkout
                                        </button>
                                    </div>
                                </div>
                                {/* 
                                <div className="card mb-4 mb-lg-0 deliver-date">
                                    <div className="card-body">
                                        <p><strong>We accept</strong></p>
                                        <img className="me-2" width="45px"
                                            src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                                            alt="Visa" />
                                        <img className="me-2" width="45px"
                                            src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                                            alt="American Express" />
                                        <img className="me-2" width="45px"
                                            src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                                            alt="Mastercard" />
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    }
                    {form &&
                        <>
                            <div className='from-area'>
                                <div className="form-box" >
                                    <div className="customer-detail">
                                        <h2>Fill Your Details Here</h2>
                                        <form>
                                            <input id="name-input" type="text" placeholder="Firstname" />
                                            <input type="text" placeholder="Lastname" /><br />
                                            <input id="name-input" type="text" placeholder="Phone" />
                                            <input type="text" placeholder="Postal Code" /><br />
                                            <input id="name-input" type="text" placeholder="Email" />
                                            <input type="text" placeholder="City" /><br />
                                            <input className="input-subject" type="text" id="message-box" placeholder="Address" />
                                            <button type="submit" className="btn btn-dark btn-lg btn-block btn-pay" onClick={() => { setOrder(true); setForm(false) }}>
                                                Pay / Submit
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </>

                    }
                    {
                        order &&
                        <div className='thanks-area'>
                            <div className='thanks-box'>
                                <i className="fa-solid fa-check"></i> <span>Thank you. Your order has been received.</span>
                            </div>
                            <div className='row g-0 row-cols-lg-5 row-cols-md-3 row-cols-sm-3 row-cols-2'>
                                <div className='col'>
                                    <div className='order-box'>
                                        <p>ORDER NUMBER:</p>
                                        <h4>XRQ4567</h4>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className='order-box'>
                                        <p>DATE:</p>
                                        <h4>December 26, 2023</h4>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className='order-box'>
                                        <p>EMAIL:</p>
                                        <h4>customer@.com</h4>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className='order-box'>
                                        <p>TOTAL:</p>
                                        <h4>${cart.reduce((acc, data) => data.price * data.quantity + acc, 0)}.00</h4>
                                    </div>
                                </div>
                                <div className='col last-col'>
                                    <div className='order-box'>
                                        <p>PAYMENT METHOD:</p>
                                        <h4>cash on delivery</h4>
                                    </div>
                                </div>

                            </div>
                            <p>Pay with cash upon delivery.</p>
                            <div className='order-btns'>
                                <Button variant="dark" className="login-btn" onClick={() => { setShowCart(true); setOrder(false) }}>
                                    Back
                                </Button>
                            </div>
                        </div>
                    }
                </div>
            </section>
        </>
    )
}
