import Footer from "@/layouts/footer"
import Header from "@/layouts/header"
import Menu from "@/layouts/menu"

const MenuPage = () => {
    return (
        <div >
            <Header/>
            <div className="container mx-auto my-8">
            <Menu/>
            </div>
            <Footer/>
        </div>
    )
}

export default MenuPage