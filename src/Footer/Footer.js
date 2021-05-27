import React from 'react'
import {FaFacebook,FaInstagram,FaYoutube,FaTwitter,FaLinkedin} from 'react-icons/fa'
import {Button} from '../gloabalStyles'
import {FooterContainer,FooterSubscriptions,FooterSubHeading,FooterSubText,Form,FormInput,FooterLinksContainer,FooterLinksWrapper,FooterLinksItem,FooterLinkTitle,FooterLink,SocialMedia,SocialMediaWrap,SocialLogo,SocialIcon,WebsiteRights,SocialIcons,SocailIconsLink} from './Footer.element';
function Footer() {
    return (
        <FooterContainer>
            <FooterSubscriptions>
                <FooterSubHeading>
                    Join our exclisive membership to recive the lastest news and treends
                </FooterSubHeading>
                <FooterSubText>
                    You can unscbscribe at any time 
                </FooterSubText>
                <Form>
                    <FormInput name="email" type="email" placeholder="your email"/>
                        <Button fontBig>Subscribe</Button>
                </Form>
            </FooterSubscriptions>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItem>
                        <FooterLinkTitle>About US</FooterLinkTitle>
                        <FooterLink to="signup">How it works</FooterLink>
                        <FooterLink to="signup">Testimonials</FooterLink>
                        <FooterLink to="signup">Carrers</FooterLink>
                        <FooterLink to="signup">Investors</FooterLink>
                        <FooterLink to="signup">Terms of service</FooterLink>
                    </FooterLinksItem>
                    <FooterLinksItem>
                        <FooterLinkTitle>Contact US</FooterLinkTitle>
                        <FooterLink to="signup">How it works</FooterLink>
                        <FooterLink to="signup">Testimonials</FooterLink>
                        <FooterLink to="signup">Carrers</FooterLink>
                        <FooterLink to="signup">Investors</FooterLink>
                        <FooterLink to="signup">Terms of service</FooterLink>
                    </FooterLinksItem>
                    <FooterLinksWrapper>
                        
                    </FooterLinksWrapper>
                    <FooterLinksItem>
                        <FooterLinkTitle>Video</FooterLinkTitle>
                        <FooterLink to="signup">How it works</FooterLink>
                        <FooterLink to="signup">Testimonials</FooterLink>
                        <FooterLink to="signup">Carrers</FooterLink>
                        <FooterLink to="signup">Investors</FooterLink>
                        <FooterLink to="signup">Terms of service</FooterLink>
                    </FooterLinksItem>
                    <FooterLinksItem>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                        <FooterLink to="signup">How it works</FooterLink>
                        <FooterLink to="signup">Testimonials</FooterLink>
                        <FooterLink to="signup">Carrers</FooterLink>
                        <FooterLink to="signup">Investors</FooterLink>
                        <FooterLink to="signup">Terms of service</FooterLink>
                    </FooterLinksItem>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/">
                        <SocialIcon/>
                            ULTRA
                    </SocialLogo>
                    <WebsiteRights>
                        ULTRA 2020
                    </WebsiteRights>
                    <SocialIcons>
                        <SocailIconsLink href='/' target='_blank' arial-laberl='Facebook'>
                            <FaFacebook/>
                        </SocailIconsLink>
                        <SocailIconsLink href='/' target='_blank' arial-laberl='Instagram'>
                            <FaInstagram/>
                        </SocailIconsLink>
                        <SocailIconsLink href='/' target='_blank' arial-laberl='Youtube'>
                            <FaYoutube/>
                        </SocailIconsLink>
                        <SocailIconsLink href='/' target='_blank' arial-laberl='Twitter'>
                            <FaTwitter/>
                        </SocailIconsLink>
                        <SocailIconsLink href='/' target='_blank' arial-laberl='Linkedin'>
                            <FaLinkedin/>
                        </SocailIconsLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
}

export default Footer
