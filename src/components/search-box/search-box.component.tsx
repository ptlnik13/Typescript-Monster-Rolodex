import './search-box.styles.css';
import {ChangeEvent, ChangeEventHandler} from "react";

type SearchBoxProps = {
    className: string;
    placeholder?: string;
    onChangeHandler1?: ChangeEventHandler<HTMLInputElement>;
    /* Or you can use below, both are same but below has more power in your hand, you can define what is your output will be. */
    onChangeHandler: (event: ChangeEvent<HTMLInputElement>)=> void;
}

const SearchBox = ({className, placeholder, onChangeHandler}: SearchBoxProps) => (
    <input
        className={`search-box ${className}`}
        type='search'
        placeholder={placeholder}
        onChange={onChangeHandler}
    />
);

export default SearchBox;
