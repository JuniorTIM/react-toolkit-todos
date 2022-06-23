import './header-styles.css'
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function Header() {
  
    const [text, setText] = useState('')

    function handleText (e) {
        setText(e.target.value)
    }
    
    const dispatch = useDispatch()

    function handleAdd () {
        if (text !== '') {
        dispatch({type: 'add', payload: text})
        setText('')
        }
    }

    return (
        <div className='header'>
            <input onChange={handleText} value={text} className='input' type="text"></input>
            <button onClick={handleAdd} className='btnAdd'>ADD</button>
        </div>
    );
};

export default Header;