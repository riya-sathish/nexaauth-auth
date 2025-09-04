import AuthLayout from "../../component/Layout/AuthLayout"
import {Link} from "react-router-dom"
import googlelogo from '../../assets/google.png'
import mainlogo from '../../assets/Group_1132.png'
import Button from "../../component/ui/Button/Button"


const Login = () => {
  return (
    <AuthLayout>
<div className="logo">  <img className="businesss" src={mainlogo} alt="business logo"/> uBrand</div>
<h3 className="muted">WELCOME BACK</h3>
<h2 className="font-h2" >Continue to your Account.</h2>
<button className="btn-google" type="button"
onClick={()=>alert("google login placeholder")}>
  <img  className="googlelogo" src={googlelogo} alt="google logo" />Log in with Google</button>

<div className="line-container">
  <hr className="line"/>
  <span>Or use Email</span>
  <hr className="line" />
</div><form className="form"
onSubmit={(e)=>{
  e.preventDefault();
  const email = e.target.email.value;
alert(`signup submitted for: ${email}`);
}}>
<input name="email" type="email" placeholder="Email" required/>
<input name="password" type="password" placeholder="Password"/> 
<Button type="submit">Continue</Button>

</form>
<div className="padd">
  <p className="small">Are you a Newbie? <Link className="styling"to="/">GET STARTED-IT'S FREE </Link></p>
</div>

    </AuthLayout>
  )
}

export default Login