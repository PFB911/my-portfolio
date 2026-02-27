import React from 'react'
import './Stack.css'
import StackIcon from "tech-stack-icons";

const Stack = () => {
    return (
        <div className='stack-container'>
            <div className='stack-title'>
                <h3>Technology I Use</h3>
            </div>
            
            <div className="stack-icons">
                <ul className="stack-techs">
                    <li style={{ width: 60, height: 60 }}><StackIcon name="html5" /></li>
                    <li style={{ width: 60, height: 60 }}><StackIcon name="css3" /></li>
                    <li style={{ width: 60, height: 60 }}><StackIcon name="js" /></li>
                    <li style={{ width: 60, height: 60 }}></li>
                    <li style={{ width: 60, height: 60 }}><StackIcon name="mongodb" /></li>
                    <li style={{ width: 60, height: 60 }}><StackIcon name="expressjs" /></li>
                    <li style={{ width: 60, height: 60 }}><StackIcon name="react" /></li>
                    <li style={{ width: 60, height: 60 }}><StackIcon name="nodejs" /></li>
                </ul>

            </div>

        </div>
    )
}

export default Stack