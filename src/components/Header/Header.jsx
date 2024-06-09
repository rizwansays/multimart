import React from "react";
import "./header.css";
import Logo from "../../assets/images/eco-logo.png";
import UserIcon from "../../assets/images/user-icon.png";
import { NavLink, useNavigate } from "react-router-dom";
import { Container, Row } from "reactstrap";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';
import useAuth from "../../customhooks/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase.config";
import { toast } from "react-toastify";
const nav__link = [
  {
    path: "home",
    display: "Home",
  },
  {
    path: "shop",
    display: "Shop",
  },
  {
    path: "cart",
    display: "Cart",
  },
];
export default function Header() {
   const navigate = useNavigate();
   const profileActionRef = useRef(null)
  const headerRef = useRef(null)
  const menuRef = useRef(null)
  const {currentUser} = useAuth()
  const totalQuantity = useSelector(state => state.cart.totalQuantity)

  const stickyHeader = ()=> {
    window.addEventListener('scroll', ()=>{
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('sticky_header')
      } else {
        headerRef.current.classList.remove('sticky_header')
      }
    })
  }

  useEffect(()=>{
    stickyHeader();
    return () => window.removeEventListener('scroll', stickyHeader);
  });

  const menuToggle = ()=> menuRef.current.classList.toggle('active-menu')

  const navigateToCart = ()=> {
    navigate('/cart');

  }
  const logout = ()=>{
    signOut(auth).then(()=>{
      toast.success('Logged Out')
      navigate('/home')
    }).catch(err=>{
      toast.error(err.message)
    })
  }
  const profileToggleAction = ()=> profileActionRef.current.classList.toggle('hidden')
  return (
    <header ref={headerRef} className="header w-full h-[70px] leading-5 flex items-center">
      <Container>
        <Row>
          <div className="nav__wrapper flex items-center justify-between">
            <Link to='home' className="logo flex items-center justify-center gap-x-1 cursor-pointer">
              <img className="w-[1.5rem] h-[1.5rem]" src={Logo} alt="logo" />

              <h1 className="font-bold text-[1.2rem] col-h1">Multimart</h1>
            </Link>

            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <ul className="menu flex items-center gap-5 mb-0 ">
                {nav__link.map((item, index) => (
                  <li className="nav__item cursor-pointer" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "nav__active" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav__icons flex items-center  text-xl gap-4 ">
              <span className="fav__icon cursor-pointer">
                <i className="ri-heart-line "></i>
                <span className="badge">2</span>
              </span>
              <span className="cart__icon cursor-pointer" onClick={navigateToCart}>
                <i className="ri-shopping-bag-line"></i>
                <span className="badge">{totalQuantity}</span>
              </span>
              <div className="cursor-pointer profile flex flex-col items-center justify-center relative" >
                <motion.img
                  whileTap={{ scale: 1.2 }}
                  className="w-[30px] h-[30px] rounded-full"
                  src={currentUser ? currentUser.photoURL : UserIcon}
                  alt="user"
                  onClick={profileToggleAction}
                />
                <div className={`profile_actions z-40 bg-[#0a1d37] p-2 absolute top-8 duration-500 text-white rounded-md ${profileToggleAction ? 'hidden' : 'flex'}`} ref={profileActionRef} onClick={profileToggleAction}>
                  {
                    currentUser ? <span onClick={logout} className="text-sm">Logout</span> : <div className="flex flex-col text-sm items-center justify-center gap-2 font-medium ">
                      <Link to='/login'>Login</Link>
                      <Link to='/signup'>Signup</Link>
                    </div>
                  }
                </div>
              </div>
              <div className="mobile__menu md:hidden flex ">
              <span onClick={menuToggle} className="ri-menu-line text-xl cursor-pointer"></span>
            </div>
            </div>

            
          </div>
        </Row>
      </Container>
    </header>
  );
}
