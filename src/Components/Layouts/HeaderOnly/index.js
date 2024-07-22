import Header from "~/Components/Layouts/Components/Header";
function HeaderOnly({ children }) {
    return (
        <div>
            <Header></Header>
            <div className="container">
                    {children}
            </div>
        </div>
    )
}
export default HeaderOnly