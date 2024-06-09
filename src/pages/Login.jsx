import React, { useState } from 'react'
import { Container, Row, Col, Form, FormGroup} from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import { Link,  useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase.config';
import { toast } from 'react-toastify';
import '../Style/login.css'
import {motion} from 'framer-motion'
export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState('')
  const navigate = useNavigate()
  const signIn = async (e)=> {
    e.preventDefault()
    setLoading(true)

    try{
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      const user = userCredential.user
      console.log(user)
      setLoading(false)
      toast.success('Successfully Logged in')
      navigate('/checkout')
    } catch (error) {
      setLoading(false)
      toast.error(error.message)

    }
  }
  return (
    <Helmet title='Login'>
      <section>
        <Container>
          <Row>
          {
            loading ? <div className='text-center'><h5 className='font-medium'>Loading.....</h5></div> :
            <div className=' md:w-[70%] lg:w-[45%] m-auto text-center'>
            <h3 className=' text-xl font-semibold mb-3'>Login</h3>
            <Form className='auth-form' onSubmit={signIn}>
              <FormGroup className='form-group'>
              <input type="email" placeholder='Enter your email' value={email} onChange={e=> setEmail(e.target.value)} />
              </FormGroup>
              <FormGroup className='form-group'>
              <input type="password" placeholder='Enter your password' value={password} onChange={e=> setPassword(e.target.value)} />
              </FormGroup>
              <motion.button whileTap={{scale: 1.2}} type='submit' className='bg-white text-black font-medium mb-4 mt-2'>Login</motion.button>
              <p>Don't have an account? <Link to='/signup' className='font-[600] text-gray-300 hover:text-gray-300'>Create an account</Link></p>
            </Form>
          </div>
          }
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}
