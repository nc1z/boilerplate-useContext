import { createContext, useContext, useState, useEffect } from "react";

// Declare your types here for your context props that are being passed down. In this example, user and setUser is being passed down.
// Hence user will be defined using the interface
// setUser will be defined as React.Dispatch<React.SetStateAction<User>>
// Tip: For ambiguous types, hover over code.

interface User {
  data: {
    id: string;
    email: string;
    customerStripeId: string;
  } | null;
  error: string | null;
  loading: boolean;
}

// Give context default values, based on the interface defined
const UserContext = createContext<
  [User, React.Dispatch<React.SetStateAction<User>>]
>([{ data: null, loading: true, error: null }, () => {}]);

export const UserProvider = ({ children }: any) => {
  // Global State with default values
  const [user, setUser] = useState<User>({
    data: null,
    loading: true,
    error: null,
  });

  // Adding any more props or methods into value will require updating of createContext's type and default values
  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
