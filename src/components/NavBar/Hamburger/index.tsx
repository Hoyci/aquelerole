import { useState } from 'react';
import { StyledLink } from '../styles';
import { HamburgerContainer, MobileMenu } from './styles';
import HamburgerIcon from '../../../assets/images/icons/hamburger.svg';

interface IHamburger {
  city: string | undefined;
  open: boolean;
  toggle: () => void;
  close: () => void;
}

export default function Hamburger({ city, open, toggle, close }: IHamburger) {
  return (
    <>
      <HamburgerContainer onClick={toggle} data-testid="hamburger">
        <img src={HamburgerIcon} alt="Hamburger icon" />
      </HamburgerContainer>
      {open && (
        <MobileMenu hide={!open} data-testid="mobileMenu">
          <StyledLink to={`/${city}/museum`} onClick={close}>
            Museu
          </StyledLink>
          <StyledLink to={`/${city}/music`} onClick={close}>
            Música
          </StyledLink>
          <StyledLink to={`/${city}/open`} onClick={close}>
            Ar livre
          </StyledLink>
        </MobileMenu>
      )}
    </>
  );
}
