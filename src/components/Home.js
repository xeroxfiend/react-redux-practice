import React from 'react'
import {Link} from 'react-router-dom'
import {updateUsername} from '../ducks/userReducer'
import {getCharacters} from '../ducks/swapiReducer'
import {connect} from 'react-redux'

function Home(props) {
    return (
        <div className="home">
            <input 
            onChange={(e) => props.updateUsername(e.target.value)}
            placeholder='Username' type="text"/>
            <Link to='/characters'>
                <button onClick={() => props.getCharacters('https://swapi.co/api/people/')}>
                    Login
                </button>
            </Link>
        </div>
    )
}

export default connect(null, {updateUsername, getCharacters})(Home)