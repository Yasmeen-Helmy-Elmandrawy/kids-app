import React from 'react';
import './style.css';
const LoopExplain = () => {
    return ( 
        <div className="explain-loop">
            <div className="explain-container">
                <h2 className="h2-loop">Loop</h2>
                <div className="definition">
                    <img className="img-loop" src="./images/loop/loop.jfif" alt="icon-loops" />
                    <p className="para-loop">A programming structure that repeats a sequence of instructions 
                    until a specific condition is met. Programmers use loops to cycle through values, 
                    add sums of numbers, repeat functions, and many other things.</p>
                </div>
                <h2 className="h2-loop">Types of Loop</h2>
                <p className="para2-loop">Two of the most common types of loops are the while loop and the for loop.</p>
                <h3 className="h3-loop">While Loop</h3>
                <p className="para2-loop">A while loop is the simplest form of a programming loop. 
                It states that while a condition is valid, keep looping. 
                In the C example below, the while loop will continue until i is equal to 10. 
                </p>
                <img className="img-code" src="./images/loop/code.png" alt="example-code" /><br />
                <p className="output">Output:</p>
                <img className="img-output" src="./images/loop/output.png" alt="output-code" />
                <h3 className="h3-loop">For Loop</h3>
                <p className="para2-loop">A for loop is similar to a while loop, but streamlines the source code. 
                The for loop statement defines the start and end point as well as the increment for each iteration. 
                </p>
                <img className="img-code" src="./images/loop/code2.png" alt="example-code-2" /><br />
                <p className="output">Output:</p>
                <img className="img-output" src="./images/loop/output.png" alt="output-code-2" />
                <p className="para2-loop"><span>NOTE:</span> Since loops will repeat until a given specific condition is met, 
                it is important to make sure the loop will break at some point. 
                If the condition is never met, the loop will continue indefinitely creating an infinite loop. 
                Writing code that allows infinite loops is bad programming practice, 
                since they can cause programs to crash.</p><br />
            </div>  
        </div>
     );
}
export default LoopExplain;