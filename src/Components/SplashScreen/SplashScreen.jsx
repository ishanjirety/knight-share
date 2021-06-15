import "./SplashScreen.css";
import Banner from '../../Svg/Banner.svg'
import Loader from '../../Svg/Loader.svg'
import Wave from '../../Svg/Wave.svg'
export function SplashScreen({ toggle }) {
    return (
        <div className={toggle ? "splash-screen" : "splash-screen hide"} >
            <h1 className="splash-screen-heading">KnightShare</h1>
            <img src={Banner} className="banner-img" alt="" />
            <h1>Fun-Learn platform for your chess community</h1>
            <div className="banner-loader"><p>Loading</p><img src={Loader} className="loader" alt="" /></div>
            <img className="wave" src={Wave} alt="" />
        </div>
    );
}