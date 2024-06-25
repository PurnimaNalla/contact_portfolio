import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./Contact.module.css";  // Ensure the path and filename are correct
import { getImageUrl } from "../../utils";

const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),  // Corrected typo from 'requires' to 'required'
    email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    phone: Yup.string()
        .matches(/^[0-9]{10,15}$/, "Invalid phone number")
        .required("Phone number is required"),
    message: Yup.string().required("Message is required"),
});

export const Contact = () => {
    const handleSubmit = async (values, { resetForm }) => {
      try {
        const response = await fetch('http://localhost:5000/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });
  
        if (response.ok) {
          alert('Message sent successfully!');
          resetForm();
        } else {
          alert('Failed to send message.');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('An error occurred. Please try again later.');
      }
    };

    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out</p>
            </div>
            <Formik
                initialValues={{ name: "", email: "", phone: "", message: "" }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form className={styles.form}>  
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Name</label>
                            <Field type="text" id="name" name="name" />
                            <ErrorMessage name="name" component="p" className={styles.error} />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email</label>
                            <Field type="email" id="email" name="email" />
                            <ErrorMessage name="email" component="p" className={styles.error} />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="phone">Phone Number</label>
                            <Field type="tel" id="phone" name="phone" />
                            <ErrorMessage name="phone" component="p" className={styles.error} />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="message">Message</label>
                            <Field as="textarea" id="message" name="message" />
                            <ErrorMessage name="message" component="p" className={styles.error} />
                        </div>
                        <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                            Send Message
                        </button>
                    </Form>
                )}
            </Formik>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
                    <a href="mailto:purnimanalla029@gmail.com">purnimanalla029@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn Icon" />
                    <a href="https://www.linkedin.com/in/purnima-nalla-490771277/">linkedin.com/purnimanalla</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt="Github Icon" />
                    <a href="https://github.com/PurnimaNalla">github.com/purnimanalla</a>
                </li>
            </ul>
        </footer>
    );
};
