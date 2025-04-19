import { ErrorMessage, Form, Formik } from "formik";
import * as yup from "yup";
import { useState, useCallback, useEffect } from "react";

import NoImageIcon from "/images/all-services/no-image-icon.svg";
import toast from "react-hot-toast";
import returnErrorMsg from "../../utils/returnErrorMessage";

import "./allServices.css";

export default function AllServicesPage() {
  const initValues = {
    image: null,
    title: "",
    speciality: "",
  };

  const [base64Image, setBase64Image] = useState("");

  const [speciality, setSpeciality] = useState("");

  useEffect(() => {
    if (speciality) {
      console.log(speciality);
    }
  }, [speciality]);

  const addServicesValidations = yup.object().shape({
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
      .required("Profile photo is required"),
    title: yup.string().required("Title is required"),
    speciality: yup.string().required("Speciality is required"),
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

  const addServicesFormHandler = async (
    values,
    { setSubmitting, resetForm }
  ) => {
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

  const specialityOptions = ["Neurology", "Orthopedic"];

  const servicesData = [
    {
      id: 1,
      name: "Echocardiograms",
      currency: "$",
      price: 310,
    },
    {
      id: 2,
      name: "Stress Tests",
      currency: "$",
      price: 210,
    },
    {
      id: 3,
      name: "Heart Catheterization",
      currency: "$",
      price: 510,
    },
    {
      id: 4,
      name: "Echocardiograms",
      currency: "$",
      price: 610,
    },
    {
      id: 5,
      name: "Echocardiograms",
      currency: "$",
      price: 710,
    },
    {
      id: 6,
      name: "Echocardiograms",
      currency: "$",
      price: 810,
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="flex max-[450px]:flex-col gap-3 items-center justify-between">
          <h1 className="main-heading">All Services</h1>
        </div>

        {/* add services box start */}
        <div className="border border-[#AEC8E2] bg-white rounded-[20px] p-[20px] flex flex-col gap-5">
          <h2 className="font-[500] text-[#252C62] text-[20px] pb-[20px] border-b border-b-[#aec8e2]">
            Add Services
          </h2>
          {/* add services form start */}

          <Formik
            initialValues={initValues}
            validationSchema={addServicesValidations}
            onSubmit={addServicesFormHandler}
            enableReinitialize
          >
            {(formik) => {
              return (
                <Form>
                  <div className="flex flex-col gap-5">
                    {/* Profile Photo */}
                    <div className="flex flex-col gap-5 border border-[#AEC8E2] p-5 rounded-[14px]">
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="image"
                          className="block text-[18px] font-[500] text-[#252C62]"
                        >
                          Profile Photo
                        </label>
                        <div className="mt-1 flex max-[601px]:flex-col max-[601px]:items-start items-center gap-5">
                          <div className="relative w-[110px] h-[110px] rounded-[15px] border border-[#AEC8E2] bg-[#F1F5F9] flex items-center justify-center">
                            {base64Image ? (
                              <img
                                src={base64Image}
                                alt="Profile Preview"
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

                    {/* Title */}
                    <div className="flex flex-col gap-3">
                      <label
                        htmlFor="title"
                        className="block text-sm font-medium text-[#252C62] text-[18px]"
                      >
                        Title <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="title"
                        name="title"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.title}
                        className="mt-1 block w-full rounded-[6px] px-4 py-2 border border-[#AEC8E2]"
                        form={formik}
                      />
                      <ErrorMessage
                        name="title"
                        component="div"
                        className="text-sm text-red-500"
                      />
                    </div>

                    {/* Specialities */}
                    <div className="flex flex-col gap-3">
                      <label
                        htmlFor="speciality"
                        className="block text-sm font-medium text-[#252C62] text-[18px]"
                      >
                        Speciality <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="speciality"
                        name="speciality"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.speciality}
                        className="mt-1 block w-full rounded-[6px] px-4 py-2 border border-[#AEC8E2]"
                        form={formik}
                      />
                      <ErrorMessage
                        name="speciality"
                        component="div"
                        className="text-sm text-red-500"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end gap-3 mt-5">
                    <button
                      type="button"
                      className="rounded-[20px] cursor-pointer border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      onClick={() => {
                        formik.resetForm();
                        setBase64Image("");
                      }}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className={`${
                        formik?.isSubmitting
                          ? "cursor-not-allowed"
                          : "cursor-pointer"
                      } bg-[#4C63BD] inline-flex justify-center rounded-[20px] border border-transparent py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-500`}
                      disabled={formik?.isSubmitting}
                    >
                      Submit
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>

          {/* add services form end */}
        </div>
        {/* add services box end */}

        {/* select speciality box start */}

        <div className="">
          <div className="flex flex-col gap-3 text-[#252C62] font-[600]">
            <label htmlFor="speciality-select text-[#252C62] font-[600]">
              Select Speciality
            </label>
            <select
              name="speciality-select"
              id="speciality-select"
              className="border border-[#AEC8E2] w-full rounded-[8px] px-4 py-2 bg-white text-[#202224] font-normal"
              onChange={(e) => {
                setSpeciality(e.target.value);
              }}
            >
              {specialityOptions?.map((speciality, index) => {
                return <option key={index}>{speciality}</option>;
              })}
            </select>
          </div>
        </div>

        {/* select speciality box end */}

        {/* services box start */}

        <div className="flex flex-col gap-5">
          <h3 className="font-[600] text-[20px] text-[#252C62]">Services</h3>
          <div className="services-grid-div">
            {servicesData?.map((service, index) => {
              return (
                <div key={index}>
                  <p>{service?.name}</p>
                  <p>
                    <span>{service?.currency}</span>
                    <span>{service?.price}</span>
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* services box end */}
      </div>
    </>
  );
}
