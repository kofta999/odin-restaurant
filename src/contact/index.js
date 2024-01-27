import "./contact.css"

export default function Contact() {
  const contactDiv = document.createElement("div");

  const contactTitle = document.createElement("h1");
  const contactText = document.createElement("p");
  const contactEmail = document.createElement("p");
  const contactPhone = document.createElement("p");

  contactTitle.textContent = "Contact Us";
  contactText.textContent =
    "We'd love to hear from you! Whether you have a question about our menu, want to make a reservation, or anything else, our team is ready to answer all your questions.";
  contactEmail.textContent = "Email: info@koftahut.com";
  contactPhone.textContent = "Phone: (123) 456-7890";

  contactDiv.id = "contact"
  contactText.id = "contact-text"
  contactDiv.append(contactTitle, contactText, contactEmail, contactPhone);

  return contactDiv;
}
