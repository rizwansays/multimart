import React from "react";
import "./footer.css";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/eco-logo.png";
import { motion } from "framer-motion";
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer ">
      <Container className="w-full">
        <div className="w-full  pb-4 flex flex-col lg:flex-row flex-wrap  justify-center  ">
          <div className="lg:w-[35%] mb-4 lg:mb-0 lg:pr-2">
            <div className="logo flex items-center  gap-x-1 ">
              <img
                className="w-[1.5rem] h-[1.5rem] invert"
                src={Logo}
                alt="logo"
              />
              <h1 className="font-semibold text-[1.2rem] col-h1 text-white">
                Multimart
              </h1>
            </div>
            <p className="mt-4 footer-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              impedit sequi obcaecati expedita officiis
            </p>
          </div>

          <div className="lg:w-[20%] mb-4 lg:mb-0">
            <div className="footer_quick-links ">
              <h4 className="quick-links-title ">Top Categories</h4>
              <div className="mb-3 footer-link">
                <div className="ps-0 border-0 move-left">
                  <Link
                    className="hover:pl-3 hover:text-white transition-all"
                    to="#"
                  >
                    Mobile Phones
                  </Link>
                </div>
                <div className="ps-0 border-0">
                  <Link
                    className="hover:pl-3 hover:text-white transition-all"
                    to="#"
                  >
                    Modern Sofa
                  </Link>
                </div>
                <div className="ps-0 border-0">
                  <Link
                    className="hover:pl-3 hover:text-white transition-all"
                    to="#"
                  >
                    Arm Chair
                  </Link>
                </div>
                <div className="ps-0 border-0">
                  <Link
                    className="hover:pl-3 hover:text-white transition-all"
                    to="#"
                  >
                    Smart Watches
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className='lg:w-[15%] mb-4 lg:mb-0'>
        <div className="footer_quick-links ">
            <h4 className="quick-links-title ">
              Useful Links
            </h4>
            <div className='mb-3 footer-link'>
              <div className='ps-0 border-0'>
                <Link className='hover:pl-3 hover:text-white transition-all' to='/shop'>Shop</Link>
              </div>
              <div className='ps-0 border-0'>
                <Link className='hover:pl-3 hover:text-white transition-all' to='/cart'>Cart</Link>
              </div>
              <div className='ps-0 border-0'>
                <Link className='hover:pl-3 hover:text-white transition-all' to='/login'>Login</Link>
              </div>
              <div className='ps-0 border-0'>
                <Link className='hover:pl-3 hover:text-white transition-all' to='/privacypolicy'>Privacy Policy</Link>
              </div>
            </div>
          </div>
        </div>
         
        <div className='lg:w-[25%] mb-4 lg:mb-0'>
        <div className="footer_quick-links ">
            <h4 className="quick-links-title ">
              Contact
            </h4>
            <div className='mb-3 footer-link '>
              <div className='ps-0 border-0 flex gap-3'>
                <span><i className='ri-map-pin-line text-lg'></i></span>
                <p>123 Abc Lodhran Pakistan</p>
              </div>
              <div className='ps-0 border-0 flex gap-3'>
              <span><i className='ri-phone-line text-lg'></i></span>
                <p>+92301234567</p>
              </div>
              <div className='ps-0 border-0 flex gap-3'>
              <span><i className='ri-mail-line text-lg'></i></span>
                <p>example@gmail.com</p>
              </div>
              
            </div>
          </div>
        </div>
        </div>

        <Row className="w-full  text-center -mb-32  pb-3">
          <p className="copyright">
          © Copyright {year} developed by Muhammad Rizwan. All rights reserved.
          </p>
        </Row>
      </Container>
    </footer>
  );
}
