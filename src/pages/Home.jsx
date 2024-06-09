import React from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import HeroImg from "../assets/images/hero-img.png";
import products from "../assets/data/products";
import "../Style/home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// variations
import { fadeIn } from "../variants";
import Services from "../Services/Services";
import ProductList from "../components/UI/ProductList";
import { useEffect, useState } from "react";
import counterImg from "../assets/images/counter-timer-img.png";
import Clock from "../components/UI/Clock";
export default function Home() {
  const [trendingProducts, setTrendingProducts] = useState(products);
  const [bestSalesProducts, setBestSalesProducts] = useState(products);
  const [mobileProducts, setMobileProducts] = useState(products);
  const [wirelessProducts, setWirelessProducts] = useState(products);
  const [popularProducts, setPopularProducts] = useState(products);
  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredProducts = products.filter(
      (item) => item.category === "chair"
    );
    const filteredBestSalesProducts = products.filter(
      (item) => item.category === "sofa"
    );
    const filteredMobileProducts = products.filter(
      (item) => item.category === "mobile"
    );
    const filteredWirelessProducts = products.filter(
      (item) => item.category === "wireless"
    );
    const filteredPopularProducts = products.filter(
      (item) => item.category === "watch"
    );
    setTrendingProducts(filteredProducts);
    setBestSalesProducts(filteredBestSalesProducts);
    setMobileProducts(filteredMobileProducts);
    setWirelessProducts(filteredWirelessProducts);
    setPopularProducts(filteredPopularProducts);
  }, []);

 
  return (
    <>
      <Helmet title={"Home"}>
        <section className="hero_section">
          <Container className="">
            <Row className="flex flex-col md:flex-row   flex-wrap-reverse gap-4">
              <Col>
                <div className="lg:mt-10">
                  <motion.p 
                  variants={fadeIn("up", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.3 }}
                  className="text-lg">Trending product in {year}</motion.p>
                  <motion.h2 
                  variants={fadeIn("up", 0.4)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.4}}
                  className="font-semibold md:text-2xl lg:text-4xl mt-[20px] mb-[20px]">
                    Make Your Interior More Minimalistic & Modern
                  </motion.h2>
                  <motion.p 
                  variants={fadeIn("up", 0.6)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.3 }} 
                  className="leading-6 text-[0.9rem] lg:text-[1rem]">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Modi iste asperiores nobis ut maxime beatae accusantium
                    facere tempora magni consequatur.
                  </motion.p>

                  <motion.div variants={fadeIn("up", 0.8)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.3 }}>
                  <motion.button
                    whileTap={{ scale: 1.2 }}
                    className="mt-[20px] shop-btn text-sm lg:text-[1rem]"
                  >
                    <Link to="/shop">SHOP NOW</Link>
                  </motion.button>
                  </motion.div>
                </div>
              </Col>

              <Col>
                <div>
                  <motion.img
                   variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
             src={HeroImg} alt="" />
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <Services />

        <section className="trending_products">
          <Container>
            <Row className="flex ">
              <div>
                <Col className=" text-center ">
                  <motion.h2 
                  variants={fadeIn("up", 0.1)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.3 }} className="section_title text-2xl lg:text-4xl ">Trending Products</motion.h2>
                </Col>
              </div>
              <ProductList data={trendingProducts}> </ProductList>
            </Row>
          </Container>
        </section>

        <section className="best_sales">
          <Container>
            <Row className="flex ">
              <div>
                <Col className=" text-center ">
                  <motion.h2 
                  variants={fadeIn("up", 0.1)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.3 }}  className="section_title text-2xl lg:text-4xl ">Best Sales</motion.h2>
                </Col>
              </div>
              <ProductList data={bestSalesProducts} />
            </Row>
          </Container>
        </section>

        <section className="timer_counter w-full ">
          <Container className="">
            <Row className="flex flex-wrap  w-full">
              <Col className="1/2">
                <div className="clock_top-content ">
                  <h4 className="text-white text-lg mb-2">Limited Offers</h4>
                  <h3 className="text-white text-xl mb-3">Quality Armchair</h3>
                </div>
                <Clock />
                <motion.button
                  whileTap={{ scale: 1.2 }}
                  className="bg-white text-black visit-btn text-sm lg:text-[1rem]"
                >
                  <Link to="/shop">Visit Store</Link>
                </motion.button>
              </Col>
              <Col className="w-1/2 flex justify-between text-end">
                <div></div>
                <img className=" hidden md:flex right-0" src={counterImg} alt="" />
              </Col>
            </Row>
          </Container>
        </section>

        <section className="new_arrivals">
          <Container>
            <Row>
              <div>
                <Col className=" text-center ">
                  <motion.h2 
                  variants={fadeIn("up", 0.1)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.3 }}  className="section_title text-2xl lg:text-4xl ">New Arrivals</motion.h2>
                </Col>
              </div>
              <ProductList data={mobileProducts} />
                <ProductList data={wirelessProducts} />
            </Row>
          </Container>
        </section>

        <section className="popular_category">
          <Container>
            <Row>
              <div>
                <Col className=" text-center ">
                  <motion.h2 
                  variants={fadeIn("up", 0.1)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.3 }}  className="section_title text-2xl lg:text-4xl mb-4">Popular in Category</motion.h2>
                </Col>
              </div>
              <ProductList data={popularProducts} />
            </Row>
          </Container>
        </section>

      </Helmet>
    </>
  );
}
