import Image from 'next/image';
import style from '../styles/EmptyCart.module.scss' ;

const EmptyCart = () => {
    return (
        <div className={style.container}>
            <h1 className={style.header}>Вы ещё ничего не выбрали </h1>
            <div className={style.info}>
                <div className={style.left}>
                    <Image 
                    src='/images/cheff.png'
                    width='300'
                    height='300'
                    className={style.img}
                    />
                </div>
                <div className={style.right}>
                    <b>Выберете блюдо и мы начнём готовить в течении 5 минут</b>
                    <p>Доставка в течении 1 часа</p>
                </div>
            </div>
            
        </div>
    );
};

export default EmptyCart;