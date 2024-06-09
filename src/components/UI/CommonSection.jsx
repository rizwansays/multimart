import React from 'react'
import { Container } from 'reactstrap';
import '../../Style/common-section.css'
export default function CommonSection({title}) {
  return (
    <section className='common_section'>
      <Container className='text-center'>
      <h1>{title}</h1>
      </Container>
    </section>
  )
}
