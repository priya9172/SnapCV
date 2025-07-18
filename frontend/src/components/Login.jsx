import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/userContext';
import axiosInstance from '../utils/axioslnstance';
import { API_PATHS } from '../utils/apiPaths';
import { validateEmail } from '../utils/helper';
import { authStyles as styles } from '../assets/dummystyle';
import { Input } from './Inputs';



const Login = ({setCurrentpage}) => {

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = async(e) =>{
    e.preventDefault();
    if(!validateEmail(email)){
            setError('Pleasem enter valid email address ')
            return;
        }
    
        if(!password){
            setError('Please enter password')
            return;
        }

        setError('')

        try {
            const response=await axiosInstance.post(API_PATHS.AUTH.LOGIN,{email,password});
            const {token}=response.data;

            if(token){
                localStorage.setItem('token',token);
                updateUser(response.data);
                navigate('/dashboard');
            }
        } catch (error) {
              setError(error.response ?.data?.messsage || 'Something went wrong .please try again.')
            
        }
  }


  return (
    
   <div className={styles.container}>
    <div className={styles.headerWrapper}>
        <h3 className={styles.title}>wecome Back</h3>
        <p className={styles.subtitle}> 
            Sign in to continue building amazing resumes
             
        </p>
    </div>
    
    
    {/*form */}

    <form onSubmit={handleLogin} className={styles.form}>

         <Input value={email} onChange={({target})=>setEmail(target.value)}
            label='Email'
            placeholder='hexgonservics@example.com'
            type='email'
            className="w-full border border-gray-300 rounded-md p-2" />

            
            <Input value={password} onChange={({target})=>setPassword(target.value)}
            label='Password'
            placeholder='min 8 characters'
            type='password'
            className="w-full border border-gray-300 rounded-md p-2" />

             {error && <div className={styles.errorMessage}>{error}</div>}

             <button type='submit' className={styles.submitButton}>
                Sign In
            </button>

            <p className={styles.switchText}>
                Don't have an account {' '}
                <button type ='button'
                onClick={()=> setCurrentpage('signup')}
                className={styles.switchButton}>
                    sign up
                </button>

            </p>
                        
    </form>

</div>

);

};


export default Login;


