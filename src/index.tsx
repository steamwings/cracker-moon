import React from 'react';

import './index.scss';
import {createRoot} from "react-dom/client";
import CrackerMoon from "./components/CrackerMoon";
import snApi from "sn-extension-api";

const root = createRoot(document.getElementById('root'));

export const rerenderRoot = () => {
  root.render(
    <React.StrictMode>
      <CrackerMoon/>
    </React.StrictMode>
  );
};

snApi.initialize({
  debounceSave: 400
});

snApi.subscribe(() => {
  rerenderRoot();
});
