import TextInput from "./TextInput";

function ContactForm({ updateDetails }) {
  const onSubmit = (event) => {
    let name = event.target[3].value;
    let email = event.target[4].value;
    updateDetails(name, email);
    event.preventDefault();
  };

  return (
    <div className="mt-5 w-[100%]  flex overflow-visible h-[60vh] justify-between">
      <form onSubmit={onSubmit} className=" w-[50%]">
        <div className=" flex gap-4">
          <button className="bg-black flex text-white px-4 py-2 rounded-md gap-3 items-center w-[50%] justify-center">
            <span>
              <img src="./Images/message.svg" alt="" />
            </span>
            VIA SUPPORT CHAT
          </button>
          <button className="bg-black flex text-white px-4 py-2 rounded-md gap-3 items-center w-[50%] justify-center">
            <span>
              <img src="./Images/call.svg" alt="" />
            </span>
            VIA CALL
          </button>
        </div>
        <button className="border-2 border-black flex text-black px-4 py-2 rounded-md gap-3 items-center w-[100%] justify-center mt-4 font-[600]">
          <span>
            <img src="./Images/message-black.svg" alt="" />
          </span>
          VIA EMAIL FORM
        </button>
        <TextInput text="Name" height="h-12" htmlfor="name" />
        <TextInput text="E-Mail" height="h-12" htmlfor="email" />
        <div className="relative mt-4">
          <label
            className="font-[500] absolute left-5 top-[-12px] bg-white px-1 "
            htmlFor="text"
          >
            Name
          </label>
          <textarea
            className=" w-[100%] border-2 px-4 py-3 border-black flex text-black rounded-md"
            name="text"
            rows={3}
          ></textarea>
        </div>
        <div className="mt-4 flex justify-end">
          <button
            type="submit"
            className="bg-black flex text-white px-4 py-2 rounded-md gap-3 items-end w-[50%] justify-center"
          >
            <span>
              <img src="./Images/call.svg" alt="" />
            </span>
            VIA CALL
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
