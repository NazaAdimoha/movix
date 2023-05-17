import { useEffect, useState } from "react";

export const Nav = () => {
    const [show, handleShow] = useState<boolean>(false);

    //create transition Nav bar for smooth scroll
    const transitionNavBar = () => {
        if (window.scrollY > 100){
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    //add event listener to window in a useEffect hook
    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        //clean up function
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, []);
    
  return (
    <section className={`${show && "bg-black fixed top-0 w-full h-[30px] z-1 p-[1.6rem]"}`}>
      <div className="
        flex justify-between w-full
      ">
        <img
            className="object-contain w-[80px] fixed left-0 top-[20px] pl-[20px] cursor-pointer"
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix logo"
        />
        <img
            className="object-contain w-[25px] top-[10px] fixed right-4"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="avatar"
        />
      </div>
    </section>
  );
};
