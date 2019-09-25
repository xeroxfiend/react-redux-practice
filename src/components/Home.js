import React from 'react'
import {Link} from 'react-router-dom'
import {updateUsername} from '../ducks/userReducer'
import {connect} from 'react-redux'

function Home(props) {
    return (
        <div className="home">
            <input 
            onChange={(e) => props.updateUsername(e.target.value)}
            placeholder='Username' type="text"/>
            <Link to='/characters'>
                <button>
                    Login
                </button>
            </Link>
            Home!
        </div>
    )
}

export default connect(null, {updateUsername})(Home)