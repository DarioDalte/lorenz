import React from "react";

import classes from "./StepProgressBar.module.css";

import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import CodeIcon from "@mui/icons-material/Code";
import ComputerIcon from "@mui/icons-material/Computer";
//filledBackground="linear-gradient(to right, #81f031, #48a307)"

class StepProgressBar extends React.Component {
  render() {
    return (
      <div className={classes['progress-bar']}>
        <ProgressBar
          percent={this.props.percent}
          filledBackground="linear-gradient(to right, #6f42f5, #5509d9)"
          className={classes.test}
        >
          <Step transition="scale">
            {({ accomplished }) => (
              <HistoryEduIcon
                sx={{
                  fontSize: 40,
                  color: `${accomplished ? "#BC6FF1" : "white"}`,
                }}
                className={classes.iconLeft}
              />
            )}
          </Step>
          <Step transition="scale">
            {({ accomplished }) => (
              <CodeIcon
                sx={{
                  fontSize: 40,
                  color: `${accomplished ? "#BC6FF1" : "white"}`,
                }}
                className={classes.iconCenter}
              />
            )}
          </Step>
          <Step transition="scale">
            {({ accomplished }) => (
              <ComputerIcon
                sx={{
                  fontSize: 40,
                  color: `${accomplished ? "#BC6FF1" : "white"}`,
                }}
                className={classes.iconRight}
              />
            )}
          </Step>
        </ProgressBar>
      </div>
    );
  }
}

export default StepProgressBar;
