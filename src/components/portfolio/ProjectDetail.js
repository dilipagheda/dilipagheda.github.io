import React from 'react';

const ProjectDetail = (props) => {
    return ( 
        <div className="container">
            <div className="row">
                Project Detail
                <h1>{props.match.params.category}</h1>
                <h2>{props.match.params.Id}</h2>
            </div>
        </div>
     );
}
 
export default ProjectDetail

