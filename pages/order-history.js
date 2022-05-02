import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import NoOrder from '../components/NoOrder';
import style from '../styles/OrderHistory.module.scss';

const OrderHistory = () => {
  const [numberOfOrder, setNumberOfOrder] = useState(0);

  useEffect(() => {
    setNumberOfOrder(Math.floor(Math.random() * 150) + 50);
  }, []);

  const { order, isPaid, street, house, date, hours, minutes } = useSelector(
    (state) => state.order,
  );
  const { cartTotalAmount } = useSelector((state) => state.cart);

  return (
    <>
      {order.length ? (
        <div className={style.container}>
          <h2 className={style.header}>Заказ № {numberOfOrder} </h2>
          <div className={style.orderInfo}>
            <div className={style.time}>
              <b>
                Заказ принят {date} в {hours}:{minutes}
              </b>
            </div>
            <div className={style.order}>
              {order.length &&
                order.map((item) => (
                  <div className={style.thead} key={item.id}>
                    <div>{item.name}</div>
                    <div>{item.price}</div>
                    <div>{item.cartQuantity}</div>
                    <div>{item.price * item.cartQuantity}</div>
                  </div>
                ))}
            </div>
            <div className={style.adress}>
              <b>
                {' '}
                {isPaid
                  ? `К оплате ${cartTotalAmount}`
                  : `Заказ оплачен на сумму ${cartTotalAmount}`}
              </b>
            </div>
            <div className={style.adress}>
              <b>
                Адрес доставки {street}, {house}
              </b>
            </div>
          </div>
          <div className={style.contacts}>
            <p>Есть вопросы?</p>
            <p>Звони 8 912 123 45 56</p>
          </div>
        </div>
      ) : (
        <NoOrder />
      )}
    </>
  );
};

export default OrderHistory;
