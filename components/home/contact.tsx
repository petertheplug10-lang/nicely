export default function Contact() {
  return (
    <div className="mt-[60px] px-4 w-[1000px] max-w-full mx-auto pb-20 text-[#f8e9d6]">
      <img className="w-[90%] mx-auto" src="/img/questions.png" alt="verification" />
      <div className="flex items-start gap-2 md:gap-6 lg:mt-20 mt-10">
        <div className="flex flex-1 mt-2 flex-col gap-2">
          <p className="uppercase font-bold lg:text-3xl text-base">WE’D LOVE TO HEAR FROM YOU,WHETHER YOU’RE INTERESTED IN COLLABORATION OR JUST WANT TO SHARE YOUR FEEDBACK, FEEL FREE TO REACH OUT.</p>
          <p className="uppercase font-bold lg:text-3xl text-base">CONTACT US ANY TIME AT [YOUROEMAIL.COM] - LET'S MAKESOMETHING GREAT TOGETHER.</p>
        </div>
        <img className="lg:w-[40%] w-[30%]" src="/img/question-products.png" alt="qr-code" />
      </div>
    </div>
  )
}