"use client";

import { useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

type FormInputs = {
  role: "CANDIDATE" | "COMPANY";
  name: string;
  company?: string;
  phone: string;
  email: string;
  inquiries: string;
  consent: boolean;
};

const ContactUs: React.FC = () => {
  const contactUsSectionRef = useRef<HTMLDivElement | null>(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInputs>({ mode: "all" });
  console.log(errors);

  const watchRole = watch("role");

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    console.log(data); // Handle form submission logic
  };

  const renderErrorMessage = (message?: string) =>
    message ? (
      <p className="text-[#dc143c] text-[1rem] md:text-lg">{message}</p>
    ) : null;

  const renderInputField = (
    id: string,
    label: string,
    type: "text" | "tel" | "email",
    validationRules: any,
    placeholder: string,
    disabled = false
  ) => (
    <div className="col-span-1">
      <Input
        id={id}
        type={type}
        {...register(id as keyof FormInputs, validationRules)}
        className="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none w-full  h-[3.8rem] md:h-[4.4rem] text-[1rem] placeholder:text-[1rem] md:text-[calc(1.275rem+.3vw)] 2xl:h-[4.6rem] md:placeholder:text-[calc(1.275rem+.3vw)] p-2 border border-gray-300 rounded-none outline-none focus:ring-2 focus:ring-blue-400"
        placeholder={placeholder}
        disabled={disabled}
      />
      {renderErrorMessage(errors[id as keyof FormInputs]?.message)}
    </div>
  );

  return (
    <section
      id="contactus"
      ref={contactUsSectionRef}
      className="bg-[#f2f2f2] w-full py-[5%] px-6 "
    >
      <p className=" text-[6vw] md:text-[3vw]  font-medium text-center text-gold py-4 md:py-4 2xl:py-6">
        More questions left? Contact Us
      </p>

      <form
        autoComplete="off"
        className="mx-auto flex flex-col md:justify-center md:items-center w-full md:min-w-[50%] md:w-[80%] lg:w-[55%]"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Role Selection */}
        <div className="flex flex-row md:flex-row justify-start gap-6 md:gap-4 mb-[1.25rem]">
          {["CANDIDATE", "COMPANY"].map((role) => (
            <div
              className="flex text-md flex-row justify-between  md:justify-center items-center md:text-[calc(1.275rem+.3vw)] font-medium "
              key={role}
            >
              <Input
                {...register("role", { required: "Select one of the roles" })}
                className=" w-4 h-4 md:w-6 md:h-6 p-1 appearance-none border border-gray-400 checked:bg-blue-600 checked:border-transparent rounded-none relative
        before:absolute before:top-1/2 before:left-1/2 before:w-2 before:h-2 before:bg-white before:rounded-full before:transform before:scale-0 checked:before:scale-100 checked:before:translate-x-[-50%] checked:before:translate-y-[-50%]"
                type="radio"
                id={`rdo${role}`}
                value={role}
              />
              <label htmlFor={`rdo${role}`} className="ml-1 ">
                I’m{" "}
                {role === "CANDIDATE" ? "Candidate" : "Company representative"}
              </label>
            </div>
          ))}
        </div>
        {renderErrorMessage(errors.role?.message)}

        {/* Form Fields */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 ${
            Object.keys(errors).length > 0 ? " gap-y-2 gap-x-8" : "gap-8"
          }  py-4 w-full`}
        >
          {renderInputField(
            "name",
            "Name",
            "text",
            {
              required: "Name is required",
              minLength: {
                value: 3,
                message: "Enter at least 3 characters",
              },
            },
            "Name"
          )}
          {renderInputField(
            "company",
            "Company",
            "text",
            {
              required:
                watchRole === "COMPANY"
                  ? "Company name is required"
                  : undefined,
              disabled: watchRole !== "COMPANY",
            },
            "Company",
            watchRole !== "COMPANY"
          )}
          {renderInputField(
            "phone",
            "Phone number",
            "tel",
            {
              required: "Phone number is required",
              maxLength: {
                value: 10,
                message: "Phone number should be 10 digits",
              },
            },
            "Phone number"
          )}
          {renderInputField(
            "email",
            "Email",
            "email",
            {
              required: "Email is required",
            },
            "Email"
          )}
        </div>

        {/* Inquiries Field */}
        <div className="mt-4 w-full">
          <Textarea
            rows={6}
            {...register("inquiries", {
              required: "Inquiry is required",
              minLength: {
                value: 10,
                message: "Inquiry should be at least 10 characters",
              },
            })}
            className="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none w-full h-22 p-2 border border-gray-300 rounded-none text-[1rem] placeholder:text-[1rem] md:placeholder:text-[1.5rem] outline-none focus:ring-2"
            placeholder="Inquiries"
            style={{ resize: "none" }}
          />
          {renderErrorMessage(errors.inquiries?.message)}
        </div>

        {/* Consent Checkbox */}
        <div className="mt-4 2xl:py-4">
          <div className="flex items-center">
            <Input
              {...register("consent", {
                required:
                  "Please provide consent to store your contact details.",
              })}
              className="w-4 h-4 md:w-6 md:h-6 p-1 appearance-none border border-gray-400 checked:bg-blue-600 checked:border-transparent rounded-none relative
        before:absolute before:top-1/2 before:left-1/2 before:w-2 before:h-2 before:bg-white before:rounded-full before:transform before:scale-0 checked:before:scale-100 checked:before:translate-x-[-50%] checked:before:translate-y-[-50%]"
              type="checkbox"
              id="rdoConsent"
            />
            <label
              className="text-md md:text-[calc(1.275rem+.3vw)] font-medium  ml-1"
              htmlFor="rdoConsent"
            >
              I consent to store my contact details.
            </label>
          </div>
          {renderErrorMessage(errors.consent?.message)}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          size="xl"
          className="border rounded-lg shadow-lg focus:ring focus:outline-none mx-auto w-full uppercase md:w-[75%] mt-4 rounded-full font-bold text-xl 2xl:text-3xl md:text-2xl h-[3.1rem] 2xl:h-[3.5rem] transition-opacity duration-1000 ease-out opacity-100 hover:opacity-20"
        >
          send
        </Button>
      </form>
    </section>
  );
};

export default ContactUs;
