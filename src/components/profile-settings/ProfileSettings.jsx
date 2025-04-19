import "./profileSettings.css";

import { ErrorMessage, Form, Formik } from "formik";
import { useCallback, useState } from "react";
import toast from "react-hot-toast";

import * as yup from "yup";

import returnErrorMsg from "../../utils/returnErrorMessage";

import NoImageIcon from "/images/all-services/no-image-icon.svg";

import { FaInfoCircle } from "react-icons/fa";

export default function ProfileSettingsPage() {
  const initValues = {
    image: null,
    username: "admin",
    email: "admin@email.com",
    phone: "admin",
  };

  const [base64Image, setBase64Image] = useState("");

  const profileValidations = yup.object().shape({
    image: yup
      .mixed()
      .nullable()
      .test(
        "fileSize",
        "Image size must be less than 4MB",
        (value) =>
          value === null ||
          (value instanceof File && value.size <= 4 * 1024 * 1024)
      )
      .test(
        "fileFormat",
        "Accepted formats are jpg, png, svg",
        (value) =>
          value === null ||
          (value instanceof File &&
            ["image/jpeg", "image/png", "image/svg+xml"].includes(value.type))
      )
      .required("Image is required"),
    username: yup.string().required("Username is required"),
    email: yup.string().email().required("Email is required"),
    phone: yup.string().required("Phone is required"),
  });

  const convertToBase64 = useCallback((file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }, []);

  const handleImageChange = useCallback(
    async (event, formik) => {
      formik.setFieldValue("image", event.currentTarget.files[0]);

      const file = event.currentTarget.files[0];

      if (file) {
        const base64 = await convertToBase64(file);

        setBase64Image(base64);
      } else {
        setBase64Image("");
      }
    },
    [convertToBase64]
  );

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);

    try {
      await new Promise((res) => setTimeout(() => res(), 1000));
    } catch (error) {
      toast.error(returnErrorMsg(error));
    } finally {
      setSubmitting(false);
      resetForm();
      setBase64Image("");
      console.log("Form submitted with values:", {
        ...values,
        image: base64Image,
      });
    }
  };

  return (
    <>
      <div className="flex flex-col gap-5">
        <h1 className="main-heading">Profile Settings</h1>

        {/* profile settings start */}
        <div className="border border-[#AEC8E2] bg-white rounded-[20px] p-[20px] flex flex-col gap-5">
          <h2 className="font-[500] text-[#252C62] text-[20px] pb-[20px] border-b border-b-[#aec8e2]">
            Profile Information
          </h2>
          {/* profile settings form start */}

          <Formik
            initialValues={initValues}
            validationSchema={profileValidations}
            onSubmit={handleSubmit}
            enableReinitialize
          >
            {(formik) => {
              return (
                <Form>
                  <div className="flex flex-col gap-5">
                    {/* Attachment File */}
                    <div className="flex flex-col gap-5 border border-[#AEC8E2] p-5 rounded-[14px]">
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="image"
                          className="block text-[18px] font-[500] text-[#252C62]"
                        >
                          Profile Image
                        </label>
                        <div className="mt-1 flex max-[601px]:flex-col max-[601px]:items-start items-center gap-5">
                          <div className="relative w-[110px] h-[110px] rounded-[15px] border border-[#AEC8E2] bg-[#F1F5F9] flex items-center justify-center">
                            {base64Image ? (
                              <img
                                src={base64Image}
                                alt="File Preview"
                                className="w-full h-full object-cover rounded-[15px]"
                              />
                            ) : (
                              <img src={NoImageIcon} alt="no image" />
                            )}
                          </div>
                          <div>
                            <input
                              type="file"
                              id="image"
                              name="image"
                              onChange={(event) =>
                                handleImageChange(event, formik)
                              }
                              className="hidden"
                              form={formik}
                            />
                            <div className="flex flex-col gap-1">
                              <div className="flex items-center gap-3">
                                <label
                                  htmlFor="image"
                                  className="cursor-pointer font-[500] text-[#202224] text-[16px]"
                                >
                                  Upload New
                                </label>
                                {base64Image && (
                                  <button
                                    type="button"
                                    onClick={() => {
                                      formik.setFieldValue("image", null);
                                      setBase64Image("");
                                    }}
                                    className="text-red-500 text-[16px] cursor-pointer"
                                    form={formik}
                                  >
                                    Remove
                                  </button>
                                )}
                              </div>
                              <p className="text-[#202224] text-[14px] font-[400]">
                                Your Image should Below 4 MB, Accepted format
                                jpg,png,svg
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <ErrorMessage
                        name="image"
                        component="div"
                        className="text-sm text-red-500"
                      />
                    </div>

                    {/* Username */}
                    <div className="flex flex-col gap-3">
                      <label
                        htmlFor="username"
                        className="flex items-center gap-2 text-sm font-medium text-[#252C62] text-[18px]"
                      >
                        Username{" "}
                        <span className="info-span">
                          <FaInfoCircle />
                          <span className="info-hover">
                            <span>Username can't be changed</span>
                            <span className="triangle"></span>
                          </span>
                        </span>
                      </label>
                      <input
                        type="text"
                        id="username"
                        name="username"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.username}
                        className="mt-1 block w-full rounded-[6px] px-4 py-2 border border-[#AEC8E2]"
                        form={formik}
                        disabled
                      />
                      <ErrorMessage
                        name="username"
                        component="div"
                        className="text-sm text-red-500"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-3">
                      <label
                        htmlFor="email"
                        className="flex items-center gap-2 text-sm font-medium text-[#252C62] text-[18px]"
                      >
                        Email{" "}
                        <span className="info-span">
                          <FaInfoCircle />
                          <span className="info-hover">
                            <span>Email can't be changed</span>
                            <span className="triangle"></span>
                          </span>
                        </span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        className="mt-1 block w-full rounded-[6px] px-4 py-2 border border-[#AEC8E2]"
                        form={formik}
                        disabled
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-sm text-red-500"
                      />
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col gap-3">
                      <label
                        htmlFor="phone"
                        className="flex items-center gap-2 text-sm font-medium text-[#252C62] text-[18px]"
                      >
                        Phone{" "}
                        <span className="info-span">
                          <FaInfoCircle />
                          <span className="info-hover">
                            <span>Phone can't be changed</span>
                            <span className="triangle"></span>
                          </span>
                        </span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phone}
                        className="mt-1 block w-full rounded-[6px] px-4 py-2 border border-[#AEC8E2]"
                        form={formik}
                        disabled
                      />
                      <ErrorMessage
                        name="phone"
                        component="div"
                        className="text-sm text-red-500"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end gap-3 mt-5">
                    <button
                      type="submit"
                      className={`${
                        formik?.isSubmitting
                          ? "cursor-not-allowed"
                          : "cursor-pointer"
                      } bg-[#4C63BD] inline-flex justify-center rounded-[20px] border border-transparent py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-500`}
                      disabled={formik?.isSubmitting}
                    >
                      Save
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>

          {/* profile settings form end */}
        </div>
        {/* profile settings box end */}
      </div>
    </>
  );
}
