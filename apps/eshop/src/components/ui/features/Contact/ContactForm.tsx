import { useBrandContact } from "../../../../utils/useCms/useBrandContact";
import Name from "./FormElement/Name";
import Email from "./FormElement/Email";
import Phone from "./FormElement/Phone";
import Message from "./FormElement/Message";
import Policy from "./FormElement/Policy";

const ContactForm = () => {
  const { register, handleSubmit, errors, onSubmit, submitting, responseData } =
    useBrandContact();

  return (
    <section className=" flex justify-center p-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Name register={register} errors={errors} />
        <Email register={register} errors={errors} />
        <Phone register={register} errors={errors} />
        <Message register={register} errors={errors} />
        <Policy register={register} errors={errors} />
        <div className="w-full h-10 bg-green-800 text-center items-center flex justify-center hover:bg-green-600 rounded-md">
          <button
            type="submit"
            className="registerButton"
            disabled={submitting}
          >
            {submitting ? "Sending message..." : "Send message"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
