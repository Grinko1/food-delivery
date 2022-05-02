import Image from 'next/image';
import Link from 'next/link';
import style from '../styles/NoOrder.module.scss';

const NoOrder = () => {
    return (
        <div className={style.container}>
              <div className={style.img}>
              <Image
            src='/images/hungry.png'
            width='200'
            height='200'
            />  
           </div>
           <div className={style.title}>
               <h2>Вы ещё ничего не заказывали</h2>
               <p><Link href='/'>
                   <a>Вернуться к меню</a>
                   </Link></p>
               </div> 
         
           
            
        </div>
    );
};

export default NoOrder;