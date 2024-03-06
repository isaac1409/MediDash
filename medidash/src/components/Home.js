import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo_MD.png';

const Home = (props) => {
    const { loggedIn, email } = props
    const navigate = useNavigate()

    const onButtonClick = () => {
        if (loggedIn) {
        localStorage.removeItem('user')
        props.setLoggedIn(false)
        } else {
        navigate('/login')
        }
    }

    return (
        <div className="mainContainer">
            <div className={'boxContainer'}>
            <div className={'titleContainer'}>
                <div className="logoContainer">
                        <img className="logo" src={logo} alt="Medidash Logo" />
                    </div>
                <div>MediDash</div>
            </div>
            <br/>
            <div className='textCenter'>Gestión de medicamentos, salud optimizada.</div>
            <div className={'buttonContainer'}>
                <input
                className={'inputButton'}
                type="button"
                onClick={onButtonClick}
                value={loggedIn ? 'Log out' : 'Log in'}
                />
            </div>
            </div>
        </div>
    )
}

export default Home
