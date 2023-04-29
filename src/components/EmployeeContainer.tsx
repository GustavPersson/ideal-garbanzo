import React, { useEffect } from "react";
import logo from "./logo.svg";
import {
  Alert,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import getEmployees, { Employee } from "../api/getEmployees";
import { useQuery } from "react-query";
import EmployeeCard from "./EmployeeCard";

const EmployeeContainer: React.FC = () => {
  const { isLoading, isError, data, error } = useQuery(
    "employees",
    getEmployees
  );

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return (
      <Alert severity="error">Something went wrong fetching the data.</Alert>
    );
  }

  return (
    <Grid container spacing={8}>
      {data?.map((employee) => (
        <Grid item key={employee.email} xs={12} sm={6} md={4}>
          <EmployeeCard employee={employee} />
        </Grid>
      ))}
    </Grid>
  );
};

export default EmployeeContainer;
