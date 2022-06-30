import React from 'react';
import {Link} from 'react-scroll';
import { Link as NavLink } from 'react-router-dom';
import './style.css';
const Objects = () => {
    return (
        <div className="objects">
            <div className="bar">
                <div className="basic" >
                    <img src="./images/basic/img-basic.png" alt="icon-basic" />
                    <Link to = "basic">Coding Basics</Link>
                </div>
                <div className="sequence" >
                    <img src="./images/sequence/img-sequence.png" alt="icon-sequence" />
                    <Link to = "sequence">Sequences</Link>
                </div> 
                <div className="loop">
                    <img src="./images/loop/img-loop.png" alt="icon-loop" />
                    <Link to = "loop">Loops</Link>
                </div>
                <div className="function">
                    <img src="./images/function/img-function.png" alt="icon-function" />
                    <Link to = "function">Functions</Link>
                </div>
                <div className="array">
                    <img src="./images/array/img-array.png" alt="icon-array" />
                    <Link to = "array">Arrays</Link>
                </div>     
            </div>
            <div className="sections">
                <div className="section-basic" id="basic">
                    <h2>Coding Basics</h2>
                    <div className="contents1">
                        <div className="content-1">
                            <img src="./images/basic/basic4.jpg" alt="img-basic" />
                            <NavLink to = "/basic-v">Coding Basics Video Tutorial</NavLink>
                        </div>
                    </div>
                    <div className="contents2">
                        <div className="content-2">
                            <img src="./images/basic/code-basic.png" alt="explain-basic" />
                            <NavLink to = "/basic-e">Explain of coding Basics</NavLink>
                        </div>
                    </div>
                    <div className="contents3">
                        <div className="content-3">
                            <div className="coding-basic">
                                <img src="./images/basic/img-basic.png" alt="icon-basic-img" />
                                <p>Coding Basics</p>
                            </div>
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
                </div>
                <div className="section-sequence" id="sequence">
                    <h2>Sequences</h2>
                    <div className="contents1">
                        <div className="content-1">
                            <img src="./images/sequence/sequence2.jpg" alt="img-sequence" />
                            <NavLink to = "/sequence-v">Sequences Video Tutorial</NavLink>
                        </div>
                    </div>
                    <div className="contents2">
                        <div className="content-2">
                            <img src="./images/sequence/code-sequence.jpg" alt="explain-sequence" />
                            <NavLink to = "/sequence-e">Explain of Sequences</NavLink>
                        </div>
                    </div>
                    <div className="contents3">
                        <div className="content-3">
                            <div className="coding-sequence">
                                <img src="./images/sequence/img-sequence.png" alt="icon-sequence-img" />
                                <p>Sequences</p>
                            </div>
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
                </div>
                <div className="section-loop" id="loop">
                    <h2>Loops</h2>
                    <div className="contents1">
                        <div className="content-1">
                            <img src="./images/loop/loops1.png" alt="img-loop" />
                            <NavLink to = "/loop-v">Loops Video Tutorial</NavLink>
                        </div>
                    </div>
                    <div className="contents2">
                        <div className="content-2">
                            <img src="./images/loop/code-loop.jpg" alt="explain-loop" />
                            <NavLink to = "/loop-e">Explain of Loops</NavLink>
                        </div>
                    </div>
                    <div className="contents3">
                        <div className="content-3">
                            <div className="coding-loop">
                                <img src="./images/loop/img-loop.png" alt="icon-loop-img" />
                                <p>Loops</p>
                            </div>
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
                </div>
                <div className="section-function" id="function">
                    <h2>Functions</h2>
                    <div className="contents1">
                        <div className="content-1">
                            <img src="./images/function/function2.png" alt="img-function" />
                            <NavLink to = "/function-v">Functions Video Tutorial</NavLink>
                        </div>
                    </div>
                    <div className="contents2">
                        <div className="content-2">
                            <img src="./images/function/code-function.png" alt="explain-function" />
                            <NavLink to = "/function-e">Explain of Functions</NavLink>
                        </div>
                    </div>
                    <div className="contents3">
                        <div className="content-3">
                            <div className="coding-function">
                                <img src="./images/function/img-function.png" alt="icon-function-img" />
                                <p>Functions</p>
                            </div>
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
                </div>
                <div className="section-array" id="array">
                    <h2>Arrays</h2>
                    <div className="contents1">
                        <div className="content-1">
                            <img src="./images/array/array.png" alt="img-array" />
                            <NavLink to = "/array-v">Arrays Video Tutorial</NavLink>
                        </div>
                    </div>
                    <div className="contents2">
                        <div className="content-2">
                            <img src="./images/array/code-array.png" alt="explain-array" />
                            <NavLink to = "/array-e">Explain of Arrays</NavLink>
                        </div>
                    </div>
                    <div className="contents3">
                        <div className="content-3">
                            <div className="coding-array">
                                <img src="./images/array/img-array.png" alt="icon-array-img" />
                                <p>Arrays</p>
                            </div>
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
                </div>
            </div>
        </div>
     );
}
export default Objects;