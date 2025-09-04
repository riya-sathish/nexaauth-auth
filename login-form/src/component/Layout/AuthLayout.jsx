

import pattern from "../../assets/pattern-c.png"

const AuthLayout = ({children}) => {
  return (
<div className="page">
  <div className="left"> {children}</div>
  <div className="right">
    <img src={pattern} alt="decorative pattern" />
  </div>
</div>



  )
}

export default AuthLayout