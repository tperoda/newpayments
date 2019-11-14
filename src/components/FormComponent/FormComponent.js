import React from "react";
import PropTypes from "prop-types";
import { Formik, Form, Field } from "formik";
import { Input, Dropdown, Button } from "semantic-ui-react";
import { validationSchmema } from "./validation";
import "./styles.scss";

// TODO: Breakout components to setup error handling on validation
const FormComponent = ({
  rateType, percentType, setData, percentageRates
}) => {
  FormComponent.propTypes = {
    rateType: PropTypes.string.isRequired,
    percentType: PropTypes.string.isRequired,
    setData: PropTypes.func.isRequired,
    percentageRates: PropTypes.shape({}).isRequired
  };

  return (
    <Formik
      initialValues={
      {
        rate: "",
        margin: "",
        markup: ""
      }
    }
      onSubmit={(data, { setSubmitting }) => {
        setSubmitting(true);
        // Make async post call
        setData(data);
        // async call finishes
        setSubmitting(false);
      }}
      validationSchema={validationSchmema}
    >
      {({ setFieldValue }) => (
        <Form className="rate-input-form">
          <Field placeholder={rateType} as={Input} name="rate" />
          <Dropdown
            placeholder={percentType}
            name={percentType.toLowerCase()}
            options={percentageRates}
            selection
            value={percentageRates.value}
            onChange={(e, { name, value }) => setFieldValue(name, value)}
          />
          <Button className="form-button" type="submit">Submit</Button>
        </Form>
      )}
    </Formik>
  );
};

export default FormComponent;
