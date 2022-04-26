import Head from 'next/head'
import Link from 'next/link';
import style from '../styles/Layout.module.scss'

const Layout = ({children}) => {
    return (
        <div className={style.container}>
            <Head>
                <title>East Food</title>
            </Head>
            <nav className={style.header}>
            </nav>
            <div className={style.navbar}>
        <Link href='/'>
            <a>EAST FOOD</a>
        </Link>
        <Link href='/cart'>
            <a>Корзина</a>
        </Link>

            </div>
            <hr className={style.hr}/>
       
            <main>
                {children}
            </main>
            
        </div>
    );
};

export default Layout;