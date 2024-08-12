import Header from "~/Layouts/Components/Header";
import Sidebar from "./Sidebar";
import classNames from "classnames/bind";
import style from './DefaultLayout.module.scss'
import propTypes from 'prop-types'
const cx =  classNames.bind(style)



function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header></Header>
            <div className={cx('container')}>
                <Sidebar></Sidebar>
                <div className={cx('content')}>
                    {children}
                </div>
            </div>
        </div>
    )
}
DefaultLayout.propTypes = {
    children: propTypes.node.isRequired
}
export default DefaultLayout