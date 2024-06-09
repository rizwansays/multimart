import React from 'react'
import {motion} from 'framer-motion';
import { Container, Row, Col } from 'reactstrap';
import './services.css'
import serviceData from '../assets/data/serviceData';
import { fadeIn } from "../variants";

export default function Services() {
  return (
    <section className='services'>
      <Container>
        <Row className='w-full -mt-4'>
          {serviceData.map((item, index) => (
              <Col 
              
              key={index} className='flex flex-col lg:flex-row flex-wrap items-center justify-center '>
              <motion.div whileHover={{scale: 1.1}} className="service_item p-[20px] w-full md:w-[300px] lg:w-[250px]  h-[120px] flex items-center  gap-[0.7rem] rounded-sm cursor-pointer mt-4"  style={{background: `${item.bg}`}}>
                <span>
                  <i className={item.icon}></i>
                </span>
                <div><h3 className=' font-semibold  lg:text-[1rem]'>{item.title}</h3>
              <p className='text-[13px]'>{item.subtitle}</p></div>
              </motion.div>
              </Col>
          ))}
          
        </Row>
      </Container>
    </section>
  )
}
