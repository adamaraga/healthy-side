import {FaLongArrowAltRight} from "react-icons/fa";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

const Home = (props) => {
     const {auth} = props
     if (auth.uid) return <Redirect to='/dashboard' />

    return (
        <div className="home">
            <div className="site-detail">
            <h1 className='grey-text text-darken-2'>
                EASY ACCESS TO PROFESSIONAL HEALTH TIP
            </h1>
            <p className="header-detail grey-text text-darken-2" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi est deleniti cum adipisci veniam minima sapiente ducimus ab? Est, modi!.</p>
            <Link to="/signup" className='home-btn'>JOIN NOW <FaLongArrowAltRight className='arrow' /></Link>

            </div>
            
            <div className="home-image">
                {/* <img src={img} alt="health"/> */}
            </div>

            {/* animation */}
        </div> );
}
 
const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        
    }
}


export default connect(mapStateToProps)(Home);