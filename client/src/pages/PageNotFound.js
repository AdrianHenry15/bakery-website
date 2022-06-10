import React from "react";
import logo from "./images/404-page.jpg";

const PageNotFound = () => (
  <div className='grid place-items-center'>
    <h1 className="pt-6">404: Page Not Found</h1>
    <img
      className="w-1/4 h-2/3 border-double border-4 border-gray-600"
      src={logo}
      alt='404 Page not Found' />
  </div>
);

export default PageNotFound;
