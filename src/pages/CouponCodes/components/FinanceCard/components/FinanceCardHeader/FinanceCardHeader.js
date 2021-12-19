import React from "react";
import DateToggleButtons from "../../../DateToggleButtons/DateToggleButtons";
import FinanceSelect from "../FinanceSelect/FinanceSelect";
import "./styles.css";

const DashboardCardHeader = ({ title, dates, large, select }) => {
  return (
    <header className="dashboardCardHeader">
      {title && (
        <span
          className={`dashboardCardHeaderTitle ${large ? "bigHeader" : ""}`}
        >
          {title}
        </span>
      )}
      <div style={{display:'flex'}}>
      {select && <FinanceSelect />}
      {dates && <DateToggleButtons dateClasses={dates} />}
      </div>
    </header>
  );
};

export default DashboardCardHeader;
