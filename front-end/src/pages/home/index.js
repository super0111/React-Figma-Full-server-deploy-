import { useState, useEffect, useContext } from 'react';
import { Styles } from "./style/homeStyle";
import { Grid } from '@mui/material';
import SearchBox from './components/searchBox';
import AppList from "../../components/appList";
import {
    allPatternItems
} from '../../assets/config';
import IndeterminateCheckbox from '../../components/checkBox';
import { ReactComponent as SearchIcon } from '../../assets/img/user/home/search.svg';
import ImageView from '../../components/imageView';
import Footer from '../../components/footer';
import { 
    getAllProducts, 
    getSearchResults,
    sendVisitor,
} from '../../api/home';
import OutsideClickHandler from './components/outSide';
import { withStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const MoreButton = withStyles((theme) => ({
    root: {
        color: `var(--white) !important`,
        fontFamily: `var(--font-family-pp_telegraf-regular) !important`,
        fontSize: `var(--font-size-24) !important`,
        fontWeight: `400px !important`,
        fontStyle: 'normal !important',
        width: '221px !important',
        height: '53px !important',
        borderRadius: '63px !important',
        cursor: 'pointer !important',
        lineHeight: '24px !important',
        backgroundColor: `var(--black-normal) !important`,
        letterSpacing: '0px !important',
        whiteSpace: 'nowrap !important',
        marginBottom: '50px !important',
        textTransform: 'none !important',
        transition: '.3s ease !important',
        '&:hover': {
            opacity: '.7 !important',
            backgroundColor: `var(--black-hover) !important`,
        },
    },
  }))(Button);

export default function Home(){
    const navigate = useNavigate();
    const [showPatternList, setShowPatternList] = useState(false);
    const [searchKey, setSearchKey] = useState('');
    const [showSearchKey, setShowSearchKey] = useState('');
    const [showKeywordList, setShowKeywordList] = useState(false);
    const [popularWebSites, setPopularWebsites] = useState([]);
    const [addedApps, setAddedApps] = useState([]);
    const [popularApps, setPopularApps] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

    const searchFunction = async (key) => {
        setShowKeywordList(false);
        setSearchKey(key);
        if(key === '')
            setShowSearchKey(false);
        else
        {
            setShowSearchKey(true);
            const auth = JSON.parse(localStorage.getItem('auth'));
            const res = await getSearchResults(auth._id, key);
            if(res.data && res.data.searchResults && res.data.searchResults.length > 0)
                setSearchResults(res.data.searchResults);
            else
                setSearchResults([]);
        }
    }

    const viewFullPattern = () => {
        setShowPatternList(!showPatternList);
    };

    const showKeyword = () => {
        setShowPatternList(false);
    }

    useEffect(() => {
        try{
            async function getInitialData(){
                const { mobiles, recents, websites } = await getAllProducts();
                setPopularApps(mobiles);
                setPopularWebsites(websites);
                setAddedApps(recents);
            }
            getInitialData();

            sendVisitor();
        }catch(err){
            console.log(err);
        }
        
    }, []);
    return (
        <Styles>
            <div className='home-before-container'>
                <div className='home-container'>
                    <Grid container>
                        <Grid item sm={8} xs={12}>
                            <div className="topic-txt">
                                Faster, Smarter, Nicer design with Top Top Design.
                            </div>
                        </Grid>
                        <Grid item sm={4} xs={12} className='xs-hide'>
                            <div className="des-group">
                                <div className="des-item">
                                    <img className="des-img" src="/img/user/home/thech-peeps-link.png" alt=""/>
                                    <div>
                                        <div className="des-txt">Need more design works?</div>
                                        <div className="des-color-txt">Check out our job board</div>
                                    </div>
                                </div>
                                <div className="des-item">
                                    <img className="des-img" src="/img/user/home/thech-peeps-learning.png" alt=""/>
                                    <div>
                                        <div className="des-txt">Collect your inspirations</div>
                                        <div 
                                            className="des-color-txt ms-hover"
                                            onClick={() => navigate('/collection')}
                                        >
                                            Access your collections
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                    <SearchBox 
                        setShowKeywordList={setShowKeywordList}
                        showKeywordList={showKeywordList} 
                        showKeyword={showKeyword} 
                        searchFunction={searchFunction} 
                    />
                    <OutsideClickHandler
                        onOutsideClick={() => {
                            setShowPatternList(false)
                        }}
                    >
                        <div className="center-container">
                            <div 
                                className="view-full"
                                onClick={() => viewFullPattern()}
                            >
                                View full pattern list
                            </div>
                            {showPatternList && 
                                <div className="pattern-container">
                                    {allPatternItems && allPatternItems.map((info, idx) => {
                                        return (
                                            <div className='pattern-item'>
                                                <IndeterminateCheckbox info={info} key={idx}/>
                                            </div>
                                        )
                                    })}
                                </div>
                            }
                        </div>
                    </OutsideClickHandler>
                    
                    {showSearchKey && 
                        <div className='keyword-container'>
                            <SearchIcon />
                            <div className='search-keyword'>{searchKey}</div>
                        </div>
                    }
                    {(searchResults && showSearchKey)&&(
                        <>
                            <div className="all-searched-app">
                                <div className="app-list">
                                    <Grid container spacing={window.innerWidth<=500?1:2}>
                                        {searchResults.map((info, idx) => {
                                            return (
                                                <Grid item sm={6} xs={6} md={3} key={idx}>
                                                    <ImageView info={info}/>
                                                </Grid>
                                            )
                                        })}
                                    </Grid>
                                </div>
                            </div>
                            {searchResults.length && 
                                <div className='center-mode'>
                                    <MoreButton>
                                        More
                                    </MoreButton>
                                </div>
                            }
                        </>
                    )}
                </div>
            </div>
            { !(searchResults && searchKey) &&
                <div className='all-app-container'>
                    <div className='mobile-container'>
                        <AppList title='Most popular mobile apps' data={popularApps}/>
                    </div>
                    <div className='added-container'>
                        <AppList title='Just added' data={addedApps}/>
                    </div>
                    <div className='web-container'>
                        <AppList title='Most popular websites' data={popularWebSites}/>
                    </div>
                </div>
            }
            <Footer />
        </Styles>
    )
}