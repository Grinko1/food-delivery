import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTotals } from '../features/cartSlice';
import style from '../styles/Layout.module.scss';


const Layout = ({ children }) => {


    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getTotals())
    },[])
   
    const {cartTotalQuantity} = useSelector(state => state.cart)
  return (
    <div className={style.container}>
      <Head>
        <title>East Food</title>
      </Head>

      <nav className={style.header}></nav>
      <div className={style.navbar}>
        <Link href="/">
          <a>EAST FOOD</a>
        </Link>
        <Link href="/cart">
          <a>Корзина {cartTotalQuantity}</a>
        </Link>
      </div>
      <hr className={style.hr} />

      <main className={style.main}>{children} </main>
    </div>
  );
};

export default Layout;
