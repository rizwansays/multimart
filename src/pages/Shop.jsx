import React, { useState } from 'react'
import CommonSection from '../components/UI/CommonSection'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row} from 'reactstrap';
import '../Style/shop.css'
import products from '../assets/data/products'
import ProductsList from '../components/UI/ProductList'
export default function Shop() {
  const [productsData, setProductsData] = useState(products)

  const handleFilter = (e)=> {
  const filterValue = e.target.value;
  if(filterValue === 'sofa'){
    const filteredProducts = products.filter((item)=> item.category === 'sofa');
    setProductsData(filteredProducts);
  }

  if(filterValue === 'mobile'){
    const filteredProducts = products.filter((item)=> item.category === 'mobile');
    setProductsData(filteredProducts);
  }

  if(filterValue === 'wireless'){
    const filteredProducts = products.filter((item)=> item.category === 'wireless');
    setProductsData(filteredProducts);
  }
  
  if(filterValue === 'chair'){
    const filteredProducts = products.filter((item)=> item.category === 'chair');
    setProductsData(filteredProducts);
  }

  if(filterValue === 'watch'){
    const filteredProducts = products.filter((item)=> item.category === 'watch');
    setProductsData(filteredProducts);
  }

  }

  const handleSort = (e) => {
    const sortValue = e.target.value;
    if(sortValue === 'ascending'){
      const sortedData = products.filter((item) => item.price)
    }
  }
  const handleSearch = (e) => {
    const searchValue = e.target.value;
    const searchedData = products.filter((item) => item.productName.toLowerCase().includes(searchValue.toLowerCase()))
    setProductsData(searchedData);
  }
  return (
    <Helmet title= 'Shop'>
      <CommonSection title='Products'></CommonSection>
      <section className='w-full'>
        <Container >
          <Row className='flex flex-wrap  gap-2  lg:gap-0 relative'>
          <div className=' md:w-[25%] '>
            <div className="filter_widget">
              <select className='text-sm lg:text-[1rem]' name="" id="" onChange={handleFilter}>
                <option className=''>Filter by category</option>
                <option value="sofa">Sofa</option>
                <option value="mobile">Mobile</option>
                <option value="chair">Chair</option>
                <option value="watch">Watch</option>
                <option value="wireless">wireless</option>
              </select>
            </div>
          </div>
          <div className='md:w-[25%] '><div className="filter_widget">
              <select onChange={handleSort} name="" id="" className='text-sm lg:text-[1rem]'>
                <option >Sort by</option>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
              </select>
            </div></div>
          <div className='relative ml-3 mr-3 md:w-[45%] search_box'>
            <input type="text" placeholder='Search.....'  onChange={handleSearch}/>
            <span>
              <i className='ri-search-line'></i>
            </span>
          </div>
          </Row>
        </Container>
      </section>

      <section className='w-[100%] pt-0'>
        <Container className='flex flex-wrap'>
          {
            productsData.length === 0 ? <h1 className='text-center'>No Products are found!</h1> :
            <ProductsList data= {productsData} />
          }
        </Container>
      </section>
    </Helmet>
  )
}
