import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
class Home extends Component {
    render() { 
        return (
            <div className="home">
                <div className="container">
                    <div className="image">
                        <img src="./images/photo.png" alt="image-kids" />
                    </div>
                    <div className="right">
                        <div className="para">
                            <p className="p1">welcome to kidcoder</p>
                            <p className="p2">coding platform for kids. start journey with us</p>
                        </div>
                        <Link to="/signin">
                            <button className="start-btn">Start Here</button>
                        </Link> 
                    </div>
                </div>
            </div>
        );
    }
}
export default Home;