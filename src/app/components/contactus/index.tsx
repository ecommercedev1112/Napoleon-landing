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
    message ? <p className="text-[#dc143c] text-[1.25rem]">{message}</p> : null;

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
        className="w-full h-[4.4rem] 2xl:h-[4.6rem] placeholder:text-[1.5rem] p-2 border border-gray-300 rounded-none outline-none focus:ring-2 focus:ring-blue-400"
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
      className="bg-[#f2f2f2] py-16"
    >
      <p className="text-2xl md:text-[2.8rem] 2xl:text-[3.5rem]  font-medium text-center text-gold py-4 md:py-4">
        More questions left? Contact Us
      </p>

      <form
        autoComplete="off"
        className="mx-auto flex flex-col md:justify-center md:items-center px-4 max-w-3xl 2xl:max-w-4xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Role Selection */}
        <div className="flex flex-col md:flex-row justify-start items-start gap-0 md:gap-16">
          {["CANDIDATE", "COMPANY"].map((role) => (
            <div
              className="flex flex-row justify-center items-center py-6"
              key={role}
            >
              <Input
                {...register("role", { required: "Select one of the roles" })}
                className="w-6 h-6 p-1 appearance-none border border-gray-400 checked:bg-blue-600 checked:border-transparent rounded-none relative
        before:absolute before:top-1/2 before:left-1/2 before:w-2 before:h-2 before:bg-white before:rounded-full before:transform before:scale-0 checked:before:scale-100 checked:before:translate-x-[-50%] checked:before:translate-y-[-50%]"
                type="radio"
                id={`rdo${role}`}
                value={role}
              />
              <label
                className="text-lg md:text-[1.5rem] 2xl:text-[2rem] ml-1 font-medium"
                htmlFor={`rdo${role}`}
              >
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
            className="w-full h-22 p-2 border border-gray-300 rounded-none placeholder:text-[1.5rem] outline-none focus:ring-2"
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
              className="w-6 h-6 p-1 appearance-none border border-gray-400 checked:bg-blue-600 checked:border-transparent rounded-none relative
        before:absolute before:top-1/2 before:left-1/2 before:w-2 before:h-2 before:bg-white before:rounded-full before:transform before:scale-0 checked:before:scale-100 checked:before:translate-x-[-50%] checked:before:translate-y-[-50%]"
              type="checkbox"
              id="rdoConsent"
            />
            <label
              className="text-lg md:text-[1.5rem] 2xl:text-[2rem] ml-1"
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
          className="mx-auto  w-full  uppercase  md:w-[75%] mt-4 rounded-full font-bold text-xl 2xl:text-3xl md:text-2xl h-[3.1rem] 2xl:h-[3.5rem]  "
        >
          SEND
        </Button>
      </form>
    </section>
  );
};

export default ContactUs;
