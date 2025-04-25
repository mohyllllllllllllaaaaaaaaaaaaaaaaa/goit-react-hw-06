import css from './SearchBox.module.css';


const SearchBox = ({value, onSearch}) => {
   
    return (
        <div className={css.searchbox}>
            <p className='text'>Find contact by name</p>
        <input className='search'
        type="text"
        placeholder="Serch contacts..."
        onChange={onSearch}
        value ={value}/>
        </div>
    )
    };
    export default SearchBox;