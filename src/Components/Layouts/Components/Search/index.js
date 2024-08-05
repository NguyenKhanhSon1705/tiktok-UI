import AccountItem from '~/Components/AccountItems';
import { Wrapper as PopperWrapper } from '~/Components/Popper';
import HeadlessTippy from '@tippyjs/react/headless';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect, useRef } from 'react';
import * as searchService from '~/api-Service/searchService'
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

    const debounced = useDebounce(searchValue, 500)
    useEffect(() => {
        if (debounced.trim() === "") {
            setSearchResult([])
            return;
        }
        const fetchApi = async () => {
            setLoading(true)
            const res = await searchService.Search(debounced);
            setSearchResult(res)
            setLoading(false)
        }
        fetchApi()

    }, [debounced]);

    function handleHidenResult() {
        setShowResult(false)
    }
    const handleChange = e => {
        const searchValue = e.target.value

        if(!searchValue.startsWith(' ')){
            setSearchValue(e.target.value)
        }
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
                    onChange={handleChange}
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