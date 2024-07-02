// __tests__/Interests.test.js
import React from 'react';
import { render } from '@testing-library/react';
import Interests from '../components/Interests/Interests';

describe('Interests', () => {
  test('renders nothing with empty interests prop', () => {
    const { container } = render(<Interests interests={[]} />);
    const ulElement = container.querySelector('ul');

    // Assert that ulElement exists and is empty
    expect(ulElement).toBeInTheDocument();
    expect(ulElement.childNodes.length).toBe(0);
  });

  test('renders correct number of interests', () => {
    const interests = ['Interest 1', 'Interest 2', 'Interest 3'];
    const { getAllByRole } = render(<Interests interests={interests} />);
    const listItems = getAllByRole('listitem');

    // Assert that the number of list items matches the number of interests
    expect(listItems.length).toBe(interests.length);

    // Assert that each list item contains the correct text
    interests.forEach((interest, index) => {
      expect(listItems[index]).toHaveTextContent(interest);
    });
  });
});
