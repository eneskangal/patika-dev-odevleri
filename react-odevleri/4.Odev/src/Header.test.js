import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import Header from './Header';
test("Emoji search Yazısı var mı?", () => {
    render(<Header/>)      
    expect(screen.getByText("Emoji Search")).toBeInTheDocument()     
}) 