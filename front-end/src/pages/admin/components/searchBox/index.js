import { Styles } from './style/searchBoxStyle';
import { ReactComponent as SearchIcon } from '../../../../assets/img/admin/search.svg';

export default function SearchBox({keyword, setKeyword, searchCollection}){

    const handleChange = (e) => {
        setKeyword(e.target.value);
    }

    const handleKeyDown = (e) => {
        if(e.code === "Enter")
            searchCollection();
    }

    return (
        <Styles>
            <div className='search-box' >
                <input
                    className='search-input'
                    onChange={e => handleChange(e)}
                    value={keyword}
                    placeholder="Search"
                    onKeyUp={(e) => handleKeyDown(e)}
                />
                <SearchIcon className='search-btn'/>
            </div>
        </Styles>
    )
}