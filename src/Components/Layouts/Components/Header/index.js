
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faCoins, faEarthAsia, faEllipsisVertical, faGear, faKeyboard, faSignOut, faUser } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'

import styles from './Header.module.scss';
import images from '~/Access/Images/logo.svg';
import Buttons from '~/Components/Buttons';
import Menu from '~/Components/Popper/Menu';
import { UploadIcon } from '~/Components/Icons';
import Image from '~/Components/Images'
import Search from '../Search';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/@hoaa',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get coins',
        to: '/coin',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        to: '/settings',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log out',
        to: '/logout',
        separate: true,
    },
];

function Header() {
    const currentUser = true
    
    // Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                break;
            default:
        }
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images} alt="Tiktok" />
                 {/* search  */}
                 <Search></Search>

                <div className={cx('actions')}>
                    {
                        currentUser ? (
                            <>
                                <Tippy delay={[0, 300]} content="Upload">
                                <button className={cx('action-btn')}> 
                                    <UploadIcon></UploadIcon>
                                </button>
                                    
                                </Tippy>
                                <div className={cx('current-user')}></div>
                            </>
                        ) : (
                            <>

                                <Buttons text>Upload</Buttons>
                                <Buttons primary >LogIn</Buttons>
                            </>
                        )
                    }
                    <Menu items={ currentUser ? userMenu :  MENU_ITEMS} onChange={handleMenuChange}>
                        {
                            currentUser ? (
                               <Image 
                               fallback= 'https://fullstack.edu.vn/assets/f8-icon-lV2rGpF0.png' src="kkk" className={cx('user-avatar')} alt='Nguyễn Văn A' ></Image>
                            ) : (

                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            )
                        }
                    </Menu>
                </div>

            </div>
        </header >
    );
}

export default Header;