import { useState } from 'react'
import './App.css'

function App() {
    const [isPalindrome, setIsPalindrome] = useState("False")

    // @ts-ignore
    const updatePalindrome = (e) => {
        const givenWord = e.target.value
        let result = "False"
        if (givenWord === "" || givenWord === undefined || givenWord.length < 2) {
            result = "..Provide more than 1 character in the box.."
        } else if (givenWord === givenWord.split("").reverse().join("")) {
            result = "True"
        }
        setIsPalindrome(result)
    }
    return (
        <div className="App">
            <div>
                <label>
                    <p>
                        Is Palindrome?
                    </p>
                    {isPalindrome}
                </label>
            </div>
            <input onChange={updatePalindrome} placeholder="Input your word here"/>
        </div>
    )
}

export default App
