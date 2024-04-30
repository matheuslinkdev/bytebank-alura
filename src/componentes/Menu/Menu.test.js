import { render, screen } from '@testing-library/react';
import Menu from './index';

test('Must render a link to the home page', () => {
  render(<Menu />);
  const linkHomePage = screen.getByText('Inicial');
  expect(linkHomePage).toBeInTheDocument();
});

test('Must render a links list', () => {
  render(<Menu />);
  const linksList = screen.getAllByRole('link');
  expect(linksList).toHaveLength(4);
});

test('Must not render the statement link', () => {
  render(<Menu />);
  const statementLink = screen.queryByText('Extrato');
  expect(statementLink).not.toBeInTheDocument();
});

test('Must render a link list with class link', () => {
  render(<Menu />);
  const links = screen.getAllByRole('link');
  links.forEach((link) => expect(link).toHaveClass('link'));
  expect(links).toMatchSnapshot()
});
