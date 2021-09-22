import React from "react";
import { connect } from "react-redux";
import {
  Button,
  FormControl,
  FormControlLabel,
  Typography,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import { changeTab, updateResponse } from "../../../../redux/actions/profile";
import { page_2 } from "../../../asset/js/data";
import logo from "../../../asset/img/logo.png";
//
export const Page2 = ({ changePage, updateResponse, page2R }) => {
  const [answered, setAnswered] = React.useState([]);

  const handleChange = (num, evt) => {
    // get the question no
    const question = page_2.find((item) => item.no === num);
    question.response = evt;
    answered.push(question);
    setAnswered([...answered]);
  };
  const handlePrevAnswered=(response,num)=>{

    const questionRead = page_2.find((item) => item.no === num);

    if(questionRead.response === response){
      return true
    }else{
      return false
    }
  }

  const handleNext = () => {
    updateResponse("Page 2", answered);
    changePage(3);
  };
  const handleBack = () => {
    // updateResponse("Page 1",{...inputs,"SSR":state});
    changePage(1);
  };
  React.useState(()=>{
      setAnswered(page2R)
  },[page2R])
  
  return (
    <section className="wrapper">
      <div className="container">
        <div className="row">
          <div className="col-lg-2" />
          <div className="col-lg-8">
            <div className="intro">
            <div>
                <img src={logo} width="200px"  alt="logo"/>
              </div>
              <p>
                Part A: Knowledge of AOS Orwell’s Service and Products/ Customer
                Satisfaction Survey (CSAT)
              </p>
            </div>

            <div>
              {page_2.map((item, index) => (
                <div key={index} className="mb-4">
                  <div className="d-flex ">
                    <Typography variant="h6" className="mr-2">
                      {item.no}.
                    </Typography>
                    <Typography variant="h6">{item.question} </Typography>
                  </div>
                  <FormControl sx={{ m: 3 }}>
                    {/* <FormLabel component="h1">
                 {item.no} {item.question}
                </FormLabel> */}
                    <RadioGroup>
                      {item.options.map((option, index) => (
                        <div className="col-lg-12" key={index}>
                          <FormControlLabel
                            control={
                              <Radio
                                checked={handlePrevAnswered(option,item.no)}
                                value={option}
                                onChange={() => handleChange(item.no, option)}
                                name={option}
                              />
                            }
                            label={option}
                          />
                        </div>
                      ))}
                    </RadioGroup>
                  </FormControl>
                </div>
              ))}
            </div>
            <div className="first-page-btn two-cta">
              <Button
                variant="outlined"
                disabled={false}
                style={{ textTransform: "none" }}
                onClick={() => handleBack()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-arrow-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                  />
                </svg>{" "}
                Back
              </Button>
              <Button
                variant="outlined"
                disabled={answered.length !== 10}
                className="ml-auto"
                style={{ textTransform: "none" }}
                onClick={() => handleNext()}
              >
                Next
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
              </Button>
            </div>
          </div>
          <div className="col-lg-2" />
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  page: state.profile?.page,
  page2R: state.profile["Page 2"]
});

const mapDispatchToProps = (dispatch) => {
  return {
    changePage: (num) => dispatch(changeTab(num)),
    updateResponse: (page, data) => dispatch(updateResponse({ page, data })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page2);
