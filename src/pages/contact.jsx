import React, { Component, Fragment } from "react";
import Banner from "../components/Banner";
import { TextField, Container, Button, Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { useForm, Controller } from "react-hook-form";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.form = React.createRef();
  }
  state = {
    email: "",
    name: "",
    phone: "",
    message: "",
    open: false,
    setOpen: false,
  };

  handleChange = (event) => {
    // const email = event.target.value;
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = () => {
    // your submit logic
    // this.setState({ open: true });

    this.setState((state) => ({
      ...state.open,
      open: true,
      email: "",
      name: "",
      phone: "",
      message: "",
    }));
  };

  handleClick = () => {
    this.setState({ open: true });
  };

  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState({ open: false });
  };
  render() {
    return (
      <Fragment>
        <Banner title="contact us" />
        <Container>
          <React.StrictMode>
            <ValidatorForm
              className="contact-form"
              ref={this.form}
              onSubmit={this.handleSubmit}
              onError={(errors) => console.log(errors)}
            >
              <TextValidator
                variant="outlined"
                label="Name"
                onChange={this.handleChange}
                fullWidth
                name="name"
                value={this.state.name}
                validators={["required"]}
                errorMessages={["this field is required"]}
                className="mt-2"
              />
              <TextValidator
                variant="outlined"
                label="Email"
                onChange={this.handleChange}
                fullWidth
                name="email"
                value={this.state.email}
                validators={["required", "isEmail"]}
                errorMessages={["this field is required", "email is not valid"]}
                className="mt-2"
              />
              <TextValidator
                variant="outlined"
                label="Phone"
                onChange={this.handleChange}
                fullWidth
                name="phone"
                value={this.state.phone}
                validators={[
                  "required",
                  "matchRegexp:^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$",
                ]}
                errorMessages={["this field is required"]}
                className="mt-2"
              />
              <TextValidator
                variant="outlined"
                label="message"
                onChange={this.handleChange}
                fullWidth
                name="message"
                value={this.state.message}
                validators={["required"]}
                errorMessages={["this field is required"]}
                className="mt-2"
              />

              <div className="text-center">
                <Button
                  type="submit"
                  color="secondary"
                  variant="contained"
                  className="mt-5"
                >
                  Submit
                </Button>
              </div>
            </ValidatorForm>
            <Snackbar
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              open={this.state.open}
              autoHideDuration={6000}
              onClose={this.handleClose}
            >
              <Alert onClose={this.handleClose} severity="success">
                Thanks for Submition
              </Alert>
            </Snackbar>
          </React.StrictMode>
        </Container>
      </Fragment>
    );
  }
}

export default Contact;
