import React from 'react'
import { Container, Row, Col, Form, FormGroup} from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import '../Style/checkout.css'
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'
export default function Checkout() {
  const totalQty = useSelector( state=> state.cart.totalQuantity)
  const totalAmount = useSelector( state=> state.cart.totalAmount)
  return (
    <Helmet title= 'Checkout'>
      <CommonSection title='Checkout' />
      <section>
        <Container>
          <Row className='w-full flex lg:flex-row flex-col '>
            <div className='lg:w-[60%]'>
               <h6 className='mb-4 font-medium text-lg'>Billing Information</h6>
               <Form className='w-full'>
               <FormGroup className='w-full'>
                <input className='border outline-none py-1 px-2 rounded w-full ' type="text" placeholder='Enter your name' />
               </FormGroup>
               <FormGroup>
                <input className='border outline-none py-1 px-2 rounded w-full ' type="email" placeholder='Enter your email' />
               </FormGroup>
               <FormGroup>
                <input className='border outline-none py-1 px-2 rounded w-full ' type="number" placeholder='Phone number' />
               </FormGroup>
               <FormGroup>
                <input className='border outline-none py-1 px-2 rounded w-full ' type="text" placeholder='Street address' />
               </FormGroup>
               <FormGroup>
                <input className='border outline-none py-1 px-2 rounded w-full ' type="text" placeholder='City' />
               </FormGroup>
               <FormGroup>
                <input className='border outline-none py-1 px-2 rounded w-full ' type="number" placeholder='Postal code' />
               </FormGroup>
               <FormGroup>
                <input className='border outline-none py-1 px-2 rounded w-full ' type="text" placeholder='Country' />
               </FormGroup>
               </Form>
            </div>
            <div className='lg:w-[40%]'>
             <div className="checkout-cart p-[20px]  text-white rounded w-full">
              <h6>Total Qty: <span>{totalQty} items</span></h6>
              <h6>Subtotal: <span>${totalAmount}</span></h6>
              <h6><span>Shipping: <br /> Free Shipping </span>   <span>$0</span></h6>
              
              <h4 className='py-3 text-lg font-medium border-t'>Total Cost:  <span>${totalAmount}</span></h4>
              <motion.button whileTap={{scale: 1.2}} className='w-full bg-white text-black'><h1 className='hover:text-black font-medium text-[20px]'>Place an order</h1></motion.button>
             </div>
             
            </div>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}
