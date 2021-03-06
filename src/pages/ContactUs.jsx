import React, { useState } from "react";
import axios from "axios";
import { Avatar, Button, TextField, Typography, Box } from "@material-ui/core";
import { MdMailOutline, MdPhoneIphone, MdLocationOn } from "react-icons/md";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  contact_us_container: {
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    marginTop: "3rem",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      marginTop: "1rem",
    },
  },
  left_container: {
    width: "55%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "40%",
    },
  },
  office_details: {
    padding: "20px 0",
    // backgroundColor: "#ccc",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  detail_wrapper: {
    maxWidth: "65%",
  },
  office_detail: {
    display: "flex",
    marginBottom: "10px",
  },
  office_detail_info: {
    marginLeft: "15px",
  },
  right_container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 24px",
    width: "45%",
    [theme.breakpoints.down("sm")]: {
      width: "auto",
      marginTop: "3rem",
    },
    [theme.breakpoints.up("lg")]: {
      width: "60%",
    },
  },
  form_container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
}));

const ContactUs = (props) => {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [error, setError] = useState(false);
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState("");
  const [buttonText, setButtonText] = useState("Submit");

  const handleChangeEmail = (e) => {
    if (
      !e.target.value.match(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      setEmail(e.target.value);
      setEmailError(true);
      setError(true);
      if (email === "") {
        // check if the input is empty
        setEmailError(false);
        setError(false);
      }
    } else {
      setEmail(e.target.value);
      setEmailError(false);
      setError(false);
    }
  };

  const resetForm = () => {
    setName("");
    setMobile("");
    setEmail("");
    setDescription("");
    setBudget("");
    setButtonText("Message Sent");

    // setTimeout(() => {
    //   this.setState({ sent: false });
    // }, 3000);
  };

  const formSubmit = async (e) => {
    e.preventDefault();

    if (name === "" || email === "" || mobile === "" || description === "") {
      setError(true);
      return;
    }
    setButtonText("...sending");
    let data = {
      name,
      email,
      description,
      mobile,
      budget,
    };

    try {
      await axios.post("BACKEND_URL", data);
      // this.setState({ sent: true }, resetForm());
      resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Typography
        variant="h1"
        style={{
          paddingTop: "24px",
          fontWeight: 500,
          lineHeight: 1,
          letterSpacing: "-0.025em",
          fontSize: `clamp(2rem, 8vw, 4rem)`,
          textTransform: "capitalize",
          textAlign: "center",
          fontFamily: "DM Sans, sans-serif",
        }}
      >
        collaborate with us
      </Typography>
      <div className={classes.contact_us_container} id="contact-us">
        <div className={classes.left_container}>
          <div className={classes.office_details}>
            <div className={classes.detail_wrapper}>
              <Typography
                variant="h6"
                component="h6"
                style={{
                  marginBottom: "1rem",
                }}
              >
                Feel free to step in:{" "}
              </Typography>
              <div className={classes.office_detail}>
                {/* <BusinessIcon /> */}
                <Box display="flex" justifyContent="center" alignItems="center">
                  <MdLocationOn />
                </Box>
                <Typography className={classes.office_detail_info}>
                  Agara Lake Trail, Agara Village, 1st Sector, HSR Layout,
                  Bengaluru, Karnataka 560034
                </Typography>
              </div>
              <div className={classes.office_detail}>
                {/* <PhoneIcon /> */}
                <Box display="flex" justifyContent="center" alignItems="center">
                  <MdPhoneIphone />
                </Box>
                <Typography className={classes.office_detail_info}>
                  7338698999
                </Typography>
              </div>
              <div className={classes.office_detail}>
                {/* <EmailIcon /> */}
                <Box display="flex" justifyContent="center" alignItems="center">
                  <MdMailOutline />
                </Box>
                <Typography className={classes.office_detail_info}>
                  thefossilinteriors@gmail.com
                </Typography>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.right_container}>
          <div className={classes.form_container}>
            {/* <Avatar className={classes.avatar}> */}
            {/* <LockOutlinedIcon /> */}
            {/* </Avatar> */}
            <Typography component="h6" variant="h6">
              Drop your queries here{" "}
            </Typography>
            <form
              className={classes.form}
              noValidate
              onSubmit={(e) => formSubmit(e)}
            >
              {error && <h4 style={{ color: "red" }}> Please fill the form</h4>}
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                // autoFocus
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                // autoFocus
                value={email}
                onChange={(e) => handleChangeEmail(e)}
                error={emailError}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="mobile"
                label="Mobile No"
                name="mobile"
                autoComplete="mobile"
                // autoFocus
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                inputProps={{ maxLength: 10 }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="description"
                label="Description"
                name="description"
                autoComplete="description"
                // autoFocus
                multiline
                rowsMax={4}
                // type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />

              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="budget"
                label="Budget"
                name="budget"
                autoComplete="budget"
                // autoFocus
                value={budget}
                type="number"
                onChange={(e) => setBudget(e.target.value)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                {buttonText}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
