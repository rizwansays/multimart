import React from "react";
import { motion } from "framer-motion";
import "../../Style/product-card.css";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import { fadeIn } from "../../variants";
import {useDispatch} from 'react-redux';
import { cartActions } from "../../Redux/Slices/cartSlice";
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
export default function ProductCard({ item }) {
  const dispatch = useDispatch()
  const addToCart = ()=>{
    dispatch(cartActions.addItem({
      id: item.id,
      productName: item.productName,
      price: item.price,
      imgUrl: item.imgUrl,
    }))
    toast.success('Product add successfully')
    // alert('Product add to cart')
  }
  return (
    <Col className="flex w-full mb-2">
      <motion.div 
      variants={fadeIn("up", 0.1)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }} className="product_item cursor-pointer mx-auto w-60 ">
        <div className="product_img">
          <motion.img whileHover={{ scale: 0.9 }} src={item.imgUrl} alt="" />
        </div>
        <div className="p-2 product_info ">
          <h3 className="product_name font-semibold mt-1">
            <Link to={`/shop/${item.id}`}>{item.productName}</Link>
          </h3>
          <span className="font-medium">{item.category}</span>
        </div>
        <div className="product_card_bottom flex items-end  justify-between p-2">
          <span className="price ">${item.price}</span>
          <motion.span whileTap={{ scale: 1.2 }} onClick={addToCart}>
            <i className="ri-add-line"></i>
          </motion.span>
        </div>
      </motion.div>
    </Col>
  );
}
