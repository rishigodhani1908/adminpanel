// import { Link } from "react-router-dom";
// import { useState, useEffect } from "react"
// import axios from "axios"

// function Admin() {
//   const [login,setlogin]=useState({
//     email:"",
//     password:""

//   })
//   const [email, setemail] = useState('');
//   const [password, setpassword] = useState(''); 

//   const Login =(e)=>{
//     e.preventDefault();
//     const formdata=new FormData();
//     formdata.append('email',login.email);
//     formdata.append('password',login.password);

    
//     axios.post('http://localhost/jenu_php/adminlte/admin_lte.php',login)
//         .then(function (fetch) {
//           if(fetch.data.email == email && password == fetch.data.password){
//             window.localStorage.setItem('id',fetch.data.id);
//             window.location.href='/dasboard';
//             console.log(fetch.data);
//           }
          
//         }) 
//   }
//   // const btnhandaler = () => {
    
//   //   // i.preventDefault();
//   //   axios.post('http://localhost/jenu_php/adminlte/admin_lte.php', { email:email, password:password })
//   //     .then(function (response) {
//   //       console.log(response.data);
//   //     })
//   //     .catch(function (error) {
//   //       console.log(error);
//   //     });  
//   //     if(email== Response.data.email && password == Response.data.password){
//   //       window.location.href='/Dasboard';     
//   //     }
//   //     else{
//   //       alert('chek email/password')
//   //     }
//   // }
//   const handlechangeEmail = (e) => {
//     setemail(e.target.value);
//   }

//   const handlechangePassword = (e) => {
//     setpassword(e.target.value);
//   }
//   return (
//     <>

//       <div className="login-box mx-auto my-5">
//         <div className="login-logo">
//           <Link to="/dasboard"><b>Admin</b>LTE</Link>
//         </div>
//         <div className="card">  <div className="card-body login-card-body bg-body-tertiary shadow-lg rounded">
//           <p className="login-box-msg ">Sign in to start your session</p>
//           <form>
//             <div className="input-group mb-3">
//               <input type="email" className="form-control"  placeholder="Email" onChange={(e) => { handlechangeEmail(e); }} />
//               <div className="input-group-append">
//                 <div className="input-group-text">
//                   <span className="fas fa-envelope"></span>
//                 </div>
//               </div>
//             </div>
//             <div className="input-group mb-3">
//               <input type="password" className="form-control" placeholder="Password" onChange={(e) => { handlechangePassword(e); }} />
//               <div className="input-group-append">
//                 <div className="input-group-text">
//                   <span className="fas fa-lock"></span>
//                 </div>
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-8">
//                 <div className="icheck-primary">
//                   <input type="checkbox" id="remember" />
//                   <label for="remember">
//                     Remember Me
//                   </label>
//                 </div>
//               </div>
//               <div className="col-4">
//                   <button type="button" className="border p-1 border-primary" value="submit" onClick={Login}>Sign In</button>
//               </div>
//             </div>
//           </form>
//           <p className="mb-1">
//             <Link to="/admin/Forgot_password">I forgot my password</Link>
//           </p>
//           <p className="mb-0">
//             <Link to="/admin/Register" className="text-center">Register a new membership</Link>
//           </p>
//         </div>
//         </div>
//       </div>

//     </>
//   )
// }
// export default Admin


import React from 'react'
import { useState } from 'react'
import axios from 'axios'

function Login() {
    const [login, setLogin] = useState({
        email: '',
        password: ''
    })
    const [id, setId] = useState('');
    const formSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('email', login.email)
        formData.append('password', login.password)

        axios.post('http://localhost/php/php/admin_lte.php', login)
            .then(function (response) {
                console.log(response);
                // setId(response.data.id)
                // alert("ID == " + response.data.id)

                if ((response.data.email == login.email) && (response.data.password == login.password)) {
                    alert('Your data is currected...!')
                    window.localStorage.setItem('id', response.data.id)
                    window.location.href = '/Dasboard'
                }
                else {
                    alert('Please, Check your data...!')
                }
                
            })
            .catch(function (error) {
                console.log(error)
            })
    }
    const formInfo = (i) => {
        let targetName, targetValue
        targetName = i.target.name
        targetValue = i.target.value

        setLogin({ ...login, [targetName]: targetValue })
    }
    return (
        <>
            <div className="hold-transition login-page">
                <div className="login-box">
                    <div className="login-logo">
                        <a href="../../index2.html"><b>Admin</b>LTE</a>
                    </div>
                    <div className="card">
                        <div className="card-body login-card-body">
                            <p className="login-box-msg">Sign in to start your session</p>
                            {/* <form action="" method="post" onSubmit={formSubmit} > */}
                                <div className="input-group mb-3">
                                    <input type="email" className="form-control" name='email' placeholder="Email" onChange={formInfo} />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-envelope" />
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="password" className="form-control" name='password' placeholder="Password" onChange={formInfo} />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-lock" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-8">
                                        <div className="icheck-primary">
                                            <input type="checkbox" id="remember" />
                                            <label htmlFor="remember">
                                                Remember Me
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <button type="button" onClick={formSubmit} className="btn btn-primary btn-block">Sign In</button>
                                    </div>
                                </div>
                            
                            <p className="mb-1">
                                <a href="forgot-password.html">I forgot my password</a>
                            </p>
                            <p className="mb-0">
                                <a href="register.html" className="text-center">Register a new membership</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
