import { useCallback, useEffect, useState } from "react";

import { useNavigate } from "react-router";

import "./loginPage.css";

import { ErrorMessage, Field, Form, Formik } from "formik";

import * as yup from "yup";

import { FaEye, FaEyeSlash } from "react-icons/fa";

import {
  navigateToCorrectPage,
  rolePaths,
} from "../../utils/navigateToCorrectPage";

export default function LoginPage() {
  const [showPass, setShowPass] = useState(false);

  const navigate = useNavigate();

  const handleNavigation = useCallback(
    (roles) => {
      navigateToCorrectPage(navigate, rolePaths, roles);
    },
    [navigate]
  );

  useEffect(() => {
    const loggedIn = JSON.parse(localStorage.getItem("loggedIn"));

    const rolesString = localStorage.getItem("roles");

    if (loggedIn && rolesString) {
      const roles = JSON.parse(rolesString);

      handleNavigation(roles);
    }
  }, [handleNavigation]);

  const initValues = {
    email: "",
    password: "",
  };

  const validations = yup.object().shape({
    email: yup.string().email().required("Required"),
    password: yup.string().required("Required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);

    try {
      localStorage.setItem("loggedIn", JSON.stringify(true));

      localStorage.setItem(
        "roles",
        JSON.stringify(["admin", "doctor", "user"])
      );

      await new Promise((res) => setTimeout(() => res(), 1000));

      const roles = ["admin", "doctor", "user"];

      handleNavigation(roles);
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
      console.log(values);
    }
  };

  return (
    <>
      <div className="login-page-container">
        <div className="login-container">
          <div className="login-box-1">
            <p className="login-logo-text">
              <span className="text-[#fff]">Digi</span>
              <span className="text-[#83B830]">Pet</span>
            </p>
          </div>
          <div className="login-box-2">
            <p className="font-medium text-2xl">Login</p>
            <p>Login to access your account</p>
            <Formik
              initialValues={initValues}
              validationSchema={validations}
              onSubmit={handleSubmit}
            >
              {(formik) => {
                return (
                  <Form className="login-form">
                    <div className="flex flex-col gap-2">
                      <Field
                        className="border border-gray-300 w-full px-4 py-2 rounded"
                        name="email"
                        id="email"
                        placeholder="Email"
                        form={formik}
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="border border-gray-300 flex rounded">
                        <Field
                          className="w-full px-4 py-2"
                          type={showPass ? "text" : "password"}
                          name="password"
                          id="password"
                          placeholder="Password"
                          form={formik}
                        />
                        <button
                          type="button"
                          className="w-[40px] inline-flex justify-center items-center cursor-pointer"
                          onClick={() => setShowPass(!showPass)}
                        >
                          {showPass ? <FaEye /> : <FaEyeSlash />}
                        </button>
                      </div>
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>
                    <div>
                      <button
                        className={`${
                          formik.isSubmitting
                            ? "cursor-not-allowed"
                            : "cursor-pointer"
                        } bg-[#19C1DC] w-full p-2 rounded text-white font-bold`}
                        type="submit"
                        disabled={formik.isSubmitting}
                      >
                        Login
                      </button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
}
