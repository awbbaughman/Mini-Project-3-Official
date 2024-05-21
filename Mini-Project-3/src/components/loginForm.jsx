import { useState } from "react";
import { useUserContext } from "../contexts/UserContext";


function LoginForm() {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [submitResult, setSubmitResult] = useState('');

    const {currentUser, handleUpdateUser} = useUserContext();   

const handleSubmit = (e) => {
    e.preventDefault();
        if (userPassword.length < 4) {
setSubmitResult('Password must be at least 5 chars long');
        } else if (userPassword === userEmail) {
setSubmitResult('Password must not match email address');
        } else {
setSubmitResult('Successful login.');
    handleUpdateUser({ email: userEmail });
        }
    }
{/* if the user is already logged in, show msg instead of form */}
if (currentUser.email) return (
    <div>
<p>Welcome {currentUser.email}, you're all logged in!</p>
<button className="text-light bg-danger" onClick={() => handleUpdateUser({})}>Log Out</button>
</div>
); 

return (
    <center><div>
        <form onSubmit = {handleSubmit}>
            <div className="formRow">
                <label>Email Address:
                    <input tyle="email" value={userEmail} name="userEmail"
                    onChange={(e) => setUserEmail(e.target.value)}>
                    </input>
                </label>
            </div>
            <div className="formRow p-3">
                <label>Password:
                    <input type="password" value={userPassword} name="userPassword"
                    onChange={(e) => setUserPassword(e.target.value)}></input>
                </label>
            </div>
            <button className="text-light bg-danger">Log In</button>
            <p>{submitResult}</p>
        </form>
    </div>
    </center>
)
}


export default LoginForm;

