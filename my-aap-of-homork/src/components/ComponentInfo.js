import React, { component } from 'react';

import PropsInfo from './PropsInfo';
import StateInfo from './StateInfo';
import LyfeCycleInfo from './LyfeCycleInfo';

class ComponentInfo extends component{
    render(){
        return (
            <div className="ComponentInfo">

            <PropsInfo/>
            <StateInfo/>
            <LyfeCycleInfo/>

            
            
            </div>
        )
    }
}

export default ComponentInfo;

