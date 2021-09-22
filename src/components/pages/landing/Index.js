import React from "react";
import { connect } from "react-redux";
import Page1 from "./forms/Index";
import Page2 from "./forms/Page2";
import Page3 from "./forms/Page3";
import AcknowledgePage from "./forms/AcknowledgePage";

import { changeTab} from "../../../redux/actions/profile";

export const Index = ({ page, changePage }) => {
  // console.log(page,changePage)

  const handleDisplay = () => {
    switch (page) {
      case 1:
        return <Page1 />;
      case 2:
        return <Page2 />;
      case 3:
        return <Page3 />;
      case 4:
        return <AcknowledgePage />;
      default:
        return <Page1 />;
    }
  };
  return (
    //
    <React.Fragment>{handleDisplay()}</React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  page: state.profile.page,
});

const mapDispatchToProps = (dispatch) => {
  return {
    changePage: (num) => dispatch(changeTab(num)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
