import Image from 'next/image';
import style from '../styles/CartItem.module.scss';
import { AiOutlinePlus, AiOutlineMinus, AiOutlineDelete } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decreaseCart, getTotals, removeFromCart } from '../features/cartSlice';

const CartItem = ({...item} ) => {
  const dispatch = useDispatch()

  const handleRemoveFromCart = (item) => {
    dispatch(decreaseCart(item))
    dispatch(getTotals())
}
const handleAddToCart = (item) => {
  dispatch(addToCart(item)) 
    dispatch(getTotals())
}
const handleDeleteAll = (item) => {
  dispatch(removeFromCart(item))
  dispatch(getTotals())
}

  return (
    <div className={style.container}>
      <div className={style.img}>
          {
              item &&  <img src={item.img} className={style.img} />
          }
       
      </div>

      <div className={style.rigth}>
        <div className={style.info}>
          <h2 className={style.name}>{item.name}</h2>
          <div className={style.weigth}>
              <p>{item.weigth}г</p>
          <p>{item.price}р</p>
          </div>
        
        </div>
        <div className={style.qtt}>
          <div className={style.add}>
          <AiOutlineMinus  onClick={() =>handleRemoveFromCart(item)}/>
          </div>{' '}
          <span>{item.cartQuantity}</span>
          <div className={style.add}>
            
            <AiOutlinePlus  onClick={()=>handleAddToCart(item)}/>
          </div>
        </div>
        <div className={style.total}>{item.price * item.cartQuantity}р </div>

        <div className={style.delete}>
          <AiOutlineDelete onClick={() => handleDeleteAll(item)}/>
        </div>
      </div>

    </div>
  );
};

export default CartItem;
