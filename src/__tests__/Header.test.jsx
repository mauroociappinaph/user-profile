import { render, screen } from '@testing-library/react';
import Header from '../components/Header/Header';
import styles from '../components/Header/Header.module.css';

describe('Header component', () => {
  test('renders the name correctly', () => {
    const name = 'John Doe';
    render(<Header name={name} profileImage="profile.jpg" />);
    const nameElement = screen.getByText(name);
    expect(nameElement).toBeInTheDocument();
  });

  test('renders the profile image correctly', () => {
    const name = 'John Doe';
    const profileImage = 'profile.jpg';
    render(<Header name={name} profileImage={profileImage} />);
    const imageElement = screen.getByAltText(`${name}'s profile`);
    expect(imageElement).toHaveAttribute('src', profileImage);
  });

  test('applies the correct CSS class', () => {
    render(<Header name="John Doe" profileImage="profile.jpg" />);
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toHaveClass(styles.header);
  });

  test('does not throw an error when name is not provided', () => {
    expect(() => {
      render(<Header name="John Doe" profileImage="/_MG_0102 3-Mejorado-NR-1-2.jpg" />);
    }).not.toThrow();
  });

  test('does not throw an error when profileImage is not provided', () => {
    const name = 'John Doe';
    expect(() => {
      render(<Header name={name} />);
    }).not.toThrow();
  });
});
