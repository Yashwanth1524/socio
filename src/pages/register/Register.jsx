import { Link } from "react-router-dom";
import "./register.scss";

const Register = () => {
  const handleRegister = (event) => {
    event.preventDefault();
    // Add your registration logic here
    // For simplicity, let's assume the registration is successful
    alert('Registered successfully!');
  };

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Lama Social.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Name" />
            <button onClick={handleRegister}>Register</button>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
