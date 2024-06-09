import React, { useState } from 'react'
import { Container, Row, Col, Form, FormGroup} from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';

import '../Style/login.css'
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {ref, uploadBytesResumable, getDownload} from 'firebase/storage'
import { setDoc, doc } from 'firebase/firestore';
import { db } from '../firebase.config';
import { storage } from '../firebase.config';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify'
import {auth} from '../firebase.config';
import { getDownloadURL } from 'firebase/storage';
export default function Signup() {
  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const sign = async(e)=> {
    e.preventDefault();

    try {
       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
       const user = userCredential.user
       console.log(user)
       const storageRef = ref(storage, `images/${ Date.now() + username}`);
       const uploadTask = uploadBytesResumable(storageRef, file);

       uploadTask.on((error) => {
        toast.error(error.message);
       }, () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
          // update user profile
         await updateProfile(user, {
            displayName: username,
            photoURL: downloadURL,
          });
          // store userdata in firesotre
          await setDoc(doc(db, 'users', user.uid),{
            uid: user.uid,
            displayName: username,
            email,
            photoURL: downloadURL,
          })
        })
      }
    );

    setLoading(false)
    toast.success('Account Created');
    navigate('/login')
    } catch(error){
      setLoading(false)
      toast.error('Something went wrong')
    }
  }
  return (
    <Helmet title='SignUp'>
      <section>
        <Container>
          <Row>
          {
            loading ? <div className='text-center'><h5 className='font-medium'>Loading.....</h5></div> : 
            <div className=' lg:w-[45%] m-auto text-center'>
            <h3 className=' text-xl font-semibold mb-3'>SignUp</h3>
            <Form className='auth-form' onSubmit={sign}>
              <FormGroup className='form-group'>
              <input type="username" placeholder='Enter your username' value={username} onChange={(e)=> setUserName(e.target.value)} />
              </FormGroup>
              <FormGroup className='form-group'>
              <input type="email" placeholder='Enter your email' value={email} onChange={(e)=> setEmail(e.target.value)} />
              </FormGroup>
              <FormGroup className='form-group'>
              <input type="password" placeholder='Enter your password' value={password} onChange={(e)=> setPassword(e.target.value)} />
              </FormGroup>
              <FormGroup className='form-group '>
              <input className='' type="file"   onChange={(e)=> setFile(e.target.files[0])} />
              </FormGroup>
              <motion.button whileTap={{scale: 1.2}} type='submit' className='bg-white text-black font-medium mb-4 mt-2'>Create an account</motion.button>
              <p>Already have an account? <Link to='/login' className='font-[600] text-gray-300 hover:text-gray-300'>Login</Link></p>
            </Form>
          </div>
          }
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}
