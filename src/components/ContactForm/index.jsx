import { useState } from "react";
const FORM_ENDPOINT = "https://herotofu.com/start"; // TODO - update to the correct endpoint


function ContactForm() {

    const FORM_ENDPOINT="https://public.herotofu.com/v1/3e78ee10-2a35-11ee-adc8-15d0255d3cef"
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const inputs = e.target.elements;
      const data = {};
  
      for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].name) {
          data[inputs[i].name] = inputs[i].value;
        }
      }
  
      fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Form response was not ok');
          }
  
          setSubmitted(true);
        })
        .catch((err) => {
          // Submit the form manually
          e.target.submit();
        });
    };
  
    if (submitted) {
      return (
        <>
          <div className="text-2xl">Thank you!</div>
          <div className="text-md">We'll be in touch soon.</div>
        </>
      );
    }

  return (
    <>
      <form className="mt-2"
         action={FORM_ENDPOINT}
         onSubmit={handleSubmit}
         method="POST">
        <div className="lg:flex lg:gap-8">
          <div className="mb-3 lg:basis-1/2">
            <label>
              <span className="text-700 text-green">NOMBRE:</span>
              <input
                type="text"
                name="name"
                className="

            w-full
            block px-2 py-2 mt-2
            border-gray-300
            text-white
            bg-dark
            text-white
            border-b-2
            border-white
            focus:ring
            focus:ring-indigo-200
               focus:outline-green
          "
          required
              />
            </label>
          </div>
          <div className="mb-3 lg:basis-1/2">
            <label>
              <span className="text-green">E-MAIL:</span>
              <input
                name="email"
                type="email"
                className="
            block
            w-full
            mt-2 px-2 py-2
            text-white
            text-white
            border-gray-300
            bg-dark
            text-white
            border-b-2
            border-white
        
            focus:ring
            focus:ring-indigo-200
               focus:outline-green
          "
                required
              />
            </label>
          </div>
        </div>
        <div className="mb-3">
          <label>
            <span class="text-green">MENSAJE:</span>
            <textarea
              name="message"
              className="
            block
            w-full
            mt-2 px-2 py-2
            bg-dark
            text-white
            border-b-2
            border-white
            focus:ring
            focus:ring-opacity-50
            focus:outline-green
          "
              rows="3"
              required
            ></textarea>
          </label>
        </div>

        <div class="mb-6">
          <button
            type="submit"
            className="
            h-10
            px-5
            bg-green
            
           
           
            w-[100%]
            rounded-lg
            
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800
            lg:w-auto
          "
          >
            Contactame
          </button>
        </div>
        <div></div>
      </form>
    </>
  );
}

export default ContactForm;
