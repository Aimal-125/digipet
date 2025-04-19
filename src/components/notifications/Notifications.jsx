import { ErrorMessage, Form, Formik } from "formik";
import returnErrorMsg from "../../utils/returnErrorMessage";
import toast from "react-hot-toast";
import { useCallback, useState } from "react";

import NoImageIcon from "/images/all-services/no-image-icon.svg";

import * as yup from "yup";
import ResponsiveTable from "../global/tables/ResponsiveTable";
import ExpandableText from "../../utils/ExpandableText";

export default function NotificationsPage() {
  // eslint-disable-next-line no-unused-vars
  const [currentPage, setCurrentPage] = useState(1);

  // eslint-disable-next-line no-unused-vars
  const [pages, setPages] = useState(3);

  const handleActionBtnClick = (item, actionType) => {
    console.log(item, `${actionType} btn clicked`);
  };

  const initValues = {
    image: null,
    title: "",
    body: "",
  };

  const [base64Image, setBase64Image] = useState("");

  const notificationsValidations = yup.object().shape({
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
    title: yup.string().required("Title is required"),
    body: yup.string().required("Body is required"),
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

  const notificationsFormHandler = async (
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

  const notificationsData = [
    {
      id: "#20462",
      title: "Champions Trophy 2017",
      description: (
        <ExpandableText text="Cricket Champion Cricket Champion Cricket Champion" />
      ),
      attachment: (
        <span className="w-[50px] h-[50px] rounded-[6px]">
          <img
            src="./images/notifications/img-1.svg"
            alt="image"
            style={{
              borderRadius: "6px",
              width: "50px",
              height: "50px",
              display: "inline-flex",
            }}
          />
        </span>
      ),

      date: "13/05/2022",
    },
    {
      id: "#20462",
      title: "Champions Trophy 2017",
      description: (
        <ExpandableText text="Cricket Champion Cricket Champion Cricket Champion" />
      ),
      attachment: (
        <span className="w-[50px] h-[50px] rounded-[6px]">
          <img
            src="./images/notifications/img-2.svg"
            alt="image"
            style={{
              borderRadius: "6px",
              width: "50px",
              height: "50px",
              display: "inline-flex",
            }}
          />
        </span>
      ),

      date: "13/05/2022",
    },
    {
      id: "#20462",
      title: "Champions Trophy 2017",
      description: (
        <ExpandableText text="Cricket Champion Cricket Champion Cricket Champion" />
      ),
      attachment: (
        <span className="w-[50px] h-[50px] rounded-[6px]">
          <img
            src="./images/notifications/img-2.svg"
            alt="image"
            style={{
              borderRadius: "6px",
              width: "50px",
              height: "50px",
              display: "inline-flex",
            }}
          />
        </span>
      ),

      date: "13/05/2022",
    },
    {
      id: "#20462",
      title: "Champions Trophy 2017",
      description: (
        <ExpandableText text="Cricket Champion Cricket Champion Cricket Champion" />
      ),
      attachment: (
        <span className="w-[50px] h-[50px] rounded-[6px]">
          <img
            src="./images/notifications/img-2.svg"
            alt="image"
            style={{
              borderRadius: "6px",
              width: "50px",
              height: "50px",
              display: "inline-flex",
            }}
          />
        </span>
      ),

      date: "13/05/2022",
    },
    {
      id: "#20462",
      title: "Champions Trophy 2017",
      description: (
        <ExpandableText text="Cricket Champion Cricket Champion Cricket Champion" />
      ),
      attachment: (
        <span className="w-[50px] h-[50px] rounded-[6px]">
          <img
            src="./images/notifications/img-2.svg"
            alt="image"
            style={{
              borderRadius: "6px",
              width: "50px",
              height: "50px",
              display: "inline-flex",
            }}
          />
        </span>
      ),

      date: "13/05/2022",
    },
    {
      id: "#20462",
      title: "Champions Trophy 2017",
      description: (
        <ExpandableText text="Cricket Champion Cricket Champion Cricket Champion" />
      ),
      attachment: (
        <span className="w-[50px] h-[50px] rounded-[6px]">
          <img
            src="./images/notifications/img-2.svg"
            alt="image"
            style={{
              borderRadius: "6px",
              width: "50px",
              height: "50px",
              display: "inline-flex",
            }}
          />
        </span>
      ),

      date: "13/05/2022",
    },
    {
      id: "#20462",
      title: "Champions Trophy 2017",
      description: (
        <ExpandableText text="Cricket Champion Cricket Champion Cricket Champion" />
      ),
      attachment: (
        <span className="w-[50px] h-[50px] rounded-[6px]">
          <img
            src="./images/notifications/img-2.svg"
            alt="image"
            style={{
              borderRadius: "6px",
              width: "50px",
              height: "50px",
              display: "inline-flex",
            }}
          />
        </span>
      ),

      date: "13/05/2022",
    },
    {
      id: "#20462",
      title: "Champions Trophy 2017",
      description: (
        <ExpandableText text="Cricket Champion Cricket Champion Cricket Champion" />
      ),
      attachment: (
        <span className="w-[50px] h-[50px] rounded-[6px]">
          <img
            src="./images/notifications/img-2.svg"
            alt="image"
            style={{
              borderRadius: "6px",
              width: "50px",
              height: "50px",
              display: "inline-flex",
            }}
          />
        </span>
      ),

      date: "13/05/2022",
    },
    {
      id: "#20462",
      title: "Champions Trophy 2017",
      description: (
        <ExpandableText text="Cricket Champion Cricket Champion Cricket Champion" />
      ),
      attachment: (
        <span className="w-[50px] h-[50px] rounded-[6px]">
          <img
            src="./images/notifications/img-2.svg"
            alt="image"
            style={{
              borderRadius: "6px",
              width: "50px",
              height: "50px",
              display: "inline-flex",
            }}
          />
        </span>
      ),

      date: "13/05/2022",
    },
    {
      id: "#20462",
      title: "Champions Trophy 2017",
      description: (
        <ExpandableText text="Cricket Champion Cricket Champion Cricket Champion" />
      ),
      attachment: (
        <span className="w-[50px] h-[50px] rounded-[6px]">
          <img
            src="./images/notifications/img-2.svg"
            alt="image"
            style={{
              borderRadius: "6px",
              width: "50px",
              height: "50px",
              display: "inline-flex",
            }}
          />
        </span>
      ),

      date: "13/05/2022",
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="flex max-[450px]:flex-col gap-3 items-center justify-between">
          <h1 className="main-heading">Notifications</h1>
        </div>

        {/* add notifications box start */}
        <div className="border border-[#AEC8E2] bg-white rounded-[20px] p-[20px] flex flex-col gap-5">
          <h2 className="font-[500] text-[#252C62] text-[20px] pb-[20px] border-b border-b-[#aec8e2]">
            Add Notification
          </h2>
          {/* add notifications form start */}

          <Formik
            initialValues={initValues}
            validationSchema={notificationsValidations}
            onSubmit={notificationsFormHandler}
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
                          Attach File
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

                    {/* Body */}
                    <div className="flex flex-col gap-3">
                      <label
                        htmlFor="body"
                        className="block text-sm font-medium text-[#252C62] text-[18px]"
                      >
                        Body <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="body"
                        name="body"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.body}
                        className="mt-1 block w-full rounded-[6px] px-4 py-2 border border-[#AEC8E2]"
                        form={formik}
                        rows="3"
                      ></textarea>
                      <ErrorMessage
                        name="body"
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
                      Send
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>

          {/* add notifications form end */}
        </div>
        {/* add notifications box end */}

        <div className="">
          <ResponsiveTable
            data={notificationsData}
            mainHeading={""}
            searchBar={false}
            headings={[
              "ID #",
              "Title",
              "Description",
              "Attachment",
              "Date",
              "Action",
            ]}
            cells={["id", "title", "description", "attachment", "date"]}
            status={false}
            actions={true}
            actionTypes={[
              {
                action: "view",
                icon: "./images/view-icon.svg",
              },
              {
                action: "edit",
                icon: "./images/edit-icon.svg",
              },
              {
                action: "delete",
                icon: "./images/delete-icon.svg",
              },
            ]}
            actionHandler={handleActionBtnClick}
            setCurrentPage={setCurrentPage}
            pages={pages}
          />
        </div>
      </div>
    </>
  );
}
