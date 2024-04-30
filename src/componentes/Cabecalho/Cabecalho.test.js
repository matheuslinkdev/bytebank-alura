import { render, screen } from '@testing-library/react';
import Cabecalho from './index';

test('Must render the logged user name', () => {
  render(<Cabecalho/>);
  const userName = screen.getByText('Joana Fonseca Gomes');
  expect(userName).toBeInTheDocument()
});
