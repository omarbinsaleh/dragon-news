import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../provider/AuthProvider'

const Login = () => {
   const {login, setUser} = useContext(AuthContext)
   const navigate = useNavigate();

   function handleSubmit(e) {
      e.preventDefault();

      const form = new FormData(e.target);
      const email = form.get("email");
      const password = form.get("password");

      login(email, password)
      .then((result) => {
         console.log(result.user)
         setUser(result.user);
         navigate('/');
      })
      .catch((error) => {
         console.log(error.message);
      })

      e.target.reset();
      
   }

   return (
      <section className='w-full place-items-center space-y-1 card shadow-2xl max-w-xl py-10 border rounded-sm'>
         <h1 className="text-3xl font-semibold">Login your account</h1>
         <div className="card bg-base-100 w-full max-w-md  shrink-0 ">
            <form onSubmit={handleSubmit} className="card-body">
               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Email</span>
                  </label>
                  <input name="email" type="email" placeholder="email" className="input input-bordered rounded-sm" required />
               </div>
               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Password</span>
                  </label>
                  <input name="password" type="password" placeholder="password" className="input input-bordered rounded-sm" required />
                  <label className="label">
                     <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                  </label>
               </div>
               <div className="form-control mt-6">
                  <button className="btn bg-black text-white hover:bg-slate-900 rounded-sm">Login</button>
               </div>
               <div className='w-full text-center'>
                  <p className=''>Don't have account? <span className="text-red-600 font-semibold"><Link to={'/auth/register'}>Register</Link></span></p>
               </div>
            </form>
         </div>
      </section>
   )
}

export default Login
