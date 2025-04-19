import "./updatePassword.css";

import toast from "react-hot-toast";
import * as yup from "yup";

import YupPassword from "yup-password";
import returnErrorMsg from "../../utils/returnErrorMessage";
import { ErrorMessage, Form, Formik } from "formik";
import LayoutDiv from "../global/form-components/LayoutDiv";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

YupPassword(yup);

export default function UpdatePasswordPage() {
  const [showPass, setShowPass] = useState(false);

  const [showNewPass, setShowNewPass] = useState(false);

  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const initValues = {
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  };

  const updatePasswordValidations = yup.object().shape({
    currentPassword: yup.string().required("Current Password is required"),
    newPassword: yup.string().password().required("New Password is required"),
    confirmPassword: yup
      .string()
      .oneOf(
        [yup.ref("newPassword"), null],
        "Confirm password must match new password"
      )
      .required("Confirm password is required"),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
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
      resetForm();
      console.log(values);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-5">
        <h1 className="main-heading">Update Password</h1>
        <div className="bg-white p-5 rounded-[20px]">
          <Formik
            initialValues={initValues}
            validationSchema={updatePasswordValidations}
            onSubmit={handleSubmit}
            enableReinitialize
          >
            {(formik) => {
              return (
                <Form className="flex flex-col gap-3">
                  <LayoutDiv>
                    <div className="w-full flex flex-col gap-3">
                      <div className="flex flex-col gap-3">
                        <label
                          htmlFor="currentPassword"
                          className="updatePassword-label"
                        >
                          Current Password
                        </label>
                        <span className="inline-flex border border-[#AEC8E2] w-full rounded-md">
                          <input
                            type={showPass ? "text" : "password"}
                            className="w-full px-4 py-2"
                            name="currentPassword"
                            onChange={formik.handleChange}
                            value={formik.values.currentPassword}
                          />
                          <span className="inline-flex w-[40px]">
                            <button
                              type="button"
                              aria-label={showPass ? "Hide Pass" : "Show Pass"}
                              className="inline-flex justify-center items-center w-full cursor-pointer"
                              onClick={() => {
                                setShowPass(!showPass);
                              }}
                            >
                              {showPass ? <FaEye /> : <FaEyeSlash />}
                            </button>
                          </span>
                        </span>
                      </div>
                      <ErrorMessage
                        name="currentPassword"
                        component="div"
                        className="text-sm text-red-500"
                      />
                    </div>
                    <div className="w-full flex flex-col gap-3">
                      <div className="flex flex-col gap-3">
                        <label
                          htmlFor="newPassword"
                          className="updatePassword-label"
                        >
                          New Password
                        </label>
                        <span className="inline-flex border border-[#AEC8E2] w-full rounded-md">
                          <input
                            type={showNewPass ? "text" : "password"}
                            className="w-full px-4 py-2"
                            name="newPassword"
                            onChange={formik.handleChange}
                            value={formik.values.newPassword}
                          />
                          <span className="inline-flex w-[40px]">
                            <button
                              type="button"
                              aria-label={
                                showNewPass ? "Hide Pass" : "Show Pass"
                              }
                              className="inline-flex justify-center items-center w-full cursor-pointer"
                              onClick={() => {
                                setShowNewPass(!showNewPass);
                              }}
                            >
                              {showNewPass ? <FaEye /> : <FaEyeSlash />}
                            </button>
                          </span>
                        </span>
                      </div>
                      <ErrorMessage
                        name="newPassword"
                        component="div"
                        className="text-sm text-red-500"
                      />
                    </div>
                  </LayoutDiv>
                  <LayoutDiv>
                    <div className="w-full flex flex-col gap-3">
                      <div className="flex flex-col gap-3">
                        <label
                          htmlFor="confirmPassword"
                          className="updatePassword-label"
                        >
                          Confirm Password
                        </label>
                        <span className="inline-flex border border-[#AEC8E2] w-full rounded-md">
                          <input
                            type={showConfirmPass ? "text" : "password"}
                            className="w-full px-4 py-2"
                            name="confirmPassword"
                            onChange={formik.handleChange}
                            value={formik.values.confirmPassword}
                          />
                          <span className="inline-flex w-[40px]">
                            <button
                              type="button"
                              aria-label={
                                showConfirmPass ? "Hide Pass" : "Show Pass"
                              }
                              className="inline-flex justify-center items-center w-full cursor-pointer"
                              onClick={() => {
                                setShowConfirmPass(!showConfirmPass);
                              }}
                            >
                              {showConfirmPass ? <FaEye /> : <FaEyeSlash />}
                            </button>
                          </span>
                        </span>
                      </div>
                      <ErrorMessage
                        name="confirmPassword"
                        component="div"
                        className="text-sm text-red-500"
                      />
                    </div>

                    {/* this div only for proper measurment */}
                    <div className="w-full"></div>
                  </LayoutDiv>
                  <div className="mt-2 max-[601px]:mt-0">
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
      </div>
    </>
  );
}
