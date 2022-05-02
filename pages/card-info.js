import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setTimeOrder } from '../features/orderSlice';
import style from '../styles/CardInfo.module.scss';


const CreditCard = () => {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [month, setMonth] = useState('');
  const[year, setYear] = useState('')
  const [cvc, setCvc] = useState('');
  const [error, setError] = useState('')
  const router = useRouter()


  const dispatch = useDispatch()

 

  const hours = new Date().getHours()
  const minutes = new Date().getMinutes()


  function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }
  
  function formatDate(date) {
    return [
      padTo2Digits(date.getDate()),
      padTo2Digits(date.getMonth() + 1),
      date.getFullYear(),
    ].join('/');
  }
  
const date =formatDate(new Date())


  const handlePaid = () => {
    const data = {date, hours, minutes}
    if(number !== '' && name !== '' && month  !== '' && year !== '' && cvc !== '' ){
      setError('')
      dispatch(setTimeOrder(data))
      router.push('/order-history')
    } else{
      setError('Заполните все поля!')
    }

  }


  return (
    <>
    <div className={style.container}>
      <div className={style.img}>
        <Image src='/images/visa.png'
        width='400'
        height='350'
        objectFit='contain'
        />
      </div>

      <br />
      <form className={style.form}>
        <div className={style.input}>
          <label htmlFor="name">Номер карты</label>
          <input  type="tel" maxLength='16' pattern="[0-9]{10}" value={number} onChange={e => setNumber(e.target.value)} />
        </div>
        <div className={style.input}>
          <label htmlFor="name">Имя держателя</label>
          <input  type="text" name="name" value={name} onChange={e=> setName(e.target.value)} />
        </div>
        <div className={style.block}>
        <div className={style.inputBlock}>
        <label htmlFor="month" className={style.labelBlock}>Срок</label>
        <select
           
              name="expiry"
              className={style.select}
              onChange={e => setMonth(e.target.value)}
     
            >
              <option value=" ">Месяц</option>
              <option value="01">Янв</option>
              <option value="02">Фев</option>
              <option value="03">Март</option>
              <option value="04">Апр</option>
              <option value="05">Май</option>
              <option value="06">Июнь</option>
              <option value="07">Июль</option>
              <option value="08">Авг</option>
              <option value="09">Сен</option>
              <option value="10">Окт</option>
              <option value="11">Ноя</option>
              <option value="12">Дек</option>
            </select>
            <select
              className={style.select}
              name="expiry"
              onChange={e =>setYear(e.target.value)}
   
            >
              <option value=" ">Год</option>
              <option value="22">2022</option>
              <option value="23">2023</option>
              <option value="24">2024</option>
              <option value="25">2025</option>
              <option value="26">2026</option>
              <option value="27">2027</option>
              <option value="28">2028</option>
              <option value="29">2029</option>
              <option value="30">2030</option>
            </select>
        </div>
        <div className={style.inputBlock}>
          <label htmlFor="name" className={style.labelBlock}>cvc</label>
   
          <input
              type="number"
              name="cvc"
              maxLength="3"
              className={style.cvc}
              value={cvc}
              onChange={e => setCvc(e.target.value)}
              pattern="\d*"
              />
        </div>
        </div>

      </form>
      
    </div>
    {
      error !== '' ? (  <div className={style.error}>{error}</div>) : ''
    }
  
    <div className={style.submit}>
  
        <button className={style.btn} onClick={handlePaid}>Оплатить</button>
      </div>
    </>
  );
};
export default CreditCard;
