import { Styles } from './style/inputStyle';

export default function SearchInput({keyword, setKeyword, searchCollection}){

    const handleChange = (e) => {
        setKeyword(e.target.value);
    }

    const handleKeyDown = (e) => {
        if(e.code === "Enter")
            searchCollection();
    }

    return (
        <Styles>
            <input
                className='input'
                onChange={e => handleChange(e)}
                value={keyword}
                placeholder="Search Collection..."
                onKeyUp={(e) => handleKeyDown(e)}
            />
        </Styles>
    )
}