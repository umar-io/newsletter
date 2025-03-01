import Subscribe from "./Subscribe";
import Subscribed from "./Subscribed";
import { useSubscribe } from "./hooks/subscribeContext";
const App = () => {
  const { isSubscribed} = useSubscribe();
  const email = localStorage.getItem('subscriber_email');
  return isSubscribed ? <Subscribed email={email} /> : <Subscribe />;
};

export default App;
