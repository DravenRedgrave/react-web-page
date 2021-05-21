import React from 'react'
import { homeObjOne,homeObjTwo,homeObjThere,homeObjFour } from './Data'
import { InfoSection} from '../../components';

function Home() {
    return (
        <>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjThere} />
            <InfoSection {...homeObjFour} />
        </>
    )
}

export default Home
