import React from "react"

const About = () => {

return(
    <>
    <div className="about-main">
        <h2>Alexis Raya</h2>
        <div className="about-split">
            <div className="credentials">
                <div className="credentials-title">
                    <h1>Credentials</h1>
                </div>
                <div className="credentials-bullets">
                    <ul>
                        <li>Bachelors degree in kinesiology with a concentration in exercise science </li>
                        <li>Masters degree in exercise science with a concentration in strength and conditioning</li>
                        <li>NASM's Performance Enhancment Specialization (PES) certified </li>
                        <li>USAW (Weightlifitng) certified </li>
                        <li>Precision nutrition certified</li>
                        <li>Adaptive Fitness certified</li>
                    </ul>
                </div>
            </div>
            <div className="experience">
                <div className="experience-title">
                    <h1>Experience</h1>
                </div>
            <div className="experience-bullets">
                <ul>
                    <li>Five years in strength training and conditioning both personal and group coaching </li>
                    <li>Three years highschool coaching in cross country and track & field </li>
                </ul>
            </div>    
            </div>    
        </div>
    </div>
    </>
    )
}

export default About