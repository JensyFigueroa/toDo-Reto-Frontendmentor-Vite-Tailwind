import './utils/darkMode'

import FilterTodo from './components/filterTodo/FilterTodo'
import Footer from './components/layout/footer/Footer'
import Header from './components/layout/header/Header'
import Main from './components/layout/main/Main'


const App = () => {
    return (
        <div className="bg-[url(./assets/images/bg-mobile-light.jpg)] bg-no-repeat bg-contain bg-gray-200 min-h-screen dark:bg-[url(./assets/images/bg-mobile-dark.jpg)] dark:bg-gray-900 transition-all duration-1000 md:bg-[url(./assets/images/bg-desktop-light.jpg)] md:dark:bg-[url(./assets/images/bg-desktop-dark.jpg)]"
        >

            <Header />

            <Main />

            <FilterTodo />

            <Footer />

        </div>
    )
}

export default App