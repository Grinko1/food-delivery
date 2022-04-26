import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem'
import style from '../styles/Cart.module.scss'

const cart = () => {
    const cart = useSelector(state=>state.cart.cartItems)

    return (
        <div className={style.conteiner}>
            <h1 className={style.header}>Корзина</h1>
            <div className={style.carts}>
                {
                    cart.length ? (
                        cart.map(item => (
                            <CartItem key={item.id} {...item} />
                        ))
                    ): (
                        <p>В корзине ничего нет</p>
                    )
                }
                 
            </div>
            
        </div>
    );
};

export default cart;