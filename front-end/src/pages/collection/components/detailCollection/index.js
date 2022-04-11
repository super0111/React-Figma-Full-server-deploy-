import { Styles } from './style/detailCollectionStyle';
import { imageList } from '../../../../assets/config';
import ImageViewer from '../imageViewer';
import { useState } from "react";
import { withStyles } from '@mui/styles';
import Button from '@mui/material/Button';

const ViewMoreButton = withStyles((theme) => ({
    root: {
        color: `var(--white) !important`,
        fontFamily: `var(--font-family-pp_telegraf-regular) !important`,
        fontSize: `var(--font-size-24) !important`,
        fontWeight: `400px !important`,
        fontStyle: 'normal !important',
        width: '528px !important',
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
        [`@media screen and (max-width: 768px)`]: {
            color: 'var(--white) !important',
            fontFamily: 'var(--font-family-pp_telegraf-regular) !important',
            fontSize: 'var(--font-size-l) !important',
            fontWeight: '400px !important',
            fontStyle: 'normal !important',
            border: `1px solid var(--purple) !important`,
            width: '275px !important',
            backgroundColor: 'var(--second) !important',
            borderRadius: '100px !important',
          }
    },
  }))(Button);

export default function DetailCollection(){
    const [images, setImages] = useState(imageList);

    const closeItem = (idx) => {
        const newImages = images.filter((item, index) => {
            if(index === idx){
                return false;
            }
            return true;
        })
        setImages(newImages);
    }

    return (
        <Styles>
            <div className="detail-collection">
                <div className="collection-list">
                    {images && images.map((info, idx) => {
                        return <ImageViewer info={info} index={idx} closeItem={closeItem} key={idx}/>
                    })}
                </div>
            </div>
            <div className="footer">
                <ViewMoreButton>
                    View More
                </ViewMoreButton>
            </div>
        </Styles>
        
    )
}