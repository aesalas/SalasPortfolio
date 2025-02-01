import React, { useState, useEffect } from 'react'
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const WORDS =[
    "FLABBERGASTED",
    "BAMBOOZLED",
    "CATACLYSMIC",
    "DISCOMBOBULATED",
    "HULLABALOO",
    "KERFUFFLE",
    "LOLLYGAG",
    "NINCOMPOOP",
    "SHENANIGANS",
    "SKEDADDLE",
    "WUMBLE",
    "GOBBLEDYGOOK",
    "HOCUSPOCUS",
    "JIBBERJABBER",
    "MUMBOJUMBO",
    "RIGAMAROLE",
    "SNICKERDOODLE",
    "BANANA",
    "POTATO",
    "UNICORN",
    "PICKLE",
    "KITTY",
    "BUBBLE",
    "DOODLE",
    "GIGGLE",
    "JELLY",
    "NACHOS",
    "PUPPY",
    "SQUIRREL",
    "TACO",
    "WIGGLE",
    "ZEBRA"
]

function WordScramble() {
    
    const [correctWord,setCorrectWord]=useState('');
    const [scrambledWord,setScrambledWord]=useState('');
    const [inputValue,setInputValue] = useState('');
    const [isPlayOn,setIsPlayOn] = useState(false);
    const [message,setMessage] = useState('');
    const handleKeyPress = (event) => {
        // look for the `Enter` keyCode
        if (event.keyCode === 13 || event.which === 13) {
          handleClick(event);
        }
      }



    const selectWord = () => {
        const randIndex = Math.floor(Math.random() * WORDS.length); 
        return WORDS[randIndex];   
    }

    const handleInputChange = (e) => {
      setInputValue(e.target.value.toUpperCase())
    }
    const handleClick = (e) => {
        e.preventDefault();

        if(inputValue !== undefined && inputValue !== ""){
            if(correctWord === inputValue.toUpperCase()){
                setMessage('Correct Answer!'); 
                    
                setInputValue('')
                const word = selectWord();
                const upperWord = word.toUpperCase();
                setCorrectWord(upperWord);
                setScrambledWord(constructScrambledWord(word));

            }else{
                setMessage('Please Try Again!');
            }
        }else{
            setMessage('Please Enter a Word!');
        }
    }
    const constructScrambledWord = (word) => {
        const shuffledArray = word.split('');
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray.join('');
    }
    const handleStartGame = (e) => {
        e.preventDefault()
        setIsPlayOn(true);
        setInputValue('')
        setMessage("");
        const word = selectWord();
        const upperWord = word.toUpperCase();
        setCorrectWord(upperWord);
        setScrambledWord(constructScrambledWord(word));
        
    }
    useEffect(()=>{
        let clearMessage;
        if(message){
            clearMessage = setTimeout(()=>setMessage(''),2000);
        }
        return ()=>{
            if(clearMessage){
              clearTimeout(clearMessage);
              
            }
        };
    },[message]);
return (
    <Col className="word-scramble-card">
        <div>
            {Boolean(message) && (
                <div>
                    <h3>{message}</h3>
                </div>
            )}
            <h1> Unscramble </h1>
            <div>
                {isPlayOn ? (
                    <>
                        <div>
                            <h2 className='popOColor'>{scrambledWord}</h2> 
                        </div>
                        <div>
                            <input className="comment_input " type='text' onKeyPress={handleKeyPress} onChange={handleInputChange} placeholder='Guess the word' value={inputValue} />
                            <div class="divider"/>
                            <Button 
                                className="comment_element" 
                                onClick={handleClick} 
                                
                                type="submit" 
                                value="Enter"> 
                                Enter 
                            </Button>
                        </div>
                    </>
                ) : (
                    <div>
                        <p> </p>
                        <Button onClick={handleStartGame}>Start Game</Button>
                    </div>
                )}
                {isPlayOn && (
                    <div>
                        <p> </p>
                        <Button onClick={handleStartGame}>New Game</Button>
                    </div>
                )}
            </div>
        </div>
    </Col>
)
}

export default WordScramble;