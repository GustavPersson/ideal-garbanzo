import React from "react";
import "./App.css";
import { Container } from "@mui/material";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";

import EmployeeContainer from "./components/EmployeeContainer";
import SortAndFilter from "./components/SortAndFilter";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Container sx={{ py: 8 }} maxWidth="md">
        <SortAndFilter />
        <EmployeeContainer />
      </Container>
    </QueryClientProvider>
  );
};

export default App;
