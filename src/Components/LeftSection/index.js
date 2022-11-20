import './index.css'
import Education from './Education/index'
    
const LeftSection = () => {
    return(
        <div className='LeftSection'>
            <div className='Education'>
                <p className='section-title'>Education</p>
                <Education
                institute="Ecole Centrale de Nantes"
                years="2017-2019"
                cgpa={6.9}
                point1="It is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout."
                point2="The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content here,
                content here', making it look like readable English." 
                />
                <Education
                institute="Malla Reddy College of Engineering"
                years="2011-2015"
                cgpa={6.3}
                point1="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                point2="If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
                />
                <Education 
                institute="Narayana Junior College"
                years="2009-2011"
                cgpa={8.4}
                point1="It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.."
                point2="It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                />
            </div>
            <div className='Skill'>
                <p className='section-title'>SKills</p>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Bootstrap</li>
                        <li>JavaScript</li>
                        <li>React.js</li>
                    </ul>
            </div>
        </div>
    );
};

export default LeftSection;