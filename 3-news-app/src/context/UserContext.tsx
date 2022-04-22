import React, { createContext, ReactNode, useContext, useState } from "react";
// Types
import { User } from "firebase/auth";

interface UserType {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const userContext = createContext<UserType>({
    user: null,
    setUser: () => {},
});

interface ContextProps {
    children: ReactNode;
}

function UserContextProvider({ children }: ContextProps) {
    const [user, setUser] = useState<User | null>(null);

    const values = { setUser, user };

    return (
        <userContext.Provider value={values}>{children}</userContext.Provider>
    );
}

export default UserContextProvider;

export function useUser() {
    const userCtx = useContext(userContext);

    if (userCtx === undefined) throw new Error("Context must be used inside.");

    return userCtx;
}
