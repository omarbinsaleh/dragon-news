import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../provider/AuthProvider'

const Register = () => {
   const navigate = useNavigate();
   const {createUser, setUser} = useContext(AuthContext);

   function handleSubmit(e) {
      e.preventDefault();
      const form = new FormData(e.target)
      const name = form.get('name');
      const email = form.get('email');
      const password = form.get('password');

      console.log({name, email, password});
      createUser(email, password)
      .then((result) => {
         setUser(result.user);
         navigate('/')
      })
      .catch((error) => {
         console.log(error.message);
      })

      
   }

  return (
   <section className='w-full place-items-center space-y-1 card shadow-2xl max-w-xl py-5 border rounded-sm'>
   <h1 className="text-3xl font-semibold">Create your account</h1>
   <div className="card bg-base-100 w-full max-w-md  shrink-0 ">
      <form onSubmit={handleSubmit} className="card-body">
         <div className="form-control">
            <label className="label">
               <span className="label-text">Name</span>
            </label>
            <input name='name' type="text" placeholder="Full Name" className="input input-bordered rounded-sm" required />
         </div>
         <div className="form-control">
            <label className="label">
               <span className="label-text">Email</span>
            </label>
            <input name='email' type="email" placeholder="email" className="input input-bordered rounded-sm" required />
         </div>
         <div className="form-control">
            <label className="label">
               <span className="label-text">Password</span>
            </label>
            <input name='password' type="password" placeholder="password" className="input input-bordered rounded-sm" required />
            <label className="label">
               <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
         </div>
         <div className="form-control mt-6">
            <button className="btn bg-black text-white hover:bg-slate-900 rounded-sm">Create Account</button>
         </div>
         <div className='w-full text-center'>
            <p className=''>Already have account? <span className="text-red-600 font-semibold"><Link to={'/auth/login'}>Sign In</Link></span></p>
         </div>
      </form>
   </div>
</section>
  )
}

export default Register
