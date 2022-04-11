import { Styles } from './style/searchBoxStyle';
import { useState } from 'react';
import { keywords } from '../../../assets/config';
import StyledList from "../../../components/list";
import OutsideClickHandler from './outSide';
import { withStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

const SearchButton = withStyles((theme) => ({
    root: {
        color: `var(--white) !important`,
        position: 'absolute !important',
        right: '-2px !important',
        top: '1px !important',
        backgroundColor: `var(--black-normal) !important`,
        cursor: 'pointer !important',
        textAlign: 'center !important',
        display: 'flex !important',
        alignItems: 'center !important',
        justifyContent: 'center !important',
        width: '112px !important',
        height: '53px !important',
        borderRadius: '63px !important',
        textTransform: 'none !important',
        transition: '.3s ease !important',
        '&:hover': {
            opacity: '.7 !important',
            backgroundColor: `var(--black-hover) !important`,
        },
    },
  }))(Button);

export default function SearchBox({ searchFunction, showKeyword, showKeywordList, setShowKeywordList}){
    const [currentKey, setCurrentKey] = useState('');

    const getSearchResult = () => {
        searchFunction(currentKey);
    }

    const handleChange = (event) => {
        setCurrentKey(event.target.value);
        setShowKeywordList(true);
        showKeyword();
    }

    return (
        <Styles>
            <OutsideClickHandler
                onOutsideClick={() => {
                    setShowKeywordList(false)
                }}
            >
                <div className='search-box' >
                    <input
                        className='search-input'
                        onChange={e => handleChange(e)}
                        value={currentKey}
                        placeholder="Type keyword to search patterns or apps"
                        onClick={() => {showKeyword();setShowKeywordList(true)}}
                    />
                    <SearchButton onClick={getSearchResult}>
                        <SearchIcon />
                    </SearchButton>
                    {showKeywordList && 
                        <StyledList data={keywords} setCurrentKey={setCurrentKey} setShowKeywordList={setShowKeywordList}/>
                    }
                </div>
            </OutsideClickHandler>
        </Styles>
    )
}