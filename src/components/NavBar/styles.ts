import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavContainer = styled.nav`
  background-color: rgb(245, 245, 245);
  box-shadow: 0 2px 8px rgba(215, 215, 215, 0.25);
`;

export const NavContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;

  @media (max-width: 767px) {
    padding: 0;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;

  a {
    margin-left: 1rem;
  }
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};

  &:hover {
    color: ${({ theme }) => theme.colors.gray[500]};
  }
`;

export const ButtonLink = styled(NavLink)`
  display: flex;
  align-items: center;

  text-decoration: none;
  color: ${({ theme }) => theme.colors.background};
  font-size: 1.4rem;
  font-weight: 500;

  background-color: ${({ theme }) => theme.colors.purple.main};
  padding: 0.4rem 0.8rem;
  border-radius: 4px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.purple.darker};
  }

  img {
    margin-right: 0.3rem;
  }
`;
