import "../sass/LoginComponent.scss"
import {LoginAPI} from "../API/AuthAPI"



function LoginComponet() {
   const login = ()=>{
    LoginAPI()
   }
  return (
    <div className="Login">
        <h1>Login Now</h1>
        <button className="login-btn" onClick={login}>Login</button>
    </div>
  )
}
export default LoginComponet