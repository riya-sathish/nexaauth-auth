
import {Link} from "react-router-dom"
import AuthLayout from "../../component/Layout/AuthLayout"
import mainlogo from '../../assets/Group_1132.png'
import googlelogo from '../../assets/google.png'
import Button from "../../component/ui/Button/Button"


const Signup = () => {
  return (
<AuthLayout>
<div className="logo">
  <img className="businesss" src={mainlogo} alt="business logo"/>uBrand</div>
<h1 className="font-h1">Start your 14-day Free Trial Today.</h1>
<p className="muted">NO CREDIT CARD REQUIRED !</p>
<button className="btn-google" type="button"
onClick={()=> alert ("Google sign up placeholder")}
>  <img  className="googlelogo" src={googlelogo} alt="google logo" /> Sign up with Google</button>
<div className="line-container">
  <hr className="line"/>
  <span>Or use Email</span>
  <hr className="line" />
</div>

<form 
className="form"
onSubmit={(e)=>{
  e.preventDefault();
  const email = e.target.email.value;
  alert(`signup submitted for:${email}`);
   }}>
    <input name="email" type="email" placeholder="Email"/>
    <input name="password" type="password" placeholder="Password" required/>
   <Button type="submit">START MY FREE TRIAL</Button>
 </form>
 <p className="signing">By signing up to uBrand, means you agree to our privacy Policy <br></br>and Terms of Service</p>
 <div className="padd">

 <p className="small">Already a Member? <Link className="styling" to = "/login">LOG IN</Link>
 </p>
 </div>
</AuthLayout>





  )
}

export default Signup