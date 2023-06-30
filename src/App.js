import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import Questions from "./pages/questions/Questions";
import PDFViewer from "./pages/ViewPdf/PDFviewer";

// 2. Call `createTheme` and pass your custom values
const myDarkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {
      // brand colors
      background: "#1d1d1d",
      text: "#fff",
      // you can also create your own color
      myDarkColor: "#ff4ecd",
      // ...  more colors
    },
    space: {},
    fonts: {},
  },
});

function App() {
  return (
    <NextUIProvider theme={myDarkTheme}>
      <div className="App">
        <Router>
          {/* <Preloader load={load} /> */}
          <div>
            {/* <Navbar /> */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/questions" element={<Questions />} />
              <Route path="/pdf" element={<PDFViewer />} />
              {/* <Route path="/about" element={<About />} />
       
            <Route path="*" element={<Navigate to="/" />} /> */}
            </Routes>
            {/* <Footer /> */}
          </div>
        </Router>
      </div>
    </NextUIProvider>
  );
}

export default App;
