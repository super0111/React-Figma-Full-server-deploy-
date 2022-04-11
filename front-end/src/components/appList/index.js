import AppCard from "../appCard/appCard";
import { Grid } from '@mui/material';
import { Styles } from './style/appListStyle'

export default function AppList({title, data}){
    return (
        <Styles>
            <div className="app-list-conatiner">
                <div className="title">
                    {title}
                </div>
                <div className="app-list">
                    {/* <Grid container spacing={3}>
                        {data && data.map((info, idx) => {
                            return (
                                <Grid item sm={6} xs={12} md={4} key={idx}>
                                    <AppCard info={info}/>
                                </Grid>
                            )
                        })}
                    </Grid> */}
                    {data && data.map((info, idx) => {
                            return (
                                // <Grid item sm={6} xs={12} md={4} key={idx}>
                                    <AppCard info={info} key={idx}/>
                                // </Grid>
                            )
                    })}
                </div>
            </div>
        </Styles>
        
    )
}