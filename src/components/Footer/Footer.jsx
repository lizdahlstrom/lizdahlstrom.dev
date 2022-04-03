import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import ContactData from '../../constants/contact';

import { SocialIcons } from '../Header/HeaderStyles';
import {
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  SocialContainer,
  SocialIconsContainer,
} from './FooterStyles';

function Footer() {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Contact me</LinkTitle>
          <LinkItem href={`mailto:${ContactData.email}`}>
            {ContactData.email}
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <SocialContainer>
          <SocialIcons href={ContactData.github}>
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href={ContactData.linkedin}>
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
}

export default Footer;
