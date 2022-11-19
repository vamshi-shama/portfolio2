import React, { Component } from "react";

export class Education extends Component{
    render(){
        const { institute, years, cgpa, point1, point2} = this.props;
        return (
            <>
            <p className="section-sub-title">
                {institute} <span className="year">({years})</span>
            </p>
            <p className="section-description">
                CGPA: {cgpa} <br />
                <ul>
                    <li>{point1}</li>
                    <li>{point2}</li>
                </ul>
            </p>
            </>
        );
    }
}

export default Education;