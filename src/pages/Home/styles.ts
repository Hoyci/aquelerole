import styled from 'styled-components';

// Maybe this haven't to be aligned in center but using a margin top
export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Content = styled.div`
  background-color: ${({ theme }) => theme.colors.gray[100]};
  max-width: 54rem;
  padding: 2rem;
  margin: 1rem;
`;

export const Header = styled.div``;

export const Title = styled.h1`
  font-size: 2.2rem;
`;

export const Subtitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 400;
`;
