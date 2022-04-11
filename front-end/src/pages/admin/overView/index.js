import { useCallback, useState } from 'react';
import { adminbanner } from '../../../assets/config';
import BannerItem from './components/banner/bannerItem';
import { Styles } from './style';
import ProductsTable from './components/productsTable';
import UsersTable from './components/usersTable';
import { useEffect } from 'react';
import { 
    getTopProducts, 
    getYearlyData,
    getMonthlyData,
    getDailyData,
    getAllProducts,
    getNewProducts,
    getAllNewProducts,
    getTopUsers,
    getAllUsers,
} from '../../../api/admin/overview';

import SelectBox from './components/selectbox';
import { useNavigate } from 'react-router-dom';

export default function OverView(){
    const navigate = useNavigate();
    const [topProducts, setTopProducts] = useState([]);
    const [newProducts, setNewProducts] = useState([]);
    const [users, setUsers] = useState([]);

    const [keyword, setKeyword] = useState('yearly');
    const [totalUsers, setTotalUsers] = useState('');
    const [visitors, setVisitors] = useState('');
    const [totalProducts, setTotalProducts] = useState('');
    const [newUsers, setNewUsers] = useState('');

    const getChangedData = async(val) => {
        setKeyword(val);
    }

    const getTotalData = useCallback(async() => {
        let resData = {};
        if(keyword === 'yearly'){
            resData = await getYearlyData();
        }else{
            if(keyword === 'monthly')
                resData = await getMonthlyData();
            else
                resData = await getDailyData();
        }
        setTotalUsers(resData.totalUsers);
        setVisitors(resData.visitors);
        setTotalProducts(resData.totalProducts);
        setNewUsers(resData.newUsers);
    }, [keyword])

    const moreAction = () => {

    }
    const refresh = async() => {
        await getTopUsers()
        .then((res) => {
            setUsers(res.users);
        })
        .catch((err) => console.log(err));
    }

    const viewAllProducts = async() => {
        navigate('/admin/products/all');
    }

    const viewAllJustAdded = async() => {
        await getAllNewProducts()
        .then((res) => {
            setNewProducts(res.products);
        })
        .catch((err) => console.log(err));
    }

    const viewAllUsers = async() => {
        await getAllUsers()
        .then((res) => {
            setUsers(res);
        })
        .catch((err) => console.log(err));
    }

    const getInitialData = useCallback( async() => {
        await getTopProducts()
        .then((res) => {
            setTopProducts(res.products);
        })
        .catch((err) => console.log(err));
        await getNewProducts()
        .then((res) => {
            setNewProducts(res.products);
        })
        .catch((err) => console.log(err));
        await getTopUsers()
        .then((res) => {
            setUsers(res.users);
        })
        .catch((err) => console.log(err));

    }, [])

    useEffect(() => {
        getInitialData();
    }, [])

    useEffect(() => {
        getTotalData();
    }, [getTotalData])

    return (
        <Styles>
            <div className='header'>
                <div className='welcom'>
                    Welcome back, Max
                </div>
                <div className='sort'>
                    <SelectBox setKeyword={getChangedData}/>
                </div>
            </div>
            <div className='banner'>
                {adminbanner.map((item, idx) => {
                    return (
                        <BannerItem 
                            info={item}
                            totalUsers={totalUsers}
                            visitors={visitors}
                            totalProducts={totalProducts}
                            newUsers={newUsers}
                            key={idx}
                        />
                    )
                })}
            </div>
            <div className='tables'>
                <ProductsTable 
                    tableName={"Top Poducts"} 
                    topProducts={topProducts}
                    viewAllProducts={viewAllProducts}
                />
                <UsersTable
                    users={users}
                    moreAction={moreAction} 
                    refresh={refresh}
                    viewAllUsers={viewAllUsers}
                />
                <ProductsTable 
                    tableName={"Newly Added Product"}
                    topProducts={newProducts}
                    viewAllProducts={viewAllJustAdded}
                />
            </div>
            
        </Styles>
    )
}