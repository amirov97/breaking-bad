import React from "react";
import CharacterItem from "./character-item";
import Spinner from "../spinner/spinner";

const CharactersGrid = ({items , isLoading}) => {
    return isLoading ? <Spinner /> : <section className='cards'>
        {items.map(item => (
            <CharacterItem key={item.char_id} item={item} />
        ))}
    </section>
}

export default CharactersGrid