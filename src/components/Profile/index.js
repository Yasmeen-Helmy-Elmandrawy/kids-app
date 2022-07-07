import React from 'react';
import { useTranslation } from 'react-i18next';
import {Link} from 'react-scroll';
import { Link as NavLink } from 'react-router-dom';
import { CgGames } from "react-icons/cg";
import { FiEdit } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import { MdOutlineRateReview } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { FaArrowCircleLeft } from 'react-icons/fa';
import './style.css';
const Profile = () => {
    const [t, i18n] = useTranslation();
    return ( 
        <div className="profile">
            <div className="header">
                <div className="user">
                    <img src="./images/avatar.png" alt="avatar-profile" />
                    <h3 className="name">yasmeen helmy</h3>
                </div>
                <nav className="navbar">
                    <ul>
                        <li><Link to="games"><CgGames className="icon" />Games</Link></li>
                        <li><Link to="edit-profile"><FiEdit className="icon" />Edit profile</Link></li>
                        <li><Link to="about"><FiUsers className="icon" />About Us</Link></li>
                        <li><Link to="rate"><MdOutlineRateReview className="icon" />Rate Us</Link></li>
                        <li><NavLink className="back" to="/signin"><FiLogOut className="icon" />Log Out</NavLink></li>
                    </ul>
                </nav>
            </div>
            <div className="sections">
                <div className="games" id="games">
                    <div className="container">
                        <div className="gametype">
                            <div className="gametype-contain">
                                <img src="./images/basic/basic.png" alt="basics" />
                                <Link to = "basics">coding Basics</Link>
                            </div>
                        </div>
                        <div className="gametype">
                            <div className="gametype-contain">
                                <img src="./images/sequence/img-sequence.png" alt="sequences" />
                                <Link to = "sequences" className="link-sequence">sequences</Link>
                            </div>
                        </div>
                        <div className="gametype">
                            <div className="gametype-contain">
                                <img src="./images/loop/loop.png" alt="loops" />
                                <Link to = "loops" className="link-loop">loops</Link>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="gametype">
                            <div className="gametype-contain">
                                <img src="./images/function/function.png" alt="functions" />
                                <Link to = "functions" className="link-function">functions</Link>
                            </div>
                        </div>
                        <div className="gametype">
                            <div className="gametype-contain">
                                <img src="./images/array/arrays.png" alt="arrays" />
                                <Link to = "arrays" className="link-array">arrays</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="basics color-basic" id="basics">
                    <div className="container">
                        <div className="title">
                            <Link to="games" className="back"><FaArrowCircleLeft /></Link>
                            <h2>Coding Basics</h2>
                        </div>
                        <div className="content-basics">
                            <div className="content">
                                <img src="./images/tutorial.jpg" alt="tutorial-basic" />
                                <Link to = "tutorial-basic" className="link1">Video Tutorial</Link>
                            </div>
                            <div className="content">
                                <img src="./images/basic/code-basic.png" alt="explain-basic" />
                                <Link to = "explain-basic" className="link2">Explain</Link>
                            </div>
                            <div className="content">
                                <img src="./images/basic/basic4.jpg" alt="img-basic" />
                                <Link to = "games-basic" className="link3">Games</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tutorial-basic t-basicColor">
                    <div className="title">
                        <Link to="basics" className="back"><FaArrowCircleLeft /></Link>
                        <h2>Video Tutorial</h2>
                    </div>
                    <video className="video-b" controls autoPlay loop>
                        <source src="./videos/Basic.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className="explain-basic e-basicColor">
                    <div className="title">
                        <Link to="basics" className="back"><FaArrowCircleLeft /></Link>
                        <h2>Explain</h2>
                    </div>
                    <div className="explain">
                        <p>Explain</p>
                    </div>
                </div>

                <div className="games-basic g-basicColor">
                    <div className="title">
                        <Link to="basics" className="back"><FaArrowCircleLeft /></Link>
                        <h2>Games</h2>
                    </div>
                    <div className="levels">
                        <h3>Select Level</h3>
                        <form className = "choose">
                            <input type="button" value = '1' className="btn"/>
                            <input type="button" value = '2' className="btn"/>
                            <input type="button" value = '3' className="btn"/>
                            <input type="button" value = '4' className="btn"/>
                            <input type="button" value = '5' className="btn"/>
                            <input type="button" value = '6' className="btn"/>
                            <input type="button" value = '7' className="btn"/>
                            <input type="button" value = '8' className="btn"/>
                            <input type="button" value = '9' className="btn"/>
                            <input type="button" value = '10' className="btn"/>
                        </form>
                    </div>
                </div>

                <div className="sequences color-sequence" id="sequences">
                    <div className="container">
                        <div className="title">
                            <Link to="games" className="back"><FaArrowCircleLeft /></Link>
                            <h2>Sequences</h2>
                        </div>
                        <div className="content-sequences">
                            <div className="content">
                                <img src="./images/tutorial.jpg" alt="tutorial-sequence" />
                                <Link to = "tutorial-sequence" className="link1">Video Tutorial</Link>
                            </div>
                            <div className="content">
                                <img src="./images/sequence/code-sequence.jpg" alt="explain-sequence" />
                                <Link to = "explain-sequence" className="link2">Explain</Link>
                            </div>
                            <div className="content">
                                <img src="./images/sequence/sequence2.jpg" alt="games-sequence" />
                                <Link to = "games-sequence" className="link3">Games</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tutorial-sequence t-sequenceColor">
                    <div className="title">
                        <Link to="sequences" className="back"><FaArrowCircleLeft /></Link>
                        <h2>Video Tutorial</h2>
                    </div>
                    <video className="video" controls autoPlay loop>
                        <source src="./videos/Basic.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className="explain-sequence e-sequenceColor">
                    <div className="title">
                        <Link to="sequences" className="back"><FaArrowCircleLeft /></Link>
                        <h2>Explain</h2>
                    </div>
                    <div className="explain">
                        <p>Explain</p>
                    </div>
                </div>

                <div className="games-sequence g-sequenceColor">
                    <div className="title">
                        <Link to="sequences" className="back"><FaArrowCircleLeft /></Link>
                        <h2>Games</h2>
                    </div>
                    <div className="levels">
                        <h3>Select Level</h3>
                        <form className = "choose">
                            <input type="button" value = '1' className="btn"/>
                            <input type="button" value = '2' className="btn"/>
                            <input type="button" value = '3' className="btn"/>
                            <input type="button" value = '4' className="btn"/>
                            <input type="button" value = '5' className="btn"/>
                            <input type="button" value = '6' className="btn"/>
                            <input type="button" value = '7' className="btn"/>
                            <input type="button" value = '8' className="btn"/>
                            <input type="button" value = '9' className="btn"/>
                            <input type="button" value = '10' className="btn"/>
                        </form>
                    </div>
                </div>

                <div className="loops color-loop" id="loops">
                    <div className="container">
                        <div className="title">
                            <Link to="games" className="back"><FaArrowCircleLeft /></Link>
                            <h2>Loops</h2>
                        </div>
                        <div className="content-loops">
                            <div className="content">
                                <img src="./images/tutorial.jpg" alt="tutorial-sequence" />
                                <Link to = "tutorial-loop" className="link1">Video Tutorial</Link>
                            </div>
                            <div className="content">
                                <img src="./images/loop/code-loop.jpg" alt="explain-sequence" />
                                <Link to = "explain-loop" className="link2">Explain</Link>
                            </div>
                            <div className="content">
                                <img src="./images/loop/loops.png" alt="games-sequence" />
                                <Link to = "games-loop" className="link3">Games</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tutorial-loop t-loopColor">
                    <div className="title">
                        <Link to="loops" className="back"><FaArrowCircleLeft /></Link>
                        <h2>Video Tutorial</h2>
                    </div>
                    <video className="video-b" controls autoPlay loop>
                        <source src="./videos/Basic.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className="explain-loop e-loopColor">
                    <div className="title">
                        <Link to="loops" className="back"><FaArrowCircleLeft /></Link>
                        <h2>Explain</h2>
                    </div>
                    <div className="explain">
                        <p>Explain</p>
                    </div>
                </div>

                <div className="games-loop g-loopColor">
                    <div className="title">
                        <Link to="loops" className="back"><FaArrowCircleLeft /></Link>
                        <h2>Games</h2>
                    </div>
                    <div className="levels">
                        <h3>Select Level</h3>
                        <form className = "choose">
                            <input type="button" value = '1' className="btn"/>
                            <input type="button" value = '2' className="btn"/>
                            <input type="button" value = '3' className="btn"/>
                            <input type="button" value = '4' className="btn"/>
                            <input type="button" value = '5' className="btn"/>
                            <input type="button" value = '6' className="btn"/>
                            <input type="button" value = '7' className="btn"/>
                            <input type="button" value = '8' className="btn"/>
                            <input type="button" value = '9' className="btn"/>
                            <input type="button" value = '10' className="btn"/>
                        </form>
                    </div>
                </div>

                <div className="functions color-function" id="functions">
                    <div className="container">
                        <div className="title">
                            <Link to="games" className="back"><FaArrowCircleLeft /></Link>
                            <h2>Functions</h2>
                        </div>
                        <div className="content-functions">
                            <div className="content">
                                <img src="./images/tutorial.jpg" alt="tutorial-sequence" />
                                <Link to = "tutorial-function" className="link1">Video Tutorial</Link>
                            </div>
                            <div className="content">
                                <img src="./images/function/code-function.png" alt="explain-sequence" />
                                <Link to = "explain-function" className="link2">Explain</Link>
                            </div>
                            <div className="content">
                                <img src="./images/function/function2.png" alt="games-sequence" />
                                <Link to = "games-function" className="link3">Games</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tutorial-function t-functionColor">
                    <div className="title">
                        <Link to="functions" className="back"><FaArrowCircleLeft /></Link>
                        <h2>Video Tutorial</h2>
                    </div>
                    <video className="video" controls autoPlay loop>
                        <source src="./videos/Basic.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className="explain-function e-functionColor">
                    <div className="title">
                        <Link to="functions" className="back"><FaArrowCircleLeft /></Link>
                        <h2>Explain</h2>
                    </div>
                    <div className="explain">
                        <p>Explain</p>
                    </div>
                </div>

                <div className="games-function g-functionColor">
                    <div className="title">
                        <Link to="functions" className="back"><FaArrowCircleLeft /></Link>
                        <h2>Games</h2>
                    </div>
                    <div className="levels">
                        <h3>Select Level</h3>
                        <form className = "choose">
                            <input type="button" value = '1' className="btn"/>
                            <input type="button" value = '2' className="btn"/>
                            <input type="button" value = '3' className="btn"/>
                            <input type="button" value = '4' className="btn"/>
                            <input type="button" value = '5' className="btn"/>
                            <input type="button" value = '6' className="btn"/>
                            <input type="button" value = '7' className="btn"/>
                            <input type="button" value = '8' className="btn"/>
                            <input type="button" value = '9' className="btn"/>
                            <input type="button" value = '10' className="btn"/>
                        </form>
                    </div>
                </div>

                <div className="arrays color-array" id="arrays">
                    <div className="container">
                        <div className="title">
                            <Link to="games" className="back"><FaArrowCircleLeft /></Link>
                            <h2>Arrays</h2>
                        </div>
                        <div className="content-arrays">
                            <div className="content">
                                <img src="./images/tutorial.jpg" alt="tutorial-array" />
                                <Link to = "tutorial-array" className="link1">Video Tutorial</Link>
                            </div>
                            <div className="content">
                                <img src="./images/array/code-array.png" alt="explain-array" />
                                <Link to = "explain-array" className="link2">Explain</Link>
                            </div>
                            <div className="content">
                                <img src="./images/array/array.png" alt="games-array" />
                                <Link to = "games-array" className="link3">Games</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tutorial-array t-arrayColor">
                    <div className="title">
                        <Link to="arrays" className="back"><FaArrowCircleLeft /></Link>
                        <h2>Video Tutorial</h2>
                    </div>
                    <video className="video" controls autoPlay loop>
                        <source src="./videos/Basic.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className="explain-array e-arrayColor">
                    <div className="title">
                        <Link to="arrays" className="back"><FaArrowCircleLeft /></Link>
                        <h2>Explain</h2>
                    </div>
                    <div className="explain">
                        <p>Explain</p>
                    </div>
                </div>

                <div className="games-array g-arrayColor">
                    <div className="title">
                        <Link to="arrays" className="back"><FaArrowCircleLeft /></Link>
                        <h2>Games</h2>
                    </div>
                    <div className="levels">
                        <h3>Select Level</h3>
                        <form className = "choose">
                            <input type="button" value = '1' className="btn"/>
                            <input type="button" value = '2' className="btn"/>
                            <input type="button" value = '3' className="btn"/>
                            <input type="button" value = '4' className="btn"/>
                            <input type="button" value = '5' className="btn"/>
                            <input type="button" value = '6' className="btn"/>
                            <input type="button" value = '7' className="btn"/>
                            <input type="button" value = '8' className="btn"/>
                            <input type="button" value = '9' className="btn"/>
                            <input type="button" value = '10' className="btn"/>
                        </form>
                    </div>
                </div>

                <div className="edit-profile" id="edit-profile">
                    <div className="container">
                        <form>
                            <input type = "text" placeholder = "Enter name..." id = "name" />
                            <input type = "submit" value = "Add" />
                        </form>
                    </div>
                </div>

                <div className="about" id="about">
                    <div className="container">
                        <h2>About Us</h2>
                        <div className="users">
                            <div className="user">
                                <img src="./images/yasmeen.png" alt="user1-img" />
                                <h3>katreen mikhael<br /><span>(FrontEnd Developer)</span></h3>
                            </div>
                            <div className="user">
                                <img src="./images/yasmeen.png" alt="user2-img" />
                                <h3>yasmeen helmy<br /><span>(FrontEnd Developer)</span></h3>
                            </div>
                            <div className="user">
                                <img src="./images/yasmeen.png" alt="user3-img" />
                                <h3>mohamed osama<br /><span>(BackEnd Developer)</span></h3>
                            </div>
                        </div>
                        <div className="users">
                            <div className="user">
                                <img src="./images/yasmeen.png" alt="user4-img" />
                                <h3>kerollos romany<br /><span>(Flutter Developer)</span></h3>
                            </div>
                            <div className="user">
                                <img src="./images/yasmeen.png" alt="user5-img" />
                                <h3>fatma radwan<br /><span>(Flutter Developer)</span></h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rate" id="rate">
                    <h2>Rate and Review</h2>
                    <h4>Course Progress</h4>
                    <svg>
                        <circle r="130" cx="150" cy="150" />
                        <circle r="130" cx="150" cy="150" />
                    </svg> 
                    <div className="number">70%</div>
                </div>

                

            </div>
        </div>
     );
}
 
export default Profile;