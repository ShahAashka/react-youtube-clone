import ReactDOM from "react-dom/client";
import youtubeLogo from "./assets/images/youtubeLogo.png";
import userIcon from "./assets/images/userIcon.png";
import searchIcon from "./assets/images/searchIcon.png";
import "./index.css";

//Functional component
const HeaderComponent = () => (
    <div className="headerMain">
        <img className="logo" src={youtubeLogo}/>
        <div className="searchView">
            <input type="text" className="searchBar" placeholder={'Search'} />
            <button type="button" className="searchButton">
                <img className="searchIcon" src={searchIcon}/>
            </button>
        </div>
        <button type="button" className="profileDiv">
            <img className="profileIcon" src={userIcon}/>
        </button>
    </div>
);
const HorizontalNavBar = () => {

}

const root =  ReactDOM.createRoot(document.getElementById("root"))
root.render(<HeaderComponent />)