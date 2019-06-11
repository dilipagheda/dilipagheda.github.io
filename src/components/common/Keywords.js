import React from 'react';

const Keywords = (props) =>{
        return (
            <div>
                {props.words.map((item)=><span className="keyword pl-2 pr-2 pt-1 pb-2 mr-1">{item}</span>)}
            </div>
          );
}

export default Keywords;
