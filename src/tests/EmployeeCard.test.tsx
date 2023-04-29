import React from "react";
import { render } from "@testing-library/react";
import EmployeeCard from "../components/EmployeeCard";

import { employee } from "./utilities/mockData";

describe("<EmployeeCard />", () => {
  test("renders employee card", () => {
    expect(
      render(<EmployeeCard employee={employee} />).asFragment()
    ).toMatchSnapshot();
  });
});
