import { useState } from 'react';
import { useParams } from 'react-router-dom';
import useMediaQuery from '../../hooks/useMediaQuery';
import {
  ButtonLink,
  LinkContainer,
  NavContainer,
  NavContent,
  StyledLink,
} from './styles';
import Coffe from '../../assets/images/icons/coffe.svg';
import Logo from '../../assets/images/logo.svg';
import Hamburger from './Hamburger';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { city } = useParams();
  const isLargeScreen = useMediaQuery('(min-width: 767px)');

  const toggleHamburger = () => setOpen((prevState) => !prevState);
  const handleCloseHamburger = () => setOpen(false);

  return (
    <NavContainer data-testid="navbar">
      <NavContent>
        {!isLargeScreen && (
          <Hamburger
            city={city}
            open={open}
            toggle={toggleHamburger}
            close={handleCloseHamburger}
          />
        )}
        <StyledLink to={`/${city}`} onClick={handleCloseHamburger}>
          <img src={Logo} alt="Aquele rolé logo" />
        </StyledLink>
        <LinkContainer>
          {isLargeScreen && (
            <>
              <StyledLink to={`/${city}/museum`}>Museu</StyledLink>
              <StyledLink to={`/${city}/music`}>Música</StyledLink>
              <StyledLink to={`/${city}/open`}>Ar livre</StyledLink>
            </>
          )}
          <ButtonLink to="https://google.com" target="_blank">
            <img src={Coffe} alt="Copo de café" />
            Aquele café
          </ButtonLink>
        </LinkContainer>
      </NavContent>
    </NavContainer>
  );
}
