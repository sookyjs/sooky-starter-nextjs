"use client"

const Dashboard = () => {
    
    const token = localStorage.getItem('token')

    if (!token) {
        return (
            <div>
                <p>Not authorized</p>
            </div>
        );
    }

    const logout = async () => {    
        localStorage.removeItem('token')
        window.location.reload()
    }

    return (
        <div>
        <p>Protected</p>
        <button onClick={logout}>
            Logout
        </button>
        </div>
    );
}

export default Dashboard;
