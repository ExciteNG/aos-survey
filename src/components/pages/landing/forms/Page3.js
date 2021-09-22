import React from "react";
import { connect } from "react-redux";
import { page_3 } from "../../../asset/js/data";
import {
  changeTab,
  submitStatus,
  updateResponse,
} from "../../../../redux/actions/profile";
import { Button, TextField, Typography } from "@material-ui/core";
import logo from "../../../asset/img/logo.png";
import useAxios from "../../../../utility/axios-token-manager/init";
import { loadStart, loadStop } from "../../../../redux/actions/loading";
//
export const Page3 = ({
  changePage,
  updateResponse,
  page1,
  page2,
  page3,
  status,
  submitState,
  isSubmitting,
  isNotSubmitting,
}) => {
  const [recommend, setRecommend] = React.useState(null);
  const [pryReasonForScore, setPryReasonForScore] = React.useState("");
  const [suggestion, setSuggestion] = React.useState("");

  React.useState(() => {
    setRecommend(page3["Recommend"]);
    setPryReasonForScore(page3["PRS"]);
    setSuggestion(page3["Suggestion"]);
  }, [page3]);

  const handleNext = async () => {
    const data = {
      ...page1,
      Responses: [...page2],
      Score: recommend,
      PRS: pryReasonForScore,
      Suggestion: suggestion,
    };
    if (submitState) return alert("Submitted already");
    try {
      isSubmitting();
      const response = await useAxios.post("/api/survey/new-response", data);
      isNotSubmitting();
      if (response.status === 201) {
        status(true);
        changePage(4);
        // alert("Survey submitted");
      }
      // console.log(response);
    } catch (error) {
      console.log(error);
    }
    // console.log(data);
    // updateResponse("Page 2", answered);
    // changePage(3);
  };
  const handleBack = () => {
    updateResponse("Page 3", {
      Recommend: recommend,
      PRS: pryReasonForScore,
      Suggestion: suggestion,
    });
    changePage(2);
  };

  return (
    <section className="wrapper">
      <div className="container">
        <img src={logo} width="120px" className="m-auto" alt="logo" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-2" />
          <div className="col-lg-8">
            <div className="intro">
            <div>
                <img src={logo} width="120px"  alt="logo"/>
              </div>
              <p>Part B: Net Promoter Score (NPS)</p>
            </div>
            <div>
              {/* code here */}
              <div className="d-flex">
                <Typography variant="h6" className="mr-4">
                  {page_3[0].no}.
                </Typography>
                <Typography variant="h6">{page_3[0].question} </Typography>
              </div>
              <div>
                <div className="d-flex justify-content-between mb-2 mt-4">
                  <Typography
                    variant="overline"
                    style={{ textTransform: "none" }}
                  >
                    Not at all likely
                  </Typography>
                  <Typography
                    variant="overline"
                    className="extreme-lg"
                    style={{ textTransform: "none" }}
                  >
                    Extremely likely
                  </Typography>
                </div>
                <span className="recommend-wrapper">
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
                    <Button
                      variant="outlined"
                      className={recommend === item ? "active" : "non0active"}
                      key={index}
                      onClick={() => setRecommend(item)}
                    >
                      {item}
                    </Button>
                  ))}
                </span>
                <Typography
                  className="extreme-md"
                  variant="overline"
                  style={{ textTransform: "none" }}
                >
                  Extremely likely
                </Typography>
              </div>
            </div>
            {/* question 2 */}
            <div className="mt-3">
              <div className="d-flex">
                <Typography variant="h6" className="mr-4">
                  {page_3[1]?.no}.
                </Typography>
                <Typography variant="h6">{page_3[1]?.question} </Typography>
              </div>
              <div>
                <TextField
                  value={pryReasonForScore}
                  onChange={(e) => setPryReasonForScore(e.target.value)}
                  rows={5}
                  placeholder="Type here..."
                  fullWidth
                  multiline
                  variant="outlined"
                />
              </div>
            </div>
            {/* question 3 */}
            <div className="mt-3">
              <div className="d-flex">
                <Typography variant="h6" className="mr-4">
                  {page_3[2]?.no}.
                </Typography>
                <Typography variant="h6">{page_3[2]?.question} </Typography>
              </div>
              <div>
                <TextField
                  value={suggestion}
                  onChange={(e) => setSuggestion(e.target.value)}
                  rows={5}
                  placeholder="Type here..."
                  fullWidth
                  multiline
                  variant="outlined"
                />
              </div>
            </div>
            {/*  */}
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
                // disabled={answered.length < 10}
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
  page1: state.profile["Page 1"],
  page2: state.profile["Page 2"],
  page3: state.profile["Page 3"],
  submitState: state.profile.submitStatus,
});

const mapDispatchToProps = (dispatch) => {
  return {
    changePage: (num) => dispatch(changeTab(num)),
    updateResponse: (page, data) => dispatch(updateResponse({ page, data })),
    status: (state) => dispatch(submitStatus(state)),
    isSubmitting: () => dispatch(loadStart()),
    isNotSubmitting: () => dispatch(loadStop()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page3);
