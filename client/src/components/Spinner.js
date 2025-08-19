import React from "react";

const Spinner = () => {
  return (
    <>
      {/* <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div> */}
      <div class="clearfix">
        <div class="spinner-border float-right" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </>
  );
};

export default Spinner;