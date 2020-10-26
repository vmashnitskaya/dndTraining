import React from 'react';

const Row = ({element}) =>{
    return (<>
                <span>{element.id}</span>
                <span>{element.full_name}</span>
                <span><img src={element.avatar} alt={`${element.id}_avatar`}/></span>
        </>
   )
}

export default Row;