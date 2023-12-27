import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';

import $ from 'jquery'

import '../navbar/Header.css';


export default function Header() {
  const cart = useSelector(state => state.Cart)
  const [alertClass, setalertClass] = useState("");
  const [msg, setmsg] = useState("");
  const [item, setItem] = useState(false)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const Login = () => {
    const username = $("#username").val()
    const password = $("#password").val()
    if (username !== "" && password !== "") {
      setalertClass('success')
      // setmsg("login successfully")
      localStorage.setItem("username", username)
      localStorage.setItem("password", password)
      setItem(true)
      handleClose()
      setmsg("")
      setalertClass('normal')

    } else if(username == 0){
      setalertClass('warning')
      setmsg("please enter Username")
    } else if(password == 0) {
      setalertClass('danger')
      setmsg("please enter password")
      // e.preventDefault;
    }   
  }
  function Logout() {
    localStorage.removeItem("username")
    setItem(false)
  }
  function ClaerInput() {
    $("#search").val("")

  }
  return (
    <>
      <div className='login-area'>
        <Modal show={show} onHide={handleClose}>
          {/* <div className='login-close'>
            <i className="fa-solid fa-xmark " style={{ color: "#000000", }} onClick={handleClose}></i>
          </div> */}
          <Modal.Header closeButton>
            <Modal.Title id='img-logo'> <h1 className='login-title'>Smokify</h1></Modal.Title>
            <Modal.Title> <br /></Modal.Title>
          </Modal.Header>
          <Modal.Body>
          {
                (alertClass.length > 0) ? (
                  <Alert key={alertClass} variant={alertClass}>
                    {msg}
                  </Alert>
                ) : ""
              }
            <div className='input-area'>
              <label>Username</label><br />
              <input type='text' id='username' className='form-control login-input' /><br />
              <label>Password</label><br />
              <input type='password' id='password' className='form-control login-input' /><br />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button className='btn-second login-btn' variant="dark" onClick={() => { Login() }}>
              Login
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div className='navbar-area'>
            <div className='row'>
              <div className='col-md-4 col-sm-4 col-4'>
                <div className='nav-box'>
                  <Link to="/">
                    <h2>Smokify</h2>
                  </Link>
                </div>
              </div>
              <div className='col-md-4 col-sm-4 col-4 nnn' ></div>

              <div className='col-md-2 col-sm-2 col-4'>
                <div className='nav-shop'>
                  <Link to="/cart">
                    <i class="fa-solid fa-bag-shopping"><sup>{cart.length}</sup></i>
                  </Link>
                </div>
              </div>
              <div className='col-sm-2 col-md-2 col-4 login-nav-btn'>
                <div className='nav-login'>
                {
                item ?
                  <div className='get-item'>
                    <h6 className="login-btn2" >Hey,{localStorage.getItem("username")}</h6>
                    <Button className="login-btn1 login-btn" variant="dark" onClick={() => { Logout() }}>
                      Logout
                    </Button>
                  </div>
                  :
                  <Button className="login-btn1 login-btn" variant="dark" onClick={() => { handleShow();ClaerInput()}}>
                    Login
                  </Button>
              }

  
                </div>
              </div>
            </div>
      </div>
    </>
  )
}
