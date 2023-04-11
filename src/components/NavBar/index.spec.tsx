import { vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../../assets/styles/themes/default';

import Navbar from '.';

const setupTests = (isMobile: boolean) => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query) => ({
      matches: query === `(${isMobile ? 'max' : 'min'}-width: 767px)`,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    })),
  });

  render(
    <MemoryRouter initialEntries={['/rj']}>
      <Routes>
        <Route
          path="/:city"
          element={
            <ThemeProvider theme={defaultTheme}>
              <Navbar />
            </ThemeProvider>
          }
        />
      </Routes>
    </MemoryRouter>
  );
};

describe('Navbar', () => {
  it('should render navbar in desktop', () => {
    setupTests(false);

    expect(screen.getByTestId('navbar')).toBeInTheDocument();
  });

  it('should render navbar in mobile', () => {
    setupTests(true);

    expect(screen.getByTestId('navbar')).toBeInTheDocument();
  });

  it('should renders city-specific links in desktop', () => {
    setupTests(false);

    expect(screen.getByText('Museu')).toHaveAttribute('href', '/rj/museum');
    expect(screen.getByText('Música')).toHaveAttribute('href', '/rj/music');
    expect(screen.getByText('Ar livre')).toHaveAttribute('href', '/rj/open');
  });

  it('should not renders city-specific links in mobile', () => {
    setupTests(true);

    expect(screen.queryByText('Museu')).toBe(null);
    expect(screen.queryByText('Música')).toBe(null);
    expect(screen.queryByText('Ar livre')).toBe(null);
  });

  it('should check if hamburger exists in desktop', () => {
    setupTests(false);
    const hamburgerButton = screen.queryByTestId('hamburger');

    expect(hamburgerButton).toBe(null);
  });

  it('should check if hamburger exists in mobile', () => {
    setupTests(true);
    const hamburgerButton = screen.queryByTestId('hamburger');

    expect(hamburgerButton).toBeTruthy();
  });

  it('should check if click in hamburger open the mobile menu', () => {
    setupTests(true);

    const hamburgerButton = screen.getByTestId('hamburger');
    fireEvent.click(hamburgerButton);
    const mobileMenu = screen.getByTestId('mobileMenu');

    expect(mobileMenu).toBeTruthy();
  });

  it('should check if click 2 times in hamburger open and close the mobile menu', () => {
    setupTests(true);

    const hamburgerButton = screen.getByTestId('hamburger');
    fireEvent.click(hamburgerButton);

    const mobileMenu1 = screen.getByTestId('mobileMenu');
    expect(mobileMenu1).toBeTruthy();

    fireEvent.click(hamburgerButton);

    const mobileMenu2 = screen.queryByTestId('mobileMenu');
    expect(mobileMenu2).toBe(null);
  });

  it('should renders city-specific links when mobile menu is open', () => {
    setupTests(true);

    const hamburgerButton = screen.getByTestId('hamburger');
    fireEvent.click(hamburgerButton);

    const mobileMenu = screen.getByTestId('mobileMenu');
    expect(mobileMenu).toBeTruthy();

    expect(screen.getByText('Museu')).toHaveAttribute('href', '/rj/museum');
    expect(screen.getByText('Música')).toHaveAttribute('href', '/rj/music');
    expect(screen.getByText('Ar livre')).toHaveAttribute('href', '/rj/open');
  });

  it('should not renders city-specific links when mobile menu is closed', () => {
    setupTests(true);

    const hamburgerButton = screen.getByTestId('hamburger');
    fireEvent.click(hamburgerButton);

    const mobileMenu1 = screen.getByTestId('mobileMenu');
    expect(mobileMenu1).toBeTruthy();

    fireEvent.click(hamburgerButton);

    const mobileMenu2 = screen.queryByTestId('mobileMenu');
    expect(mobileMenu2).toBe(null);

    expect(screen.queryByText('Museu')).toBe(null);
    expect(screen.queryByText('Música')).toBe(null);
    expect(screen.queryByText('Ar livre')).toBe(null);
  });
});
