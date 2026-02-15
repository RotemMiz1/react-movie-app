import React from "react";
import { useNavigate } from "react-router-dom";

export default function About() {
  const nav = useNavigate();

  return (
    <>
      <div className="strip">
        <h1>About This Project</h1>
      </div>

      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow-lg p-4 border-0">

              <h3 className="mb-3">Movies App</h3>

              <p>
                This project was built by <b>Rotem Mizrachi</b> as part of learning React.
                The app uses the OMDb API to search and display movies,
                show detailed information, and provide a smooth user experience.
              </p>

              <p>
                Technologies used:
              </p>

              <ul>
                <li>React</li>
                <li>React Router</li>
                <li>Axios</li>
                <li>Bootstrap</li>
                <li>OMDb API</li>
              </ul>

              <p className="mt-3">
                This app demonstrates API integration, routing,
                dynamic search functionality, and responsive UI design.
              </p>

              <button
                className="btn btn-dark mt-3"
                onClick={() => nav(-1)}
              >
                Back
              </button>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
