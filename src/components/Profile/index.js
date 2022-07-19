import React, {useState} from 'react';
import {Link} from 'react-scroll';
import { Link as NavLink } from 'react-router-dom';
import { CgGames } from "react-icons/cg";
import { MdLiveHelp} from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { FaArrowCircleLeft } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import './style.css';
const Profile = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    return ( 
        <div className="profile">
            <div className="header">
                <h2 className="name">Kidcoder</h2>
                <nav className="navbar">
                    <ul>
                        <li><Link to="games"><CgGames className="icon" />Games</Link></li>
                        <li><Link to="help"><MdLiveHelp className="icon" />Help Center</Link></li>
                        <li><Link to="about"><FaUsers className="icon" />About Us</Link></li>
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
                                <Link to = "loops" className="link-loop">Loops</Link>
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
                                <Link to = "explain-basic" className="link2">Coding</Link>
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
                        <source src="./videos/Basics.MP4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className="explain-basic e-basicColor">
                    <div className="title">
                        <Link to="basics" className="back"><FaArrowCircleLeft /></Link>
                        <h2>Coding</h2>
                    </div>
                    <div className="explain">
                        <div className="definition-basic">
                            <img className="img-basic" src="./images/basic/basic.png" alt="icon-basics" />
                            <p className="para-basic">Computer coding is the use of computer programming languages to give 
                            computers and machines a set of instructions on what actions to perform.</p>
                        </div>
                        <h2 className="h2-basic">Basic Coding Concepts</h2>
                        <h3 className="h3-basic">-Variable</h3>
                        <p className="para2-basic">A variable is a name of the memory location. It is used to store data. 
                        Its value can be changed, and it can be reused many times.</p>
                        <p className="para2-basic var">The example of declaring the variable and provide values as given below:</p>
                        <img className="img-code" src="./images/basic/code2.png" alt="example-code" /><br />
                        <p className="para2-basic">Here, a, b, c are variables. The int, float, char are the data types.</p>
                        <p className="para2-basic var">In the example above we use two variables, x and y, to test whether x is greater than y. As x is 20, and y is 18, and we know that 20 is greater than 18, we print to the screen that "x is greater than y".</p>
                        <img className="img-code" src="./images/basic/code-if.png" alt="example-code-2" /><br />
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
                                <Link to = "explain-sequence" className="link2">Coding</Link>
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
                        <source src="./videos/Sequences.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className="explain-sequence e-sequenceColor">
                    <div className="title">
                        <Link to="sequences" className="back"><FaArrowCircleLeft /></Link>
                        <h2>Coding</h2>
                    </div>
                    <div className="explain">
                        <div className="definition-sequence">
                            <img className="img-sequence" src="./images/sequence/img-sequence.png" alt="icon-sequnces" />
                            <p className="para-sequence">A sequence in programming refers to an ordered set of instructions or tasks.
                            Here the command is executed exactly in the same order of events given by the coder.</p>
                        </div>
                        <p className="para2-sequence">Fibonacci Series in C: In case of fibonacci series, next number is the sum of previous two numbers for example 0, 1, 1, 2, 3, 5, 8, 13, 21 etc. 
                        The first two numbers of fibonacci series are 0 and 1.</p>
                        <p className="para2-sequence understand">To understand the sequence point more detail, you can consider the following given examples:</p>
                        <div className="code">
                            <img className="img-code" src="./images/sequence/code.png" alt="example-code" />
                            <img className="img-output" src="./images/sequence/output.png" alt="output-code" />
                        </div>
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
                                <Link to = "explain-loop" className="link2">Coding</Link>
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
                        <source src="./videos/Loops.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className="explain-loop e-loopColor">
                    <div className="title">
                        <Link to="loops" className="back"><FaArrowCircleLeft /></Link>
                        <h2>Coding</h2>
                    </div>
                    <div className="explain">
                        <div className="definition">
                            <img className="img-loop" src="./images/loop/loop.png" alt="icon-loops" />
                            <p className="para-loop">A programming structure that repeats a sequence of instructions 
                            until a specific condition is met. Programmers use loops to cycle through values, 
                            add sums of numbers, repeat functions, and many other things.</p>
                        </div>
                        <h3 className="h3-loop">For Loop</h3>
                        <p className="para2-loop">A for loop is similar to a while loop, but streamlines the source code. 
                        The for loop statement defines the start and end point as well as the increment for each iteration. 
                        </p>
                        <div className="code-screen">
                            <img className="img-code" src="./images/loop/code2.png" alt="example-code-2" />
                            <img className="img-output" src="./images/loop/output.png" alt="output-code-2" />
                        </div>
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
                                <Link to = "explain-function" className="link2">Coding</Link>
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
                        <source src="./videos/Functions.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className="explain-function e-functionColor">
                    <div className="title">
                        <Link to="functions" className="back"><FaArrowCircleLeft /></Link>
                        <h2>Coding</h2>
                    </div>
                    <div className="explain">
                        <div className="definition-f">
                            <img className="img-function" src="./images/function/function.png" alt="icon-functions" />
                            <p className="para-function">A function is a set of statements that take inputs, 
                            do some specific computation and produces output.</p>
                        </div>
                        <p className="example">Given below is the source code for a function called max(). 
                        This function takes two parameters x and y and returns the maximum value between the two</p>
                        <div className="code">
                            <img className="img-code" src="./images/function/code.png" alt="example-code" />
                            <img className="img-output" src="./images/function/output.png" alt="output-code" />
                        </div>
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
                                <Link to = "explain-array" className="link2">Coding</Link>
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
                        <h2>Coding</h2>
                    </div>
                    <div className="explain">
                        <div className="definition-array">
                            <img className="img-array" src="./images/array/arrays.png" alt="icon-arrays" />
                            <p className="para-array">Arrays are used to store multiple values in a single variable, 
                            instead of declaring separate variables for each value.
                            To create an array, define the data type (like int) and specify the name of the array followed by square brackets [].</p>
                        </div>
                        <h2 className="h2-array">Access the Elements of an Array</h2>
                        <p className="para2-array">To access an array element, refer to its index number.
                        Array indexes start with 0: [0] is the first element. [1] is the second element, etc.</p>
                        <h3 className="h3-array">This statement accesses the value of the first element [0]</h3>
                        <img className="img-code" src="./images/array/example-array.png" alt="example-code" />
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

                <div className="help" id="help">
                    <div className="container">
                        <h2>What is this App For?</h2>
                        <img src="./images/help-center.png" alt="help" />
                        <p>This application aims to learn programming to kids and take advantage of their time and develop their knowledge and talents.
                        Our app helps kids improve their problem solving skills by playing different games like basics of coding, sequences, loops, functions and arrays.
                        It also helps kids to enhance memory and increase logical thinking skills.
                        </p>
                    </div>
                </div>

                <div className="about" id="about">
                    <div className="container">
                        <h2>About Us</h2>
                        <div className="users">
                            <div className="user">
                                <img src="./images/yasmeen8.jpg" alt="user1-img" />
                                <h3>yasmeen helmy<br /><span>(FrontEnd Developer)</span></h3>
                            </div>
                            <div className="user">
                                <img src="./images/katreen.jpg" alt="user2-img" />
                                <h3>katreen mikhael<br /><span>(FrontEnd Developer)</span></h3>
                            </div>
                            <div className="user">
                                <img src="./images/mohamed.jfif" alt="user3-img" />
                                <h3>mohamed osama<br /><span>(BackEnd Developer)</span></h3>
                            </div>
                        </div>
                        <div className="users">
                            <div className="user">
                                <img src="./images/kerollos.jpg" alt="user4-img" />
                                <h3>kerollos romany<br /><span>(Flutter Developer)</span></h3>
                            </div>
                            <div className="user">
                                <img src="./images/fatma1.jpg" alt="user5-img" />
                                <h3>fatma radwan<br /><span>(Flutter Developer)</span></h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rate" id="rate">
                    <h2>Rate and Review</h2>
                    <div className="five-star">
                        {[...Array(5)].map((star, i) => {
                            const ratingValue = i + 1;
                            return (
                                <label>
                                    <input
                                        type="radio"
                                        name="rating"
                                        value = {ratingValue}
                                        onClick = { () => setRating(ratingValue)}
                                    />
                                    <FaStar
                                        className="star"
                                        color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                                        size={100}
                                        onMouseEnter={() => setHover(ratingValue)}
                                        onMouseLeave={() => setHover(null)}
                                    />
                                </label>
                            )
                        })}
                        <p className="rating">The rating is {rating}.</p>
                    </div>
                </div>

                

            </div>
        </div>
     );
}
 
export default Profile;