import React from "react";
import PropTypes from "prop-types";
import { Table } from "semantic-ui-react";
import "./styles.scss";

// TODO: Style component, possibly add modal or display for term rate calc
const ValuesComponent = ({
  billRate, payRate, termRate, percentage, type
}) => {
  ValuesComponent.propTypes = {
    billRate: PropTypes.string.isRequired,
    payRate: PropTypes.string.isRequired,
    termRate: PropTypes.string.isRequired,
    percentage: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  };

  return (
    <Table className="values-container" celled striped textAlign="center">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell className="values-header" colspan={8}>Calculated Values</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body className="values-body">
        <Table.Row>
          <Table.Cell textAlign="center">
            Bill Rate
          </Table.Cell>
          <Table.Cell textAlign="center">
            {billRate}
          </Table.Cell>
          <Table.Cell textAlign="center">
            Pay Rate
          </Table.Cell>
          <Table.Cell textAlign="center">
            {payRate}
          </Table.Cell>
          <Table.Cell textAlign="center">
            Term Rate
          </Table.Cell>
          <Table.Cell textAlign="center">
            {termRate}
          </Table.Cell>
          <Table.Cell textAlign="center">
            {type}
          </Table.Cell>
          <Table.Cell textAlign="center">
            {percentage || "0"}
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
};

export default ValuesComponent;
