import desktopImage from "./assets/images/illustration-sign-up-desktop.svg";
import mobileImage from "./assets/images/illustration-sign-up-mobile.svg";
import listIcon from "./assets/images/icon-list.svg";

import { useState, useEffect, ChangeEvent } from "react";
import { useSubscribe } from "./hooks/subscribeContext";

const Subscribe = () => {
  const { setIsSubscribed, isSubscribed } = useSubscribe();
  const [screenWidth, setScreenWidth] = useState<number>(window.outerWidth);
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = screenWidth <= 768;

  const listContent = [
    "Products discovery and building what matters",
    "Measuring to update are a success",
    "And Much More",
  ];

  const [formData, setFormData] = useState<{ email: string }>({
    email: "",
  });

  const [emailError, setEmailError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValidEmail(formData.email)) {
      setEmailError("Valid email required");
      return;
    }
    setEmailError(null);
    // Process the form data (e.g., send to an API)
    console.log("Form submitted:", formData.email);
    setFormData({ email: "" }); //reset form
    setIsSubscribed(!isSubscribed);
  };

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { value, name } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <section className="flex lg:flex-row flex-col-reverse justify-evenly text-white bg-white lg:h-[500px] rounded-md">
      <article className="lg:w-1/2 w-full flex-col flex gap-4 lg:px-8 lg:py-4 py-8 px-4">
        <h3 className="text-black text-[40px]">Stay Updated</h3>
        <p className="text-[16px] text-black">
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <ul>
          <li className="flex flex-col gap-3">
            {listContent.map((list, index) => (
              <span key={index} className="flex gap-1 text-black items-center">
                <img src={listIcon} alt="" /> <p>{list}</p>
              </span>
            ))}
          </li>
        </ul>
        <div className="flex flex-col">
          <form onSubmit={handleSubmit}>
            <figure className="flex flex-col w-[100%] gap-4">
              <div>
                <div className="w-full flex justify-between items-center">
                  <label
                    htmlFor="email"
                    className="text-[12px] text-black text-left"
                  >
                    Email address
                  </label>
                  {emailError && (
                    <p className="text-red-500 text-sm text-right">
                      {emailError}
                    </p>
                  )}
                </div>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="email@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full border-1 ${
                    emailError
                      ? "border-red-500 bg-red-50 text-red-500"
                      : "border-black"
                  } text-black px-2 py-3 rounded-sm focus:border-0 hover:cursor-pointer`}
                />
              </div>
              <button className="w-full bg-black hover:bg-[#ff6257] text-white py-3 cursor-pointer rounded-md transition-colors ease-in-out duration-75">
                Subscribe to monthly newsletter
              </button>
            </figure>
          </form>
        </div>
      </article>
      <aside className="lg:w-1/2 flex justify-end w-full lg:px-8 lg:py-4 py-8 px-0">
        <img
          src={isMobile ? mobileImage : desktopImage}
          alt=""
          className="w-[100%] h-[100%]"
        />
      </aside>
    </section>
  );
};

export default Subscribe;
