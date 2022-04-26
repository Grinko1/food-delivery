import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { allFood } from "../../db";
import { addToCart } from "../../features/cartSlice";
import style from '../../styles/FoodDetail.module.scss'


const FoodDetail = () => {
    const {query} = useRouter()
    const [cartQuantity, setCartQuantity] = useState(1)
    const [dish, setDish] = useState(
        {
        id: '',
        name: '',
        img:'',
        price:0,
        weigth:0,
        ingred:[]
    }
    )

    const [compound, setCompound] = useState()
    const [loading, setLoading] = useState(false)
 
    const dispatch = useDispatch()
    const handleAddToCart = () => {
        console.log({...dish,cartQuantity})
        dispatch(addToCart({...dish,cartQuantity}))
    }

    useEffect(()=>{
        setLoading(true)
        const temp =allFood.filter((item) => item.id === query.id)
        setDish(temp[0]) 
        temp[0]?.ingred ? setCompound(temp[0].ingred) : []
        setLoading(false)
 
    },[query])


  

    return (
    
        <div className={style.container}>
            <div className={style.first}>
            {
                dish === undefined ? (<p>loaging..</p>): (
                    <>
                     <div className={style.left}>
                         <div className={style.centerImg}>
                          <img
                src={dish.img}
                className={style.img}
                />    
                         </div>
               
            </div>
            <div className={style.rigth}>
                <div className={style.info}>
                      <h1 className={style.name}>{dish.name}</h1>
                      <div className={style.priceAndWeigth}>
                         <div>Вес: <b>{dish.weigth}г</b></div> 
                    <div> Цена: <b>{dish.price}р</b></div>  
                      </div>
                   
                   
                    {
                        compound ? (
                            <div className={style.compound}><b>Состав: </b>{ compound.map(i => (
                            <span className={style.compoundItem} key={i}>{i}, </span>
                            ))} </div> ) : ''
                    }
                </div>
                  
            </div>

            </>
                )
            }
            </div>
           <div className={style.order}>
               <div className={style.deliv}><b>Доставка в течении 1 часа*</b></div>
           <div className={style.btnDiv}>
                   <button className={style.btn} onClick={handleAddToCart}>В корзину</button>
           </div>
               
   
           </div>
            
        </div>
    );
};

export default FoodDetail;