import './GlobalStyles.scss';
import propTypes from 'prop-types'
// import '~/Components/GlobalStyles/Tailwin.css'
function GlobalStyles({ children }){
    return children;
}
GlobalStyles.propTypes = {
    children : propTypes.node.isRequired
}
export default GlobalStyles;