import {Navigate, Outlet, useLocation, useNavigate} from "react-router-dom";
import {createContext, useContext, useEffect, useState} from "react";
import {getLoginToken, getLocalToken, clearToken} from "../utils/useAxios";

let AuthContext = createContext(null);

function AuthProvider({children}) {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const [token, setToken] = useState(() => getLocalToken())

    const signin = async (e) => {
        e.preventDefault()
        const loginToken = await getLoginToken(new FormData(e.target))
        if (loginToken) {
            setToken(loginToken)
            navigate("/authHome")
        } else {
            navigate("/signup")
        }
    };

    const signout = async () => {
        clearToken()
        setToken(null);
        navigate("/")
    };

    // hack to prefetch token before renders
    useEffect(() => {
        loading && setLoading(false)
    }, [loading])

    const contextData = {signin, signout, token, setToken};

    // only render after initial load (persist token through page refresh)
    return <AuthContext.Provider value={contextData}>{loading ? null : children}</AuthContext.Provider>;
}


function RequireAuth() {
    let auth = useContext(AuthContext);
    let location = useLocation()
    if (!auth.token) {
        return <Navigate to="/login" state={{from: location}} replace/>;
    }

    return <Outlet/>;
}


export {AuthContext, AuthProvider, RequireAuth}