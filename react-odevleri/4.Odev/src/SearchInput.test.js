import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
test('Kelime girildiğinde emoji sonuçlarının güncellenmesi', async () => {
  render(<App/>)
  const searchInput= screen.getByRole('textbox') 
  fireEvent.change(searchInput, {target:{value: 'ene'}}) 
  await waitFor(() => {
    const emojiResults= screen.getAllByTestId('copy')
    expect(emojiResults).toHaveLength(4)
  })
})