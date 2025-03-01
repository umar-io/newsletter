import {
  useContext,
  createContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

// Define the type for the context value
interface SubscribeContextType {
  isSubscribed: boolean;
  setIsSubscribed: React.Dispatch<React.SetStateAction<boolean>>;
  formData: { email: string }; // Include formData in context type
  setFormData: React.Dispatch<React.SetStateAction<{ email: string }>>; // Function to update formData
}

// Provide a default value (empty object with appropriate types)
const defaultContextValue: SubscribeContextType = {
  isSubscribed: false, // default value
  setIsSubscribed: () => {}, // empty function as default
  formData: { email: "" }, // default email value
  setFormData: () => {}, // empty function as default
};

const SubscriberContext =
  createContext<SubscribeContextType>(defaultContextValue);

interface SubscribeProviderProps {
  children: ReactNode;
}

const SubscribeProvider = ({ children }: SubscribeProviderProps) => {
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
  const [formData, setFormData] = useState<{ email: string }>({
    email: localStorage.getItem("subscriber_email") || "",
  });

  // Save the email to localStorage when formData.email changes
  useEffect(() => {
    if (formData.email !== "") {
      localStorage.setItem("subscriber_email", formData.email);
    }
  }, [formData.email]); // This effect runs whenever formData.email changes

  return (
    <SubscriberContext.Provider
      value={{ isSubscribed, setIsSubscribed, formData, setFormData }}
    >
      {children}
    </SubscriberContext.Provider>
  );
};

export default SubscribeProvider;

export const useSubscribe = () => {
  return useContext(SubscriberContext);
};
