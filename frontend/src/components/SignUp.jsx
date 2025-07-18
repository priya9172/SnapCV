import React, { useContext, useState } from 'react'
import { authStyles as styles } from '../assets/dummystyle';
import { UserContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';
import {validateEmail} from '../utils/helper';
import { Input } from './Inputs';
import axiosInstance from '../utils/axioslnstance';
import { API_PATHS } from '../utils/apiPaths';

const SignUp = ({setCurrentpage}) => {
const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate();


  const handleSignup=async (e)=>{
    
    e.preventDefault();
    if(!fullName){
        setError('Please enter FullName')
        return;
    }
    if(!validateEmail(email)){
        setError('Please enter valid email address ')
        return;
    }

    if(!password){
        setError('Please enter password')
        return;
    }
    setError('');

    try {
       const response=await axiosInstance.post(API_PATHS.AUTH.REGISTER  ,{
        name:fullName,
        email,
        password,
       }) 
       console.log('REGISTER PATH:', API_PATHS.AUTH.REGISTER);
       console.log(response.data);
       const {token}=response.data;
       if(token){
        localStorage.setItem('token',token);
        updateUser(response.data);
        navigate('/dashboard')
       }
        
    } catch (error) {
        console.log(error);
        setError(error.response ?.data?.message || 'Something went wrong .please try again.')
    }

  }


  return (
    <div className={styles.signupContainer}>
        <div className={styles.headerWrapper}>
        <h3 className={styles.signupTitle}>Create Account</h3>
        <p className={styles.signupSubtitle}>Join thousands of professionals today</p>
        </div>

        {/*From */}

        <form onSubmit={handleSignup} className={styles.signupForm}>
            
            <Input value={fullName} onChange={({target})=>setFullName(target.value)}
            label='Full Name'
            placeholder='John Doe'
            type='text'
            className="w-full border border-gray-300 rounded-md p-2"/>

             
            <Input value={email} onChange={({target})=>setEmail(target.value)}
            label='Email'
            placeholder='email@example.com'
            type='email'
            className="w-full border border-gray-300 rounded-md p-2" />

             
            <Input value={password} onChange={({target})=>setPassword(target.value)}
            label='Password'
            placeholder='min 8 characters'
            type='password'
            className="w-full border border-gray-300 rounded-md p-2" />


            {error && <div className={styles.errorMessage}>{error}</div>}

            <button onClick={()=>console.log("clicked")} type ='submit' className={styles.signupSubmit}>
                Create Account
            </button>

            {/*footer */}
            <p className={styles.switchText}>
                Already have an account ?{' '}
                <button onClick={()=>setCurrentpage('login')}
                type ='button' className={styles.signupSwitchButton}>
                    Sign In
                </button>

            </p>


        </form>
    </div>
  )
}

export default SignUp





////

