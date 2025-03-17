import Logo from "../../assets/Logo.tsx";
import './Header.css'
import Refresh from "../../assets/Refresh.tsx";
import Alert from "../../assets/Alert.tsx";


const Header = ({isFetching, error, refresh}: {isFetching: boolean, error: unknown, refresh: void}) => {

    return (
        <div className="header-container">
            <Logo/>
            <div className="refresh-container">
                {isFetching ? <div className="fetching">Идет загрузка данных...</div> : error as string && <div className="error"><Alert/>{error as string}</div>}
                <button className="refresh" onClick={() => refresh}>Обновить <Refresh/></button>
            </div>
        </div>
    )
}

export default Header;