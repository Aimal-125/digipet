/* eslint-disable no-unused-vars */
import { Suspense } from "react";
import Spinner from "./Spinner";

export default function Loader(Component) {
  return (props) => {
    return (
      <Suspense fallback={<Spinner />}>
        <Component {...props} />
      </Suspense>
    );
  };
}
