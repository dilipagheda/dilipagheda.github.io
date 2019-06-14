import React from 'react';

const Divider = (props) =>{
    if(props.shouldDisplay){
        return <div className="divider row ml-2 mr-2 mt-3 mb-3"></div>;
    }else{
        return null;
    }
}

export default Divider;
