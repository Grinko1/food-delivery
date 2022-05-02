import { useRouter } from 'next/router';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCustomerInfo } from '../features/orderSlice';
import style from '../styles/Order.module.scss';

const Order = () => {
  const [name, setName] = useState('');
  const [tel, setTel] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [house, setHouse] = useState('');
  const [paymentNow, setPaymentNow] = useState(false);
  const [error, setError] = useState('')
  const { cartTotalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const router = useRouter()

  const { order } = useSelector((state) => state.order);
  const handleOrder = (e) => {
    e.preventDefault();

    const data = { name, tel, email, city, street, house, isPaid: paymentNow };
    if(name !== '' && tel !== '' &&  email !== '' && city !== ''&& street !== '' && house !== ''){
      setError('')
       dispatch(setCustomerInfo(data));
       if(paymentNow === false){
          router.push('/card-info')
       } else {
        router.push('/order-history')
       }
       
    } else {
      setError('Все поля должны быть заполнены!')
    }
   
  };
  return (
    <div>
      <h1 className={style.header}>Оформить заказ</h1>
      <div className={style.container}>
        <div className={style.order}>
          <div className={style.thead}>
            <div><b>название</b></div>
            <div><b>цена</b></div>
            <div><b>кол-во</b></div>
            <div><b>итого</b></div>
          </div>
          {order.length &&
            order.map((item) => (
              <div className={style.thead} key={item.id}>
                <div>{item.name}</div>
                <div>{item.price}</div>
                <div>{item.cartQuantity}</div>
                <div>{item.price * item.cartQuantity}</div>
              </div>
            ))}

          <div className={style.total}>Итого: {cartTotalAmount}</div>
        </div>
        <div className={style.custumer}>
          <h3 className={style.header}>Заполните все поля</h3>
          <form className={style.form} onSubmit={(e) => handleOrder(e)}>
            <div className={style.eachForm}>
              <input
                className={style.input}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Имя"
              />
            </div>
            <div className={style.eachForm}>
              {' '}
              <input
                className={style.input}
                type="tel"
                // pattern="[0-9]"
                value={tel}
                onChange={(e) => setTel(e.target.value)}
                placeholder="Телефон"
              />
            </div>
            <div className={style.eachForm}>
              <input
                className={style.input}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
            <div className={style.eachForm}>
              <input
                className={style.input}
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Город"
              />
            </div>
            <div className={style.eachForm}>
              <input
                className={style.input}
                type="text"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                placeholder="Улица"
              />
            </div>
            <div className={style.eachForm}>
              <input
                className={style.input}
                type="number"
                value={house}
                onChange={(e) => setHouse(e.target.value)}
                placeholder="Дом"
              />
            </div>
            <div className={style.eachForm}>
              <label>Оплата при получении</label>
              <input
                value={paymentNow}
                onChange={() => setPaymentNow(!paymentNow)}
                type="checkbox"
              />
            </div>
            <div className={error !== '' ? style.error : ''}  >
              {error}
            </div>
            <button type="submit" className={style.btn}>
              {!paymentNow ? 'Оплатить' : 'Заказать'}
            </button>
          </form>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Order;
