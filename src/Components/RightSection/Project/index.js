import React, { Component } from "react";

export class Project extends Component {
    render() {
        const { name, year, techStack, point1, point2} = this.props;
        return (
            <>
                <p className="section-sub-title">
                {name} <span className="year">({year})</span>
                </p>
                <p className="section-description">
                    Tech Stack: {techStack.join(", ")} <br />
                    <ul>
                        <li>{point1}</li>
                        <li>{point2}</li>
                    </ul>
                </p>
            </>
        );
    }
}

export default Project;