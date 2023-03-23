import styled, { css, keyframes } from 'styled-components';

const keyFrame = keyframes`
    0% { opacity: 0 }
  100% { opacity: 1 }
`;

interface ISelect {
  isFocused: boolean;
}

export const Container = styled.div<ISelect>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.background};
  border: ${({ theme, isFocused }) =>
    isFocused
      ? '1px solid transparent'
      : `1px solid ${theme.colors.gray[300]}`};
  outline: ${({ isFocused }) =>
    isFocused ? '1px solid blue' : '1px solid transparent'};
  border-radius: 4px;
  padding: 0.8rem;

  transition: all 0.2s;
`;

export const Input = styled.input.attrs({ type: 'text' })`
  border: none;
  outline: none;
  background: transparent;
  width: 100%;
  margin-right: 0.4rem;
`;

export const Icon = styled.img`
  padding-left: 0.4rem;
  border-left: 1px solid ${({ theme }) => theme.colors.gray[300]};

  &:hover {
    cursor: pointer;
  }
`;

export const ContentOptions = styled.ul<ISelect>`
  ${({ isFocused }) =>
    !isFocused &&
    css`
      display: none;
    `}
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: 4px;
  padding: 0.4rem 0;
  margin-top: 0.4rem;
  background: ${({ theme }) => theme.colors.background};
  max-height: 20rem;
  overflow-y: scroll;
  animation: ${keyFrame} 0.2s ease-in-out;
`;

export const Option = styled.li`
  padding-left: 1rem;
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[100]};
  }
  cursor: pointer;
`;
