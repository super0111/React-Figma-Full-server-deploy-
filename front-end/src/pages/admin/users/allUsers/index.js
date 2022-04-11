import { useCallback, useEffect, useState } from 'react';
import SearchBox from '../../components/searchBox';
import {Styles} from './style';
import { ReactComponent as DeleteRed } from '../../../../assets/img/admin/delete_red.svg';
import { ReactComponent as AddIcon } from '../../../../assets/img/user/collection/add.svg';

import { withStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import CustomedTabs from '../../components/customedTab';
import UserTable from './userTable';
import { useNavigate } from 'react-router-dom';
import {
    getAllUsers,
    getActiveUsers,
    getNewUsers,
    getSuspendedUsers,
    deleteUsers,
} from '../../../../api/admin/users';

const DeleteButton = withStyles((theme) => ({
    root: {
        padding: 0,
        margin: '0px 24px',
        color: `var(--white) !important`,
        background: 'rgba(252, 52, 0, 0.1)',
        borderRadius: 4,
        cursor: 'pointer !important',
        display: 'flex !important',
        alignItems: 'center !important',
        justifyContent: 'center !important',
        height: '48px !important',
        minWidth: 42,
        width: '42px !important',
        textTransform: 'none !important',
        transition: '.3s ease !important',
        '&:hover': {
            opacity: '.7 !important',
            backgroundColor: `var(--warnig) !important`,
        },
    },
}))(Button);


const AddUser = withStyles((theme) => ({
    root: {
        marginLeft: '14px !important',
        height: '48px !important',
        display: 'flex !important',
        padding: '0px 17px !important',
        alignItems: 'center !important',
        justifyContent: 'center !important',
        backgroundColor: `var(--main) !important`,
        borderRadius: '24px !important',
        cursor: 'pointer !important',
        textAlign: 'center !important',
        width: '177px !important',
        textTransform: 'none !important',
        transition: '.3s ease !important',
        color: `var(--white) !important`,
        fontFamily: `var(--font-family-pp_telegraf-regular) !important`,
        fontSize: `var(--font-size-m) !important`,
        fontWeight: '400px !important',
        fontStyle: `normal !important`,
        '&:hover': {
            opacity: '.7 !important',
            backgroundColor: 'var(--blue-hover) !important',
        },
        '& .icon': {
            marginRight: 8,
        }
    },
  }))(Button);

export default function AllUsers(){
    const navigate = useNavigate();
    const [keyword, setKeyword] = useState('');
    const [users, setUsers] = useState([]);
    const [selected, setSelected] = useState([]);

    const searchUser = () => {

    }

    const deleteUser = async() => {
        console.log(selected);
       const res = await deleteUsers(selected);
       setUsers(res);
    }

    const handleTabs = async (val) => {
        if(val === 0){
            const res = await getAllUsers();
            setUsers(res);
        }else{
            if(val === 1){
                const res = await getNewUsers();
                setUsers(res);
            }else{
                if(val === 2){
                    const res = await getActiveUsers();
                    setUsers(res);
                }else{
                    if(val === 3){
                        const res = await getSuspendedUsers();
                        setUsers(res);
                    }
                }
            }
        }
    }

    const getInitialData = useCallback(async() => {
        const res = await getAllUsers();
        setUsers(res);
    }, [])

    useEffect(() => {
        getInitialData();
    }, [getInitialData])

    return (
        <Styles>
            <div className='all-users-header'>
                <div className='topic'>
                    All Users
                </div>
                <div className='action-group'>
                    <SearchBox 
                        keyword={keyword}
                        setKeyword={setKeyword}
                        searchUser={searchUser}
                    />
                    <DeleteButton onClick={deleteUser}>
                        <DeleteRed />
                    </DeleteButton>
                    <AddUser onClick={() => navigate('/admin/users/add')}>
                        <AddIcon className='icon'/>
                        <span>Add User</span>
                    </AddUser>
                </div>
            </div>
            <CustomedTabs handleTabs={handleTabs}/>
            {users && users.length > 0 && 
                <UserTable 
                    users={users}
                    selected={selected}
                    getInitialData={getInitialData}
                    setSelected={setSelected}
                />
            }
        </Styles>
    )
}