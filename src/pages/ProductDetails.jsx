import React, { useRef, useState, useEffect } from 'react'
import { Container, Row, Col} from 'reactstrap';
import { useParams } from 'react-router-dom';
import products from '../assets/data/products';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import {motion} from 'framer-motion'
import '../Style/productDetails.css'
import ProductList from '../components/UI/ProductList';
import {useDispatch} from 'react-redux';
import { cartActions } from '../Redux/Slices/cartSlice';
import {toast} from 'react-toastify';
export default function ProductDetails() {
  const [tab, setTab] = useState('desc');
  const [rating, setRating] = useState(null)
  const {id} = useParams()
  const reviewUser = useRef('');
  const reviewMsg = useRef('');
  const dispatch = useDispatch();
  const product = products.find(item => item.id === id)
  const {imgUrl, productName, price, avgRating, reviews, description, shortDesc, category} = product;

  const relatedProducts = products.filter(item=> item.category === category)

  const handleSubmit = (e)=> {
    e.preventDefault();
    const reviewUserName = reviewUser.current.value;
    const reviewUserMsg = reviewMsg.current.value;

    const reviewObj = {
      userName: reviewUserName,
      text: reviewUserMsg,
      rating,
    }
    toast.success('Review Submitted');
  }

  const addToCart = ()=> {
    dispatch(cartActions.addItem({
      id,
      img: imgUrl,
      productName,
      price,

    }))
    toast.success('Product add Successfully')
  }

  useEffect(()=>{
    window.scrollTo(0, 0)
  }, [product])

  
  return (
    <Helmet title = {productName}>
    <CommonSection title = {productName} />

    <section className='w-full'>
      <Container>
       <Row className='flex-col md:flex-row'>
        <div className='md:w-[50%]'>
           <img src={imgUrl} alt="" />
        </div>
        <div className='md:w-[50%]'>
         <div className="product_details">
          <h2 className='font-medium'>{productName}</h2>
          <div className="product_rating flex gap-3 mt-2">
            <div className=''>
              <span><i className='ri-star-s-fill '></i></span>
              <span><i className='ri-star-s-fill'></i></span>
              <span><i className='ri-star-s-fill'></i></span>
              <span><i className='ri-star-s-fill'></i></span>
              <span><i className='ri-star-half-s-line'></i></span>
            </div>
            <p className='text-black'>(<span className='rating'>{avgRating}</span> ratings)</p>
          </div>
          <div className='flex items-center gap-5'>
          <p className='text-xl font-semibold text-black mt-3'>${price}</p>
          <span className='mt-3'> Category: {category}</span>
          </div>
          <p className='mt-3 desc-color mb-3'>{shortDesc}</p>
          <motion.button whileTap={{scale: 1.2}} onClick={addToCart}>Add to Cart</motion.button>
         </div>
        </div>
        </Row>        
      </Container>
    </section>

    <section>
      <Container>
        <Row className='w-full'>
          <div className='w-full'>
            <div className="tab-wrapper flex gap-3">
              <div className="cursor-pointer">
              <h6 className={`${tab === 'desc' ? 'active-tab' : ''}`} onClick={()=> setTab('desc')}>Description</h6>
              </div>
              <div className="cursor-pointer">
              <h6 className={`${tab === 'rev' ? 'active-tab' : ''}`} onClick={()=> setTab('rev')}>Reviews ({reviews.length})</h6>
              </div>
            </div>
            
            {tab === 'desc' ? (
              <div className="tab-content mt-4">
              <p>{description}</p>
            </div> 
            ) : (
              <div className="product-review mt-4">
                <div className="review-wrapper">
                  <ul>
                    { reviews?.map((item, index) => (
                      <li key={index} className='mb-4'> <h6>Jhon Dow</h6><span>{item.rating} ( average rating )</span>
                      <p>{item.text}</p>
                      </li>
                    ))}
                  </ul>

                  <div className="review-form">
                    <h4>Leave your experience</h4>
                    <form action="" onSubmit={handleSubmit}>
                      <div className="form-group">
                        <input type="text" placeholder='Enter name' required ref={reviewUser} />
                      </div>
                      <div className="form-group flex items-center gap-3">
                        <motion.span whileTap={{scale: 1.2}} onClick={()=> setRating(1)}>1 <i className='ri-star-s-fill'></i></motion.span>
                        <motion.span whileTap={{scale: 1.2}} onClick={()=> setRating(2)}>2 <i className='ri-star-s-fill'></i></motion.span>
                        <motion.span whileTap={{scale: 1.2}} onClick={()=> setRating(3)}>3 <i className='ri-star-s-fill'></i></motion.span>
                        <motion.span whileTap={{scale: 1.2}} onClick={()=> setRating(4)}>4 <i className='ri-star-s-fill'></i></motion.span>
                        <motion.span whileTap={{scale: 1.2}} onClick={()=> setRating(5)}>5 <i className='ri-star-s-fill'></i></motion.span>
                      </div>
                      <div className="form-group">
                        <textarea ref={reviewMsg} rows={4} type="text" required placeholder='Review Message...' />
                      </div>
                      <motion.button  whileTap={{scale: 1.2}} type='submit'>Submit</motion.button>
                    </form>
                  </div>
                </div>
              </div>
            )}
            
          </div>

          <div className='w-full mt-3'>
            <h2 className='related-title font-medium'>You might also like</h2>
          </div>
          <ProductList data={relatedProducts} />
        </Row>
      </Container>
    </section>
    </Helmet>
  )
}
