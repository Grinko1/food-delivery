import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTotals } from '../features/cartSlice';
import style from '../styles/Layout.module.scss';
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { BsTruck} from 'react-icons/bs'


const Layout = ({ children }) => {


    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getTotals())
    },[])
   
    const {cartTotalQuantity} = useSelector(state => state.cart)
    const {order} = useSelector(state => state.order)

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
        <div className={style.end}>
           <Link href="/cart">
          <a> <p className={style.cart}><AiOutlineShoppingCart  className={style.cartIcon}/><span className={style.badge2}>{cartTotalQuantity}</span> </p></a>
        </Link>
        <Link href="/order-history">
          <a> <p className={style.cart}><BsTruck  className={style.cartIcon}/><span className={style.badge}>{order.length}</span> </p></a>
        </Link>
        </div>
       
      </div>
      <hr className={style.hr} />

      <main className={style.main}>{children} </main>
    </div>
  );
};

export default Layout;
