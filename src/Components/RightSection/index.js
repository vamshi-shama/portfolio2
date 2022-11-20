import './index.css'
import Project from './Project/index'

const RightSection = () => {
    return (
        <div className='RightSection'>
            <div className='Project'>
                <p className='section-title'>Projects</p>
                <Project 
                name= "Calculator App"
                year="2022"
                techStack= {["HTML", "CSS", "Bootstrap", "JavaScript"]}
                point1="It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.."
                point2="It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>
                <Project
                name= "Order Status Management APP"
                year="2022"
                techStack= {["HTML", "CSS", "Bootstrap", "React.JS"]}
                point1="It is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout."
                point2="The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content here,
                content here', making it look like readable English."/>
                <Project
                name= "Registration APP"
                year="2022"
                techStack= {["HTML", "CSS", "JavaScript"]}
                point1="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                point2="If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."/>
                
            </div>
            <div className='Languages'>
                <p className='section-title'>Languages</p>
                <ul>
                    <li>English</li>
                    <li>Hindi</li>
                    <li>Telugu</li>
                </ul>        
            </div>
        </div>
    );
};

export default RightSection;