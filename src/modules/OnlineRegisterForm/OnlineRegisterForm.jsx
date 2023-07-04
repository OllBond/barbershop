import { Formik, Form, Field } from "formik";

import Button from "../../shared/components/Button/Button";

import css from "./online-register-form.module.css";

const initialValues = {
  name: "",
  phone: "",
  message: "",
};
const OnlineRegisterForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form autoComplete="off">
        <h2 className={css.titleForm}>Онлайн-запис</h2>
        <div className={css.fieldWrapper}>
          <Field
            className={css.input}
            type="text"
            name="name"
            placeholder="Ім'я"
          />
          <Field
            className={css.input}
            type="tel"
            name="phone"
            placeholder="Teлефон"
          />
          <Field
            className={css.input}
            name="message"
            placeholder="Повідомлення"
            as="textarea"
            rows="4"
          ></Field>
          <Button text="ВІДПРАВИТИ" type="submit" />
        </div>
      </Form>
    </Formik>
  );
};
export default OnlineRegisterForm;
