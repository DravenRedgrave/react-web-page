import React from 'react'
import { homeObjOne,homeObjTwo,homeObjThere,homeObjFour } from './Data'
import { InfoSection, Pricing} from '../../components';

function Home() {
    return (
        <>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjThere} />
            <Pricing/>
            <InfoSection {...homeObjFour} />
        </>
    );
};

export default Home
