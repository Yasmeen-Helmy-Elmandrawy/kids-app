import React from 'react';
import './style.css';
const SequenceExplain = () => {
    return ( 
        <div className="explain-sequence">
            <div className="explain-container">
                <h2 className="h2-sequence">Sequence</h2>
                <div className="definition-sequence">
                    <img className="img-sequence" src="./images/sequence/img-sequence.png" alt="icon-sequnces" />
                    <p className="para-sequence">A sequence in programming refers to an ordered set of instructions or tasks.
                    Here the command is executed exactly in the same order of events given by the coder.</p>
                </div>
                <p className="para2-sequence">Fibonacci Series in C: In case of fibonacci series, next number is the sum of previous two numbers for example 0, 1, 1, 2, 3, 5, 8, 13, 21 etc. 
                The first two numbers of fibonacci series are 0 and 1.</p>
                <p className="para2-sequence understand">To understand the sequence point more detail, you can consider the following given examples:</p>
                <img className="img-code" src="./images/sequence/code.png" alt="example-code" /><br />
                <p className="output">Output:</p>
                <img className="img-output" src="./images/sequence/output.png" alt="output-code" />
            </div>  
        </div>
     );
}
export default SequenceExplain;