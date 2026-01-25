import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import UserGreetings from "./User.jsx"


import Card from "./Card.jsx"

    function App() {
        return(
            <>
                <Header/>
                <Card name="Matěj" text="Junior Developer"/>
                <Card name="Tata" text="Senior Developer"/>
                <Card text="Debil"/>
                <Footer/>
                <UserGreetings isLog={true}/>
            </>
            
        )        
    }

export default App
