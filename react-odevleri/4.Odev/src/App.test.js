import {render, screen, fireEvent, waitFor} from '@testing-library/react'
import App from './App'

test('Herhangi bir emojiye tıklandığında kopyalama işlemi yapılıyor mu?', async() => {
  render(<App />)
  const emojiElements= screen.getAllByTestId('copy')
  fireEvent.click(emojiElements[0])
  const inputNode= screen.getByRole('textbox')
  fireEvent.change(inputNode, {target:{value: "💯"}}) 
  await waitFor(()=>{      
    expect(inputNode.value).toBe("💯")
  })
})
