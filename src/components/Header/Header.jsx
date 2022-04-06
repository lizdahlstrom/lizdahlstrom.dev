import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { DiCode } from 'react-icons/di';
import ContactData from '../../constants/contact';

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from './HeaderStyles';

function Header() {
  return (
    <Container>
      <Div1>
        <Link href="/">
          <a
            href="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              color: 'white',
              marginBottom: '20px',
            }}
          >
            <DiCode size="3rem" />
            {' '}
            <Span>Liz&nbsp;Dahlström</Span>
          </a>
        </Link>
      </Div1>
      <Div2>
        <li>
          <Link href="#projects">
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#coursework">
            <NavLink>Coursework</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <NavLink>About</NavLink>
          </Link>
        </li>
      </Div2>
      <Div3>
        <SocialIcons href={ContactData.github}>
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href={ContactData.linkedin}>
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
  );
}

export default Header;
