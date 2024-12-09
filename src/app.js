import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Books from './components/books'
import Contact from './components/contact'
import Footer from './components/footer'
import Content from './components/content'
function App() {
    return (
        <Router>
            <div>
                <div className="container-flui">
                    <Navbar />
                    <Routes>
                        <Route exact path='/' Component={Content}></Route>
                        <Route path='/books' Component={Books}></Route>
                        <Route path='/contact' Component={Contact}></Route>
                    </Routes>
                    <Footer />
                </div>
            </div>
        </Router>
    )
}


export default App