import classNames from 'classnames/bind';
import Button from '~/Components/Buttons';
import styles from './menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick}) {
    // console.log(data)
    return (
              <Button className={cx('menu-item')} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}

export default MenuItem;