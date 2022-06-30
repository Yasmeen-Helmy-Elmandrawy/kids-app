import React, { Component } from 'react';
import axios from 'axios';
import './style.css';
class ForgetPassword extends Component {
    state = {  } 
    handleSubmit = e => {
        e.preventDefault();
        const data = {
            email: this.email
        };
        axios.post('forget', data).then(
            res => {
                console.log(res);
            }
        ).catch(
            err => {
                console.log(err);
            }
        )
    }
    render() { 
        return (
            <div className="forget">
                <form className="form-forget" onSubmit={this.handleSubmit}>
                    <h3>Forget Password</h3>
                    <div className="form-group">
                        <label>Email</label><br />
                        <input type="email" className="form-control"
                        placeholder="Enter Your Email" required
                        onChange={e => this.email = e.target.value} />
                    </div>
                    <button className="submit">Submit</button>
                </form>
                <img className="mascot-doc" src="./images/mascot-doc.png" alt="mascot-doc-image" />
            </div>
        );
    }
}
 
export default ForgetPassword;