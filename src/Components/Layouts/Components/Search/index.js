import AccountItem from '~/Components/AccountItems';
import { Wrapper as PopperWrapper } from '~/Components/Popper';
import HeadlessTippy from '@tippyjs/react/headless';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './Search.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDebounce } from '~/Hook';
const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef()

    const debounced = useDebounce(searchValue , 800)
    useEffect(() => {
        if (debounced.trim() === ""){
            setSearchResult([])
            return;
        } 
        setLoading(true)
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounced)}&type=less`)
            .then(res => res.json())
            .then(res =>{
                setSearchResult(res.data)
                setLoading(false)
            })
            .catch(() => setLoading(false))

    }, [debounced]);

    function handleHidenResult() {
        setShowResult(false)
    }

    return (<div>
        <HeadlessTippy
            interactive
            onClickOutside={handleHidenResult}
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        {searchResult.map(item => (<AccountItem key={item.id} data={item} />))}

                    </PopperWrapper>
                </div>
            )}
        >
            <div className={cx('search')}>
                <input
                    value={searchValue}
                    ref={inputRef}
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    onChange={e => setSearchValue(e.target.value)}
                    onFocus={() => setShowResult(true)}
                />
                {searchValue && (
                    <button className={cx('clear')} onClick={() => {
                        setSearchValue('')
                        inputRef.current.focus()
                        setSearchResult([])
                    }}>
                        {!loading && <FontAwesomeIcon icon={faCircleXmark} />}
                    </button>
                )}

                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </HeadlessTippy>
    </div>)

}
export default Search