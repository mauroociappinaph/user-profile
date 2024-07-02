import { render, screen } from '@testing-library/react';
import About from '../components/About/About';

describe('About component', () => {
  test('renders the description correctly', () => {
    const description = 'This is a test description';
    render(<About description={description} />);
    const descriptionElement = screen.getByText(description);
    expect(descriptionElement).toBeInTheDocument();
  });

  test('renders the heading correctly', () => {
    render(<About description="" />);
    const headingElement = screen.getByRole('heading', { name: /sobre mí/i });
    expect(headingElement).toBeInTheDocument();
  });

  test('applies the correct CSS class', () => {
    const customClass = 'custom-class';
    render(<About description="" className={customClass} />);
    const sectionElement = screen.getByLabelText('about-section');
    expect(sectionElement).toHaveClass(customClass);
  });

  test('renders with a custom heading', () => {
    const customHeading = 'Custom About Heading';
    render(<About description="" heading={customHeading} />);
    const headingElement = screen.getByRole('heading', { name: customHeading });
    expect(headingElement).toBeInTheDocument();
  });

  test('renders with a custom CSS style', () => {
    const customStyle = { backgroundColor: 'red' };
    render(<About description="" style={customStyle} />);
    const sectionElement = screen.getByLabelText('about-section');
    expect(sectionElement).toHaveStyle(customStyle);
  });

  test('does not throw an error when description is not provided', () => {
    expect(() => {
      render(<About />);
    }).not.toThrow();
  });
});
