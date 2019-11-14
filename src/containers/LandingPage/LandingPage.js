import React from "react";
import { Tab } from "semantic-ui-react";
import BillRate from "../BillRate";
import PayRate from "../PayRate/PayRate";
import "./styles.scss";

// TODO: Add Term Rate Tab
const panes = [
  { menuItem: "Bill Rate", render: () => <Tab.Pane><BillRate /></Tab.Pane> },
  { menuItem: "Pay Rate", render: () => <Tab.Pane><PayRate /></Tab.Pane> },
  { menuItem: "Term Rate", render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
];

const LandingPage = () => <Tab panes={panes} className="payments-landing" />;

export default LandingPage;
