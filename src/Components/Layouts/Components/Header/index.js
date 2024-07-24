import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

import style from './Header.module.scss';

import images from '~/Access/Images/logo.svg';

const cx = classNames.bind(style)
function Header() {
    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div>
                <img src={images} alt="Tiktok" />
            </div>
            <div className={cx('search')}>
                <input placeholder="Search accounts and videos" spellCheck={false} />
                <button className={cx('clear')}>
                    <FontAwesomeIcon icon={faCircleXmark} />
                </button>
                <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
            <div className={cx('actions')}></div>
        </div>
    </header>
}
export default Header