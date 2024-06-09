import React from 'react'
import '../Style/cart.css'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import { Container, Row, Col } from 'reactstrap'
import {motion} from 'framer-motion'
import {cartActions} from '../Redux/Slices/cartSlice'
import {useSelector, useDispatch} from 'react-redux';
import { Link } from 'react-router-dom'
export default function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItem)
  const totalAmount = useSelector((state) => state.cart.totalAmount)
  return (
    <Helmet title='Cart'>
      <CommonSection title='Shopping Cart' />
      <section>
      <Container>
        <Row className='w-full flex lg:flex-row flex-col '>
          <div className="lg:w-[70%]">
            {
            cartItems.length === 0 ? (<h2 className='text-center'>No Item added to the cart</h2>) : 
            (
              <table className='table bordered'>
            <thead>
              <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index)=>(
                <Tr item={item} key={index} />
              ))}
            </tbody>
          </table>
            )
          }
          </div>
          <div className="lg:w-[30%]">
            <div className='flex justify-between text-lg'>
              <h6>Subtotal</h6>
              <span className='font-semibold text-xl'>${totalAmount}</span>
            </div>
            <p className='font-medium text-gray-500 mt-2'>taxes and shipping will calculate in checkout</p>
           <div>
            <motion.button whileTap={{scale: 1.2}} className='w-full mt-3 '><Link to='/checkout' className='hover:text-white'>Checkout</Link></motion.button>
            <motion.button whileTap={{scale: 1.2}} className='w-full mt-3'><Link to='/shop' className='hover:text-white'>Continue Shopping</Link></motion.button>

           </div>
          </div>
        </Row>
       </Container>
      </section>
    </Helmet>
  )
}

const Tr = ({item})=> {
  const dispatch = useDispatch();
  const deleteProduct = ()=>{
    dispatch(cartActions.deleteItem(item.id))
  }
  return(
    <tr >
  <td><img className='w-[50px] h-[50px] object-contain' src={item.imgUrl} alt="" /></td>
  <td>{item.productName}</td>
  <td>${item.price}</td>
  <td>${item.quantity}px</td>
  <td><motion.i whileTap={{scale: 1.2}} onClick={deleteProduct} className='ri-delete-bin-line cursor-pointer'></motion.i></td>
</tr>
  )
}
