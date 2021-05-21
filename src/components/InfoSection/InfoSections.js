import React from 'react'
import { Container,Button } from '../../gloabalStyles'
import {Link} from 'react-router-dom'
import {InfoSec,InfoRow,InfoColumn,TextWrapper,TopLine,Heading,SubTitle,ImgWrapper,Img} from './InfoSections.elements'

const InfoSections=({lightBg,imgStart,LightTopLine,lightText,LightTextDesc,description,buttonLabel,headLine,topLine,primary,start,img,alt}) => {
    return (
        <>
            <InfoSec lightBg={lightBg}>
               <Container>
                   <InfoRow imgStart={imgStart}>
                       <InfoColumn>
                           <TextWrapper>
                               <TopLine LightTopLine={LightTopLine}>{topLine}</TopLine>
                               <Heading lightText={lightText}>{headLine}</Heading>
                               <SubTitle LightTextDesc={LightTextDesc}>{description}</SubTitle>
                               <Link to='/signup'/>
                               <Button big fontBig primary={primary}>
                                   {buttonLabel}
                               </Button>
                           </TextWrapper>
                       </InfoColumn>
                       <InfoColumn>
                           <ImgWrapper start={start}>
                               <Img src={img} alt={alt}/>
                           </ImgWrapper>
                       </InfoColumn>
                   </InfoRow>
               </Container>
            </InfoSec>
        </>
    );
};

export default InfoSections
