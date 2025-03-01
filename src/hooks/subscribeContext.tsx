import { useContext, createContext, useState, ReactNode } from "react";

// Define the type for the context value
interface SubscribeContextType {
  isSubscribed: boolean;
  setIsSubscribed: React.Dispatch<React.SetStateAction<boolean>>;
}

// Provide a default value (empty object with appropriate types)
const defaultContextValue: SubscribeContextType = {
  isSubscribed: false, // default value
  setIsSubscribed: () => {}, // empty function as default
};

const SubscriberContext =
  createContext<SubscribeContextType>(defaultContextValue);

interface SubscribeProviderProps {
  children: ReactNode;
}

const SubscribeProvider = ({ children }: SubscribeProviderProps) => {
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);

  return (
    <SubscriberContext.Provider value={{ isSubscribed, setIsSubscribed }}>
      {children}
    </SubscriberContext.Provider>
  );
};

export default SubscribeProvider;

export const useSubscribe = () => {
  return useContext(SubscriberContext);
};
