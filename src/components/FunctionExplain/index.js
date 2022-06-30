import React from 'react';
import './style.css';
const FunctionExplain = () => {
    return ( 
        <div className="explain-function">
            <div className="explain-container">
                <h2 className="h2-function">Function</h2>
                <div className="definition-f">
                    <img className="img-function" src="./images/function/img-function.png" alt="icon-functions" />
                    <p className="para-function">A function is a set of statements that take inputs, 
                    do some specific computation and produces output.</p>
                </div>
                <p className="idea">The idea is to put some commonly or repeatedly done 
                    task together and make a function so that instead of writing 
                    the same code again and again for different inputs, we can call the function.</p>
                <h2 className="h2-function">Consisting of Function</h2>
                <p className="para2-function">A function definition in C programming consists of a function header and a function body.</p>
                <h3 className="h3-function">All the parts of a function:-</h3>
                <ul className="consist">
                    <li><span>Return Type:- </span>A function may return a value. The return_type is the data type of the value the function returns.
                    Some functions perform the desired operations without returning a value. 
                    In this case, the return_type is the keyword void.</li>
                    <li><span>Function Name:- </span>This is the actual name of the function. 
                    The function name and the parameter list together constitute the function signature.</li>
                    <li><span>Parameters:- </span>A parameter is like a placeholder. When a function is invoked, 
                    you pass a value to the parameter. This value is referred to as actual parameter or argument. 
                    The parameter list refers to the type, order, and number of the parameters of a function. Parameters are optional; 
                    that is, a function may contain no parameters.</li>
                    <li><span>Function Body:- </span>The function body contains a collection of statements that define what the function does.</li>
                </ul>
                <p className="example">Given below is the source code for a function called max(). 
                This function takes two parameters x and y and returns the maximum value between the two</p>
                <img className="img-code" src="./images/function/code.png" alt="example-code" /><br />
                <p className="output">Output:</p>
                <img className="img-output" src="./images/function/output.png" alt="output-code" />
            </div>  
        </div>
     );
}
export default FunctionExplain;