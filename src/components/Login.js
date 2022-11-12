import { signInWithPopup } from 'firebase/auth';
import React from 'react'
import { auth, provider } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsAuth }) => {
  const navigate = useNavigate();
  //Googleログイン
  const loginGoogle =()=>{
    signInWithPopup(auth,provider).then((result)=>{
      localStorage.setItem("isAuth",true);
      setIsAuth(true);
      navigate("/");
    })

  };

  return (
    <div>
      <p>ログインして始める</p>
      <button onClick={loginGoogle}>Googleでログイン</button>
    </div>
  )
}

export default Login