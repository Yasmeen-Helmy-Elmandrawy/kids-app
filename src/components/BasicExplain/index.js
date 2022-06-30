import React from 'react';
import './style.css';
const BasicExplain = () => {
    return ( 
        <div className="explain-basic">
            <div className="explain-container">
                <h2 className="h2-basic">Coding Basic</h2>
                <div className="definition-basic">
                    <img className="img-basic" src="./images/basic/basic.png" alt="icon-basics" />
                    <p className="para-basic">Computer coding is the use of computer programming languages to give 
                    computers and machines a set of instructions on what actions to perform.</p>
                </div>
                <h2 className="h2-basic">Basic Coding Concepts</h2>
                <h3 className="h3-basic">-Variable</h3>
                <p className="para2-basic">A variable is a name of the memory location. It is used to store data. 
                Its value can be changed, and it can be reused many times.</p>
                <p className="para2-basic var">The example of declaring the variable is given below:</p>
                <img className="img-code" src="./images/basic/code.png" alt="example-code" /><br />
                <p className="para2-basic">Here, a, b, c are variables. The int, float, char are the data types.</p>
                <p className="para2-basic var">We can also provide values while declaring the variables as given below:</p>
                <img className="img-code" src="./images/basic/code2.png" alt="example-code-2" /><br />
                <h2 className="h2-basic">Rules for defining variables</h2>
                <ul className="rules">
                    <li>A variable can have alphabets, digits, and underscore.</li>
                    <li>A variable name can start with the alphabet, and underscore only. It can't start with a digit.</li>
                    <li>No whitespace is allowed within the variable name.</li>
                    <li>A variable name must not be any reserved word or keyword, e.g. int, float, etc.</li>
                </ul><br />
            </div>  
        </div>
     );
}
export default BasicExplain;