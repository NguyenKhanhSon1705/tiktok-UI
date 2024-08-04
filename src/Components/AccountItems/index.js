import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Image from '~/Components/Images'

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/daabb3492fb60065fb43903c6239cd39.jpeg?lk3s=a5d48078&nonce=86445&refresh_token=c7c8e67db788f971efb7d4dafb095d4e&x-expires=1722042000&x-signature=DLgIXyJ3lCiBHplhEru6Q3oBRjU%3D&shp=a5d48078&shcp=81f88b70"
                alt="Hoaa"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;