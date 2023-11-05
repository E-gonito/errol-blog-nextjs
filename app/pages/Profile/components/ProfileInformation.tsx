'use client'

import { useAuth0 } from "@auth0/auth0-react";
import Image from 'next/image'

const ProfileInformation = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        isAuthenticated ? (
            <>
                <p>{user.name}</p>
                <p>{user.email}</p>
                <img className="h-8 w-auto" src={user.picture} alt={user.name} />
            </>
        ) : (
            <p>Please log in</p>
        )
    );
};

export default ProfileInformation;