import React from 'react';
import './style.css';
const ArrayExplain = () => {
    return ( 
        <div className="explain-array">
            <div className="explain-container">
                <h2 className="h2-array">Array</h2>
                <div className="definition-array">
                    <img className="img-array" src="./images/array/img-array.png" alt="icon-arrays" />
                    <p className="para-array">Arrays are used to store multiple values in a single variable, 
                    instead of declaring separate variables for each value.
                    To create an array, define the data type (like int) and specify the name of the array followed by square brackets [].</p>
                </div>
                <h2 className="h2-array">Access the Elements of an Array</h2>
                <p className="para2-array">To access an array element, refer to its index number.
                Array indexes start with 0: [0] is the first element. [1] is the second element, etc.</p>
                <h3 className="h3-array">This statement accesses the value of the first element [0]</h3>
                <img className="img-code" src="./images/array/example-array.png" alt="example-code" /><br />
                <p className="para2-array">The simplest way to initialize an array is by using the index of each element. 
                We can initialize each element of the array by using the index. Consider the following example:-</p>
                <img className="img-code" src="./images/array/code.png" alt="example-code-2" /><br />
                <p className="output">Output:</p>
                <img className="img-output" src="./images/array/output.png" alt="output-code" />
            </div>  
        </div>
     );
}
export default ArrayExplain;