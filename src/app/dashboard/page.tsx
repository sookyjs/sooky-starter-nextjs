"use client"

import { useSession, signOut } from "next-auth/react";

const Dashboard = () => {
    
    const { data: session } = useSession()

    if (!session) {
        return <p>Access Denied</p>
    }

    const logout = async () => {
        await signOut()
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
