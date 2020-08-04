import React,{useState} from "react";

const Search = (props) =>{

    const [text ,setText] = useState('')
    const onChangeHandler = (e) =>{
        setText(e.target.value)
        props.getQuery(e.target.value)
    }

    return(
        <section className='search'>
            <form>
                <input
                    type='text'
                    className='form-control'
                    placeholder='Search characters ...'
                    value={text}
                    onChange={onChangeHandler}
                    autoFocus/>
            </form>
        </section>
    )
}

export default Search