import { FaGithub, FaGoogle } from "react-icons/fa"

const SocialLogin = () => {
  return (
    <div className="space-y-3">
      <h1 className="font-semibold capitalize">Login with</h1> 
      <div className="space-y-1">
         <button className="btn btn-block flex items-center gap-2 rounded-md border border-gray-300 bg-white hover:text-blue-500 hover:border-blue-500 hover:bg-white">
            <FaGoogle></FaGoogle> Login with Google
         </button>
         <button className="btn btn-block rounded-md border border-gray-300 bg-white flex items-center gap-2 hover:text-blue-500 hover:border-blue-500 hover:bg-white">
            <FaGithub></FaGithub> Login with Github
         </button>
      </div>
    </div>
  )
}

export default SocialLogin
