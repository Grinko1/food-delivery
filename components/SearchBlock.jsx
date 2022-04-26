import { useDispatch, useSelector } from 'react-redux';
import { chooseCategory } from '../features/categorySlice';
import style from '../styles/Search.module.scss'

const SearchBlock = () => {

    const {categories}= useSelector(state => state.category)
    const dispatch = useDispatch()
    const handleCategory = (search) => {
        dispatch(chooseCategory(search))
    }
    return (
        <div className={style.container}>
            <div className={style.search}>
                 <input placeholder='Введите название...' className={style.input}/>
            </div>
           
            <div className={style.categories}>
                {
                  categories &&  categories.map((item) => (
                        <div key={item.id} className={style.category} onClick={() => handleCategory(item.search)}>{item.title}</div>
                    )
                        
    )
                }

            </div>
        </div>
    );
};

export default SearchBlock;