import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from "../components/ContactForm/ContactForm";

describe("ContactForm", () => {
  test("renders ContactForm component", () => {
    render(<ContactForm />);
    const contactFormElement = screen.getByTestId("contact-form");
    expect(contactFormElement).toBeInTheDocument();
  });

  test("displays error message when fields are missing", () => {
    render(<ContactForm />);
    const submitButton = screen.getByRole("button", { name: /Enviar/i });
    fireEvent.click(submitButton);
    const errorMessage = screen.getByText(/Por favor, complete todos los campos./i);
    expect(errorMessage).toBeInTheDocument();
  });

 

  test("displays success message when form is submitted successfully", () => {
    render(<ContactForm />);
    const nameInput = screen.getByLabelText(/Nombre:/i);
    const emailInput = screen.getByLabelText(/Email:/i);
    const messageInput = screen.getByLabelText(/Mensaje:/i);
    const submitButton = screen.getByRole("button", { name: /Enviar/i });

    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(emailInput, { target: { value: "john.doe@example.com" } });
    fireEvent.change(messageInput, { target: { value: "Hello, this is a test message." } });
    fireEvent.click(submitButton);

    const successMessage = screen.queryByText(/Mensaje enviado con éxito. Gracias por contactarnos./i);
    expect(successMessage).toBeInTheDocument();
  });

  test("does not throw an error when the form is submitted without any input", () => {
    render(<ContactForm />);
    const submitButton = screen.getByRole("button", { name: /Enviar/i });
    fireEvent.click(submitButton);
    const errorMessage = screen.getByText(/Por favor, complete todos los campos./i);
    expect(errorMessage).toBeInTheDocument();
  });

  test("does not throw an error when the form is submitted without invalid email input", () => {
    render(<ContactForm />);
    const nameInput = screen.getByLabelText(/Nombre:/i);
    const emailInput = screen.getByLabelText(/Email:/i);
    const submitButton = screen.getByRole("button", { name: /Enviar/i });

    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(emailInput, { target: { value: "john.doe@example.com" } });
    fireEvent.click(submitButton);

    const errorMessage = screen.queryByText(/Por favor, introduce una dirección de correo válida./i);
    expect(errorMessage).not.toBeInTheDocument();
  });
});

