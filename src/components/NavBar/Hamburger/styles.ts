import styled, { css } from 'styled-components';

interface IMobileMenu {
  hide: boolean;
}

export const HamburgerContainer = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

export const MobileMenu = styled.div<IMobileMenu>`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 5.1rem;
  left: 0;
  width: 60%;
  height: 100%;
  padding: 1rem 2rem;
  transition: all ease 0.3s;
  background-color: rgba(250, 250, 250, 0.9);
  backdrop-filter: blur(5px);
  z-index: 999;

  ${({ hide }) =>
    hide &&
    css`
      display: none;
    `};
`;
