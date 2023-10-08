import globe_icon from '../globe_icon.png'

export default function Navbar(){
    return(
        <navbar>
            <img src={globe_icon} alt="globe icon" />
            <p>top three places I've visited</p>
        </navbar>
    )
}