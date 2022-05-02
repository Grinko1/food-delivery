import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from '../components/CartItem'
import EmptyCart from '../components/EmptyCart';
import { decreaseCart } from '../features/cartSlice';
import { newOrder } from '../features/orderSlice';
import style from '../styles/Cart.module.scss'

const Cart = () => {
    const cart = useSelector(state=>state.cart.cartItems)
    const dispatch = useDispatch()
    const router = useRouter()

 const handleOrder = () => {
     dispatch(newOrder(cart))
    router.push('/order')
 }

    return (
        <div className={style.conteiner}>
            <h1 className={style.header}>Корзина</h1>
            <div className={style.carts}>
                {
                    cart.length ? (
                        <>
                        {
                        cart.map(item => (
                            <CartItem key={item.id} {...item}  />
                        ))
                        }
                        <div className={style.order}>
                        <button className={style.btn} onClick={handleOrder}> Заказать </button>
                        </div>
                       </>
   
                    ): (
                        <EmptyCart/>
                    )
                }
                 
            </div>
            
        </div>
    );
};

export default Cart;