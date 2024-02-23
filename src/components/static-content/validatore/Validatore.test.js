/* eslint-disable prettier/prettier */
import React from "react";
import { screen, fireEvent } from "@testing-library/react";
import Validatore from "./Validatore";
import { renderWithRoute } from "../../../services/testUtils";

describe("Validatore", () => {
  it("renders Validatore component", () => {
    renderWithRoute(<Validatore />);
    expect(screen.getByLabelText("Upload")).toBeInTheDocument();
  });

  it("handles file selection and updates state", () => {
    renderWithRoute(<Validatore />);
    const file = new File(["file content"], "test.ttl", {
      type: "text/turtle"
    });
    const input = screen.getByLabelText("Upload");
    fireEvent.change(input, { target: { files: [file] } });
    expect(input.files[0]).toEqual(file);
  });

  it("displays the selected file name after successful file selection", () => {
    renderWithRoute(<Validatore />);
    const file = new File(["file content"], "test.ttl", {
      type: "text/turtle"
    });
    const input = screen.getByLabelText("Upload");
    fireEvent.change(input, { target: { files: [file] } });

    const selectedFileName = screen.getByText(file.name);
    expect(selectedFileName).toBeInTheDocument();
  });

  it("displays the upload progress bar during file upload", () => {
    renderWithRoute(<Validatore />);
    const file = new File(["file content"], "test.ttl", {
      type: "text/turtle"
    });
    const input = screen.getByLabelText("Upload");
    fireEvent.change(input, { target: { files: [file] } });

    const progressBar = screen.getByRole("progressbar");
    expect(progressBar).toBeInTheDocument();
  });

  it("enables the 'Valida documento' button when a file is selected", () => {
    renderWithRoute(<Validatore />);
    const file = new File(["file content"], "test.ttl", {
      type: "text/turtle"
    });
    const input = screen.getByLabelText("Upload");
    fireEvent.change(input, { target: { files: [file] } });

    const validateButton = screen.getByText("Valida documento");
    expect(validateButton).not.toBeDisabled();
  });
});
