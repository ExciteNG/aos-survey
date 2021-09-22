import React from "react";
import { connect } from 'react-redux'
import {
  Button,
  Checkbox,
  TextField,
  FormControl,
  FormControlLabel,
  FormLabel,
  FormGroup,
} from "@material-ui/core";
import logo from "./../../../asset/img/logo.png";
import { services } from "../../../asset/js/data";
import { changeTab, updateResponse } from "../../../../redux/actions/profile";


// 
const Index = ({changePage, updateResponse,page1}) => {
  // console.log(process.env.REACT_APP_TEST_VAR)

  // console.log(changePage)
  const [state, setState] = React.useState([]);

  const [inputs, setInputs] = React.useState({
    "Name":"",
    "Company":"",
    "Job Title":"",
  });
  React.useEffect(()=>{
    setInputs(page1)
  },[page1])
  React.useEffect(()=>{
    setState(page1["SRR"])
  },[page1])

  const handleChange = (event) => {
    if (event.target.value === "All the Above") return handleCheckAll(event);
    if (event.target.checked) {
      state.push(event.target.value);
      setState([...state]);
    } else {
      setState([...state.filter((item) => item !== event.target.value)]);
    }
  };
  const handleCheckAll = (e) => {
    if (e.target.checked) {
      return setState([...services]);
    } else {
      return setState([]);
    }
  };

  const handleInputChange=(e)=>{
    inputs[e.target.name]= e.target.value;
    setInputs({...inputs})
  }

  const handleNext=()=>{
    updateResponse("Page 1",{...inputs,"SRR":state});
    changePage(2)
  }
const handleDisabledNext=()=>{
  if(!inputs.Company.trim() || !inputs["Job Title"].trim() || !inputs.Name.trim() || state.length < 1) return true;
  return false;
}
  return (
    //
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
                At AOS Orwell, we use your feedback to improve the quality of
                our products and services, thank you for taking time to complete
                this survey
              </p>
            </div>
            <TextField
              label="Name"
              fullWidth
              variant="outlined"
              className="mb-4"
              name="Name"
              value={inputs["Name"]}
              onChange={handleInputChange}
            />
            <TextField
              label="Job Title"
              fullWidth
              variant="outlined"
              className="mb-4"
              name="Job Title"
              value={inputs["Job Title"]}
              onChange={handleInputChange}

            />
            <TextField
              label="Company"
              fullWidth
              variant="outlined"
              className="mb-4"
              name="Company"
              value={inputs["Company"]}
              onChange={handleInputChange}

            />
            <div>
              <FormControl sx={{ m: 3 }}>
                <FormLabel component="legend">
                  Please select which of the following services that is or are
                  relevant to your responses.
                </FormLabel>
                <FormGroup row>
                  {services.map((item, index) => (
                    <div className="col-lg-6" key={index}>
                      <FormControlLabel
                      
                        control={
                          <Checkbox
                            checked={state.includes(item)}
                            value={item}
                            onChange={handleChange}
                            name={item}
                          />
                        }
                        label={item}
                      />
                    </div>
                  ))}
                </FormGroup>
              </FormControl>
            </div>
            <div className="first-page-btn">
              <Button variant="outlined" disabled={handleDisabledNext()} className="ml-auto" style={{textTransform:'none'}} onClick={()=>handleNext()}>
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
                    fill-rule="evenodd"
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
  page:state.profile.page,
  page1:state.profile["Page 1"]
})

const mapDispatchToProps = (dispatch)=> {
  return{
    changePage:(num)=>dispatch(changeTab(num)),
    updateResponse:(page,data)=>dispatch(updateResponse({page,data}))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)