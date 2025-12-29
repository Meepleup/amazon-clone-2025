// src/components/LayOut/LayOut.jsx
import Header from "../Header/Header";

function LayOut({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}

export default LayOut;
