export default function Contact() {
  return (
    <div className="mt-[60px] px-4 w-[1000px] max-w-full mx-auto pb-20 text-[#f8e9d6]">
      <img className="md:w-[90%] mx-auto" src="/img/questions.png" alt="verification" />
      <div className="flex items-start flex-col md:flex-row gap-2 md:gap-6 lg:mt-20 mt-10">
        <div className="flex flex-1 mt-2 flex-col md:gap-2 gap-4">
          <p className="uppercase font-thin md:font-bold lg:text-3xl text-xl">WE’D LOVE TO HEAR FROM YOU,WHETHER YOU’RE INTERESTED IN COLLABORATION OR JUST WANT TO SHARE YOUR FEEDBACK, FEEL FREE TO REACH OUT.</p>
          <p className="uppercase font-thin md:font-bold lg:text-3xl text-xl">CONTACT US ANY TIME AT Service@nicozyclub.com - LET'S MAKESOMETHING GREAT TOGETHER.</p>
        </div>
        <img className="lg:w-[40%] w-[80%] mx-auto mt-4 md:mt-0" src="/img/question-products.png" alt="qr-code" />
      </div>
    </div>
  )
}