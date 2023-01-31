import React from "react";

const CongratsPopup = React.forwardRef(({}, ref) => {

  const Li = ({children}) => {
    return (
      <div className={"mb-4 flex flex-row"}>
        <img src={'/images/check.svg'} alt={'check'} className={"w-6 h-6 mr-4"}/>
        <li className={"text-xl"}>
          {children}
        </li>
      </div>
    )
  }

  return (
    <div
      className={"fixed top-0 left-0 w-full h-full flex justify-center items-center bg-white bg-[rgb(0,0,0,0.2)] z-[1000]"}>
      <div ref={ref} className={"w-[550px] h-[770px] bg-white rounded"}>
        <img src={'/images/contactUs.png'} alt={'contact us'}/>
        <div className={"p-8"}>
          <h2 className={"mt-2 font-medium text-2xl"}>Clickout Product is currently under development</h2>
          <ul className={"mt-10 list-inside"}>
            <Li>Build your own flows</Li>
            <Li>Use our pre-built flows</Li>
            <Li>Use our pre-built templates</Li>
          </ul>
          <p className={"mt-10 text-lg"}>If you want to talk us more about the product don't doubt in contacting us</p>
            <button className={"px-6 py-4 border bg-secondary text-white w-full rounded mt-6"}>Calendly</button>
        </div>
      </div>
    </div>
  );
});

export default CongratsPopup;