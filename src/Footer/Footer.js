import React from 'react'
import {Button} from '../gloabalStyles'
import {FooterContainer,FooterSubscriptions,FooterSubHeading,FooterSubText,Form,FormInput} from './Footer.element';
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
        </FooterContainer>
    )
}

export default Footer
