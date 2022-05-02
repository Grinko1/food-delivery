import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { chooseCategory } from '../features/categorySlice';
import { clearSearch, setSearch } from '../features/searchSlice';
import style from '../styles/Search.module.scss';
import { MdOutlineCancel } from 'react-icons/md';

const SearchBlock = () => {
  const { search } = useSelector((state) => state.search);
  const { categories } = useSelector((state) => state.category);

  const [searchValue, setSearchValue] = useState(search);
  const [open, setOpen] = useState(false)

  const dispatch = useDispatch();
  useEffect(() => {
    if (searchValue.length > 2) {
      dispatch(setSearch(searchValue));
    }
  }, [searchValue]);
  const handleCategory = (search) => {
    dispatch(chooseCategory(search));
  };

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };
  const handleRemoveSearch = () => {
    setSearchValue('');
    dispatch(clearSearch());
  };
  return (
    <div className={style.container}>
      <div className={style.search}>
        <input
          placeholder="Введите название..."
          className={style.input}
          value={searchValue}
          onChange={(e) => handleSearch(e)}
        />
        <MdOutlineCancel className={style.removeSearch} onClick={handleRemoveSearch} />
      </div>

      <div className={style.categories}>
        {categories &&
          categories.map((item) => (
            <div
              key={item.id}
              className={style.category}
              onClick={() => handleCategory(item.search)}>
              {item.title}
            </div>
          ))}
      </div>
      <div className={style.hamburger} onClick={() => setOpen(!open)}>
        <div className={style.line} />
        <div className={style.line} />
        <div className={style.line} />
      </div>
      <div className={style.menu} style={{ right: open ? "0px" : "-50vw" }}>
        {categories &&
          categories.map((item) => (
            <div
              key={item.id}
              className={style.category}
              onClick={() => handleCategory(item.search)}>
              {item.title}
            </div>
          ))}
      </div>
    </div>
  );
};

export default SearchBlock;
