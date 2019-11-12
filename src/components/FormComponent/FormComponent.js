import React from "react";
import { Formik, Form, Field } from "formik";
import { Input, Dropdown, Button } from "semantic-ui-react";
import { marginRates } from "../../constants/rates";
import { validationSchmema } from "./validation";
import "./styles.scss"

// TODO: Breakout components to setup error handling on validation
const FormComponent = ({ rateType, percentType, setData }) => {
  return (
    <Formik initialValues={
      {
        rate: "",
        margin: "",
        markup: ""
      }}
      onSubmit={(data, { setSubmitting, setFieldValue }) => {
        setSubmitting(true);
        // Make async post call
        setData(data);
        console.log("Response: ", data);
        // async call finishes
        setSubmitting(false);
      }}
      validationSchema={validationSchmema}
      >
      {({ values, setFieldValue}) => (
        <Form className="rate-input-form">
          <Field placeholder={rateType} as={Input} name="rate" />
          <Dropdown 
            placeholder={percentType}
            name={percentType.toLowerCase()}
            options={marginRates} 
            selection 
            value={marginRates.value} 
            onChange={(e, { name, value }) => setFieldValue(name, value)}/>
          <Button color="purple" type="submit">Submit</Button>
        </Form>
      )
      }
    </Formik >
  );
};

export default FormComponent;