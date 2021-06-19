import React from 'react'

function Header() {
    return (
        <div className="header flex justify-between items-center p-4 bg-green-400">
            <div className="left-items">
                <h3 className="text-xl text-white tracking-wide">Todo App</h3>
            </div>
            <div className="right-items">
                <input type="text" placeholder="Search..." id="searchInput" className="rounded-sm 
                mx-4 px-2 py-1 w-56"/>
                <button className="rounded px-3 py-1 hover:bg-green-600 bg-green-500 text-white">
                    SignIn</button>
            </div>
        </div>
    )
}

export default Header
