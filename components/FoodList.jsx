import Image from 'next/image';
import style from '../styles/FoodList.module.scss';
import { allFood, chicken, rice, fish, ice, fruicts, curry, drinks } from '../db';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const FoodList = () => {
  const [products, setProducts] = useState(allFood);
  const { activeCategory } = useSelector((state) => state.category);

  useEffect(() => {
    if (activeCategory === 'chicken') {
      setProducts(chicken);
    } else if (activeCategory === 'rice') {
      setProducts(rice);
    } else if (activeCategory === 'fish') {
      setProducts(fish);
    } else if (activeCategory === 'ice') {
      setProducts(ice);
    } else if (activeCategory === 'fruicts') {
      setProducts(fruicts);
    }else if (activeCategory === 'curry') {
        setProducts(curry);
      } else if (activeCategory === 'drinks') {
        setProducts(drinks);
      } else {
          setProducts(allFood)
      }
  }, [activeCategory]);
  console.log(activeCategory);

  return (
    <div className={style.container}>
      <div className={style.food}>
        {products.map((item) => (
          <Link href={`/dish/${item.id}`} key={item.id}>
            <a>
              <div className={style.item}>
                <div className={style.imgCentr}>
                  <Image
                    src={item.img}
                    width="200"
                    height="200"
                    layout="intrinsic"
                    className={style.img}
                  />
                </div>

                <p className={style.name}>{item.name}</p>
                <p className={style.price}>
                  {' '}
                  <mark className={style.mark}>{item.price}p</mark>
                </p>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FoodList;

// export async function getSeverSideProps({req}:NextPageContext){
//     if(!req) {
//         return {cocktails:null}
//     }
//     const res = await fetch('www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
//     const cocktails = await res.json()
//     return { props:{cocktails} }
