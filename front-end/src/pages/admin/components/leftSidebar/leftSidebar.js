import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import { TreeItem, TreeView } from '@mui/lab';
import { ReactComponent as ExpandMoreIcon } from '../../../../assets/img/admin/expand.svg';
import { ReactComponent as CollapseIcon } from '../../../../assets/img/admin/collapse.svg';
import { ReactComponent as LogoIcon } from '../../../../assets/img/logo.svg';
import { sidebar } from '../../../../assets/config';
import './style.css';

const useTreeItemStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    width: 250
  },
  content: {
    flexDirection: "row-reverse",
    height: 48,
    padding: '0px 12px',
    '&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused': {
      backgroundColor: 'rgba(85, 66, 246, 0.1)',
    },
    '&.MuiTreeItem-label': {
      paddingLeft: 0,
    },
    width: 226,
    backgroundColor: '#FBFAFC',
    '&.MuiCollapse-root':{
      paddingLeft: 0,
      marginLeft: 0,
    }
  },
  childContent: {
    padding: 0,
    height: 48,
    '&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused': {
      backgroundColor: 'rgba(85, 66, 246, 0.1)',
    },
    '& .MuiTreeItem-label': {
      paddingLeft: 0,
    },
    '& .MuiTreeItem-iconContainer':{
      display: 'none',
    }
  },
  labelRoot: {
    display: "flex",
    alignItems: "center",
    margin: 0,
    padding: 12,
  },
  childLabelRoot: {
    display: "flex",
    alignItems: "center",
    margin: 0,
    paddingLeft: 50,
  },
  labelIcon: {
    marginRight: 6,
  },
  labelText: {
    fontWeight: "inherit",
    flexGrow: 1
  },
  logoIcon: {
    padding: '20px 32px 47px 32px',
  }
}));


function StyledTreeItem(props) {
  const classes = useTreeItemStyles();
  const { labelText, labelIcon: LabelIcon, ...other } = props;

  return (
    <TreeItem
      label={
        <div className={classes.labelRoot}>
          {LabelIcon && <LabelIcon color="action" className={classes.labelIcon} />}
          
          <Typography variant="body2" className={classes.labelText}>
            {labelText}
          </Typography>
        </div>
      }
      classes={{
        content: classes.content,
      }}
      {...other}
    />
  );
}


function StyledChildTreeItem(props) {
  const classes = useTreeItemStyles();
  const { labelText, labelIcon: LabelIcon, ...other } = props;

  return (
    <TreeItem
      label={
        <div className={classes.childLabelRoot}>
          {LabelIcon && <LabelIcon color="action" className={classes.labelIcon} />}
          
          <Typography variant="body2" className={classes.labelText}>
            {labelText}
          </Typography>
        </div>
      }
      classes={{
        content: classes.childContent
      }}
      {...other}
    />
  );
}



export default function LeftSideBar({children}) {
  const navigate = useNavigate();
  const classes = useTreeItemStyles();
  const [expanded, setExpanded] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState([]);

  const handleChange = (event, nodes) => {
    setExpanded(nodes);
  };

  useEffect(() => {
    if(window.location.href.indexOf('products/all') >= 0){
      setExpanded(['1']);
    }else{
      const urlParams = window.location.href.split("/").pop()
      sidebar.forEach((item) => {
          if(item.label.toLowerCase() === urlParams.toLowerCase()){
              setCurrentPage(item.label);
          }
      })
    }
     
}, [children]);

  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<CollapseIcon />}
      defaultExpandIcon={<ExpandMoreIcon />}
      expanded={expanded}
      onNodeToggle={handleChange}
      style={{width: 250}}
    >
      <LogoIcon className={classes.logoIcon}/>
      {sidebar.map((item, idx) => {
        return (
          <React.Fragment key={idx}>
            <StyledTreeItem 
              nodeId={(idx).toString()}
              labelText={item.label} 
              labelIcon={currentPage === item.label?item.focusIcon:item.icon}
              onClick={() => idx !== 1?navigate(`${item.path}`):undefined}
            >
              {idx === 1 &&
                <React.Fragment>
                    <StyledChildTreeItem
                      nodeId={(sidebar.length).toString()}
                      labelText="All Products"
                      onClick={() => navigate(`${item.path}/products/all`)}
                    />
                    <StyledChildTreeItem
                      nodeId={(sidebar.length + 1).toString()}
                      labelText="Tag Management"
                      onClick={() => navigate(`${item.path}/tagmanagement`)}
                    />
                </React.Fragment>
              }
            </StyledTreeItem>
          </React.Fragment>          
        )
      })}
    </TreeView>
  );
}
