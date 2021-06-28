import React, { useState } from "react";
import {
  Typography,
  TextField,
  MenuItem,
  InputAdornment,
  Radio,
  Button,
  Avatar,
} from "@material-ui/core";
import {
  allCountries,
  getCountryDial_Code,
  States,
} from "./../../../../utility/Countries";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import FacebookLogin from "react-facebook-login";
// import SocialLoginComponent from "../../../../utility/SocialLoginComponent";
import useAxios from "../../../../utility/axios-token-manager/init";
import Flash from "../../../../utility/Flash";
import { loadStart,loadStop } from "../../../../redux/actions/loading";
import { useDispatch } from "react-redux";
//
export default function Form() {
  const dispatch = useDispatch()
  const [country, setCountry] = useState(allCountries()[0]);

  //coverage
  const [coverage, setCoverage] = React.useState([]);
  const handleToggleCoverage = (value) => () => {
    const currentIndex = coverage.indexOf(value);
    const newChecked = [...coverage];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setCoverage(newChecked);
    inputs.coverage = [...newChecked];
    setInputs({ ...inputs });
  };
  //socials
  const [socials, setSocials] = React.useState([]);
  const handleToggleSocials = (value) => () => {
    const currentIndex = socials.indexOf(value);
    const newChecked = [...socials];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setSocials(newChecked);
    inputs.socialMedialPlatform = [...newChecked];
    setInputs({ ...inputs });
  };
  // negotiable
  const [negotiable, setNegotiable] = React.useState(null);
  const handleNegotiable = (value) => {
    setNegotiable(value);
    inputs.negotiable = value;
    setInputs({ ...inputs });
  };

  // connect fb
  const [permitFb, setPermitFb] = useState(false);
  const [userFB, setUserFB] = useState({ name: "", img: "", friend: "" });
  const handleFBLogin = (e) => {
    console.log(e);
    if (e.status === "unknown") {
      return console.log("rejected");
    }
    const { name, picture, friends } = e;
    const img = picture.data?.url;
    const friend = friends.summary?.total_count;
    setUserFB({ name: name, img: img, friend: friend });
    setPermitFb(true);
    // console.log(name,img,friend)
  };

  const [inputs, setInputs] = useState({
    fullName: "",
    email: "",
    mobile: "",
    stateOfResidence: "",
    socialMedialPlatform: [],
    socialMediaHandles: { facebook: "", instagram: "", youtube: "" },
    noOfFollowers: {},
    influencerLevel: "",
    amountPerPost: "",
    country: country,
    coverage: [],
    marketingSpeciality: [],
    negotiable: negotiable,
    password: "",
    password2: "",
  });

  const handleChange = (e) => {
    inputs[e.target.name] = e.target.value;
    setInputs({ ...inputs });
  };

  const handleSubmit = async () => {
    const data = {
      ...inputs,
      mobile: `${getCountryDial_Code(inputs.country)} ${inputs.mobile}`,
    };
    dispatch(loadStart())
    // console.log(data);
    try {
      const response = await useAxios.post(
        "/auth/influencer-marketer/sign-up",
        data
      );
      dispatch(loadStop())
      if(response.data.code===401) return Flash('error','Email already in use','',3000);
      if(response.data.code===201) return Flash('success','Account created successfully','',3000)
      console.log(response.data);
    } catch (error) {
      console.log(error);
      dispatch(loadStop())
      return Flash('error','Network/Server error','',3000);
    }
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <Typography variant="h6" className="text-center mb-2">
        Influencer Application Form
      </Typography>
      <Typography variant="body2" className="text-center mb-2">
        Thank you for your interest in our Influencer Marketing Programme.
        Please fill the form below to get started.
      </Typography>
      <div>
        <div className="row">
          <div className="col-lg-12 mt-4 mb-3">
            <TextField
              label="Fullname"
              fullWidth
              name="fullName"
              autoComplete="Off"
              value={inputs.fullName}
              onChange={handleChange}
            />
          </div>
          <div className="col-lg-12 mb-3">
            <TextField
              label="Email"
              fullWidth
              name="email"
              autoComplete="Off"
              value={inputs.email}
              onChange={handleChange}
            />
          </div>

          <div className="col-lg-6 mb-3">
            <TextField
              label="Country of Residence"
              fullWidth
              select
              value={country}
              name="country"
              onChange={(e) => {
                setCountry(e.target.value);
                handleChange(e);
              }}
            >
              {allCountries().map((country, index) => (
                <MenuItem value={country} key={index}>
                  {country}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div className="col-lg-6 mb-3">
            <TextField
              label="Mobile Number"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <span>{getCountryDial_Code(country)}</span>
                  </InputAdornment>
                ),
              }}
              name="mobile"
              autoComplete="Off"
              value={inputs.mobile}
              onChange={handleChange}
            />
          </div>
          <div className="col-lg-6 mb-3">
            <TextField
              label="State of Residence"
              fullWidth
              select
              name="stateOfResidence"
              autoComplete="Off"
              value={inputs.stateOfResidence}
              onChange={handleChange}
            >
              {States(country).map((country, index) => (
                <MenuItem value={country} key={index}>
                  {country}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div className="col-lg-6"></div>
          <div className="col-lg-6 mb-3">
            <Typography>Coverage (where do your influence cover)</Typography>
            <List dense className="color-blur">
              {["Worldwide", "Nationwide", "North", "South"].map((value) => {
                const labelId = `checkbox-list-secondary-label-${value}`;
                return (
                  <>
                    <ListItem key={value} button>
                      <ListItemText id={labelId} primary={`${value}`} />
                      <ListItemSecondaryAction>
                        <Checkbox
                          edge="end"
                          onChange={handleToggleCoverage(value)}
                          checked={coverage.indexOf(value) !== -1}
                          inputProps={{ "aria-labelledby": labelId }}
                        />
                      </ListItemSecondaryAction>
                    </ListItem>
                  </>
                );
              })}
            </List>
          </div>
          <div className="col-lg-6 mb-3">
            <Typography>Which social media platform do you use ?</Typography>
            <List dense className="color-blur">
              {["Facebook", "Instagram", "Twitter", "SnapChat"].map((value) => {
                const labelId = `checkbox-list-secondary-label-${value}`;
                return (
                  <>
                    <ListItem key={value} button>
                      <ListItemText id={labelId} primary={`${value}`} />
                      <ListItemSecondaryAction>
                        <Checkbox
                          edge="end"
                          onChange={handleToggleSocials(value)}
                          checked={socials.indexOf(value) !== -1}
                          inputProps={{ "aria-labelledby": labelId }}
                        />
                      </ListItemSecondaryAction>
                    </ListItem>
                  </>
                );
              })}
            </List>
          </div>
          <div className="col-lg-12 row mb-4">
            {socials.includes("Facebook") ? (
              <div className="col-lg-4">
                {!permitFb && typeof window !== "undefined" ? (
                  <FacebookLogin
                    appId={process.env.REACT_APP_FB_APPID}
                    autoLoad={true}
                    fields="name,email,picture,friends"
                    edge="accounts"
                    scope="public_profile,user_friends,pages_show_list"
                    callback={(e) => handleFBLogin(e)}
                    textButton="Connect Facebook"
                    cssClass="facebook-connect-btn"
                  />
                ) : (
                  ""
                )}
                {permitFb ? (
                  <div className="social-profile-area">
                    <Typography className="mb-2">Facebook Profile</Typography>
                    <div className="d-flex">
                      <div className="mr-2">
                        <Avatar src={userFB.img}></Avatar>
                      </div>
                      <div>
                        <Typography variant="h6">{userFB.name}</Typography>
                        <Typography>No of Friends: {userFB.friend}</Typography>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="col-lg-4">
            <TextField
              label="How much do you charge per post ?"
              fullWidth
              type="number"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <span>&#8358;</span>
                  </InputAdornment>
                ),
              }}
              name="amountPerPost"
              autoComplete="Off"
              value={inputs.amountPerPost}
              onChange={handleChange}
            />
            <div className="mt-2">
              <Typography>Is it negotiable ?</Typography>
              <List dense className="d-flex color-blur">
                {["Yes", "No"].map((value) => {
                  const labelId = `checkbox-list-secondary-label-${value}`;
                  return (
                    <>
                      <ListItem key={value} button>
                        <ListItemText id={labelId} primary={`${value}`} />
                        <ListItemSecondaryAction>
                          <Radio
                            edge="end"
                            onChange={() => handleNegotiable(value)}
                            checked={negotiable === value}
                            inputProps={{ "aria-labelledby": labelId }}
                          />
                        </ListItemSecondaryAction>
                      </ListItem>
                    </>
                  );
                })}
              </List>
            </div>
          </div>
        </div>
        <div className="row" style={{ marginTop: "20px" }}>
          <Typography className="col-lg-12">Create Password</Typography>
          <div className="col-lg-6">
            <TextField
              label="Password"
              fullWidth
              type="password"
              name="password"
              autoComplete="Off"
              value={inputs.password}
              onChange={handleChange}
            />
          </div>
          <div className="col-lg-6">
            <TextField
              label="Confirm Password"
              fullWidth
              type="password"
              name="password2"
              autoComplete="Off"
              value={inputs.password2}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mb-4 mt-4 policy-disclaimer color-blur">
          <label>
            To process your application, you’ll need to agree to the{" "}
            <a href="/terms_conditions">Terms &amp; Condition</a>. We process
            your information as described in our{" "}
            <a href="/privacy">Privacy Policy</a>.
          </label>
        </div>
        <div className="d-flex align-items-center">
          <Checkbox />{" "}
          <Typography variant="body1">
            I've read and agreed to the terms of service.
          </Typography>
        </div>
        <div style={{ marginTop: "40px", marginBottom: "40px" }}>
          <div className="row">
            <div className="col-lg-4 col-sm-12">
              <Button className="w-100 bg-pry" onClick={handleSubmit}>
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
