type SubscribeProps = {
  email: string;
};
import { useSubscribe } from "./hooks/subscribeContext";
import successMark from "./assets/images/icon-success.svg";
const Subscribed = ({ email }: SubscribeProps) => {
  const { setIsSubscribed } = useSubscribe();
  return (
    <section className="flex flex-col lg:w-[40%] w-[100%] px-[40px] py-[30px] bg-white lg:justify-center justify-between items-start gap-5 lg:rounded-md lg:h-[fit-content] h-dvh">
      <img src={successMark} alt="" className="w-[40px]" />
      <div className="flex w-full flex-col gap-2">
        <h3 className="text-[30px] font-[700] w-[50%]">
          Thanks for subscribing!
        </h3>
        <p className="lg:w-[85%] w-full">
          A confirmation email has been sent to {email}. Please open it and
          click the button inside to confirm your subscription{" "}
        </p>
      </div>
      <button
        className="w-full bg-[#36384e] hover:bg-[#ff6257] text-white py-3 cursor-pointer rounded-md transition-colors ease-in-out duration-75"
        onClick={() => setIsSubscribed(false)}
      >
        Dismiss message
      </button>
    </section>
  );
};

export default Subscribed;
