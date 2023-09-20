import React from 'react';
import girl from '../Assets/girl-studying.jpg';
import '../Styles/Welcome.css';


function Welcome() {
    return (
        <div className="welcome-parent">
            <div className="welcome-left-content">
                
            </div>
            <div className="welcome-right-content">
                <div className="body-text">
                    <h1>Welcome</h1>
                    <h2>Thank you for visiting Course Search.</h2>
                    <p>Course Search is a location where students can go to find courses that
                        interest them. It is designed to let you set the keywords for the
                        courses you want and it generates the best matches.</p>
                    <h1>Why is Course Search useful?</h1>
                    <p>Course Search is useful since there is an abundance of
                        classes/electives. This website is more efficient and effective
                        than leafing through a course book. It also gets a more in-depth
                        explanation of each course.</p>
                </div>
                <img src={girl} />
            </div>
        </div>
    );
}

export default Welcome;
