import React from "react";
import ReactDOM from "react-dom";
import React, { Suspense } from 'react';
import './i18n';
import App from "./App";
import Loading from "./Loading";

ReactDOM.render(
<Suspense fallback={<Loading/>}>
  <App/>
  </Suspense>,
 document.getElementById("root"));
