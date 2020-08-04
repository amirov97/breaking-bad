import React,{useState} from "react";

const Search = (props) =>{

    const [text ,setText] = useState('')
    const onChangeHandler = (e) =>{
        setText(e)
        props.getQuery(e)
    }

    return(
        <section className='search'>
            <form>
                <input
                    type='text'
                    className='form-control'
                    placeholder='Search characters ...'
                    value={text}
                    onChange={e=>onChangeHandler(e.target.value)}
                    autoFocus/>
            </form>
        </section>
    )
}

export default Search