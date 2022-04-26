import Image from 'next/image';
import style from '../styles/CartItem.module.scss';
import { AiOutlinePlus, AiOutlineMinus, AiOutlineDelete } from 'react-icons/ai';
import { useSelector } from 'react-redux';

const CartItem = ({...item}) => {



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
          <p>{item.weigth}г</p>
          <p>{item.price}р</p>
        </div>
        <div className={style.qtt}>
          <div className={style.add}>
          <AiOutlineMinus />
          </div>{' '}
          <span>{item.cartQuantity}</span>
          <div className={style.add}>
            
            <AiOutlinePlus />
          </div>
        </div>
        <div className={style.total}>{item.price * item.cartQuantity}р </div>

        <div className={style.delete}>
          <AiOutlineDelete />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
