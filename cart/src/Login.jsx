import { useState } from "react";

import { login, useLoggedIn } from "./cart";

export default function Login() {
    const loggedIn = useLoggedIn();
    const [showLogin, setShowLogin] = useState(false);

    const [username, setUsername] = useState("sally");
    const [password, setPassword] = useState("123");

    if (loggedIn) return null;

    return (<>
        <span onClick={() => setShowLogin(!showLogin)}>
            <i className="ri-fingerprint-line text-2xl" id="showLogin"></i>
        </span>
        { showLogin && (
            <div 
                className="absolute bg-white text-black p-5 border-4 border-blue-800"
                style={{
                    width: 300,
                    top: "2rem",
                    left: -250
                }}
            >
                <input 
                    type="text" 
                    placeholder="Username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    className="border text-sm border-gray-400 p-2 rounded-md w-full"
                />
                <input 
                    type="password" 
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    className="border text-sm border-gray-400 p-2 rounded-md w-full"
                />
                <button 
                    className="bg-green-900 text-white text-sm py-2 px-5 rounded-md"
                    onClick={() => login(username, password)}
                    id="login-btn"
                >
                    Login
                </button>
            </div>
        )}
    </>);

}