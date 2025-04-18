import "./settingsStyles.css";

import { ErrorMessage, Form, Formik } from "formik";
import toast from "react-hot-toast";

import * as yup from "yup";
import returnErrorMsg from "../../utils/returnErrorMessage";
import LayoutDiv from "./form-components/LayoutDiv";

export default function SettingsPage() {
  const initValues = {
    email: "",
    whatsAppGroupLink: "",
    whatsAppSupport: "",
  };

  const settingsValidations = yup.object().shape({
    email: yup.string().email("Please enter valid email").required("Required"),
    whatsAppGroupLink: yup
      .string()
      .url("Please enter valid url")
      .required("Required"),
    whatsAppSupport: yup.string().required("Required"),
  });

  const handleSettingsSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);

    try {
      await new Promise((res) =>
        setTimeout(() => {
          res();
        }, 1000)
      );
    } catch (error) {
      toast.error(returnErrorMsg(error));
    } finally {
      setSubmitting(false);
      console.log(values);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="flex gap-3 items-center justify-between">
          <h1 className="main-heading">Settings</h1>
        </div>
        {/* settings form start */}

        <div className="rounded-[20px] bg-white p-5">
          <Formik
            initialValues={initValues}
            validationSchema={settingsValidations}
            onSubmit={handleSettingsSubmit}
            enableReinitialize
          >
            {(formik) => {
              return (
                <Form className="flex flex-col gap-3">
                  <LayoutDiv>
                    <div className="flex flex-col gap-2 w-full">
                      <div className="flex flex-col gap-2 w-full">
                        <label
                          htmlFor="whatsAppSupport"
                          className="settings-label"
                        >
                          WhatsApp Group Link
                        </label>
                        <input
                          className="border border-[#AEC8E2] w-full px-4 py-2 rounded-md"
                          type="whatsAppSupport"
                          name="whatsAppSupport"
                          onChange={formik.handleChange}
                          form={formik}
                        />
                      </div>
                      <ErrorMessage
                        name="whatsAppSupport"
                        component="div"
                        className="text-sm text-red-500"
                      />
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                      <div className="flex flex-col gap-2 w-full">
                        <label
                          htmlFor="whatsAppGroupLink"
                          className="settings-label"
                        >
                          WhatsApp Group Link
                        </label>
                        <input
                          className="border border-[#AEC8E2] w-full px-4 py-2 rounded-md"
                          type="whatsAppGroupLink"
                          name="whatsAppGroupLink"
                          onChange={formik.handleChange}
                          form={formik}
                        />
                      </div>
                      <ErrorMessage
                        name="whatsAppGroupLink"
                        component="div"
                        className="text-sm text-red-500"
                      />
                    </div>
                  </LayoutDiv>
                  <div className="flex flex-col gap-2 w-full">
                    <div className="flex flex-col gap-2 w-full">
                      <label htmlFor="email" className="settings-label">
                        Contact Email
                      </label>
                      <input
                        className="border border-[#AEC8E2] w-full px-4 py-2 rounded-md"
                        type="email"
                        name="email"
                        onChange={formik.handleChange}
                        form={formik}
                      />
                    </div>
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-sm text-red-500"
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className={`${
                        formik.isSubmitting
                          ? "cursor-not-allowed"
                          : "cursor-pointer"
                      } bg-[#624DE3] text-white font-bold px-6 py-2 rounded-[20px]`}
                      disabled={formik.isSubmitting}
                    >
                      Save
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>

        {/* settings form end */}
      </div>
    </>
  );
}
