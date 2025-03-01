import Subscribe from "./Subscribe";
import Subscribed from "./Subscribed";
import { useSubscribe } from "./hooks/subscribeContext";
const App = () => {
  const { isSubscribed } = useSubscribe();
  return isSubscribed ? <Subscribed /> : <Subscribe />;
};

export default App;
