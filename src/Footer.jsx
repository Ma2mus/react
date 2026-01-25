
function Footer(){
    const year = new Date().getFullYear();
    return(
        <footer>
            <p>&copy; Mazweimus {year}</p>
        </footer>
    )
}

export default Footer