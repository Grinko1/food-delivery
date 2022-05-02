import Image from 'next/image';
import style from '../styles/FoodList.module.scss';
import { allFood, chicken, rice, fish, ice, fruicts, curry, drinks } from '../db';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { addToCart, getTotals } from '../features/cartSlice';
import { useRouter } from 'next/router';

const FoodList = () => {
  const [searhValue, setSearchValue] = useState('');
  const { search } = useSelector((state) => state.search);
  useEffect(() => {
    setSearchValue(search);
  }, [search]);

  //btn cart to csroll
  const [scroll, setScroll] = useState(0);
  const router = useRouter();
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  //sort by category

  const [products, setProducts] = useState(allFood);
  const [searcedProducts, setSearcedProducts] = useState(products);
  const { activeCategory } = useSelector((state) => state.category);
  const dispatch = useDispatch();

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
    } else if (activeCategory === 'curry') {
      setProducts(curry);
    } else if (activeCategory === 'drinks') {
      setProducts(drinks);
    } else {
      setProducts(allFood);
    }
  }, [activeCategory]);

  useEffect(() => {
    if (search.length > 2) {
      const productsBySearch = products.filter((item) =>
        item.name.toLowerCase().includes(searhValue.toLowerCase()),
      );

      setSearcedProducts(productsBySearch);
    } else {
      setSearcedProducts(products);
    }
  }, [searhValue, products]);

  const handleAddToCart = (item) => {
    dispatch(addToCart({ ...item, cartQuantity: +1 }));
    dispatch(getTotals());
  };

  return (
    <div className={style.container}>
      <div className={style.food}>
        {searcedProducts.map((item) => (
          <div className={style.item} key={item.id}>
            <Link href={`/dish/${item.id}`}>
              <a>
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
              </a>
            </Link>

            <div className={style.cart}>
              <p className={style.price}>{item.price}p</p>
              <p
                className={style.inCart}
                data-tooltip="В корзину"
                onClick={() => handleAddToCart(item)}>
                <AiOutlineShoppingCart />
                {item.cartQuantity > 0 && <i>{item.cartQuantity}</i>}
              </p>
            </div>
          </div>
        ))}
      </div>
      {scroll >= 60 ? (
        <button className={style.btn} onClick={() => router.push('/cart')}>
          <AiOutlineShoppingCart />
          <span className={style.qtt}>{cartTotalQuantity}</span>
        </button>
      ) : (
        ''
      )}
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
