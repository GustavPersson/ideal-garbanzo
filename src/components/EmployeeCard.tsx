import React from "react";
import logo from "./logo.svg";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Icon,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

import { Employee } from "../api/getEmployees";
import { LinkedIn, Twitter } from "@mui/icons-material";

type Props = {
  employee: Employee;
};

const EmployeeCard: React.FC<Props> = ({ employee }) => {
  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <CardMedia
        component="img"
        image={
          employee.imageWallOfLeetUrl ||
          employee.imagePortraitUrl ||
          "https://picsum.photos/200"
        }
        height={280}
        alt="Employee picture"
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {employee.name}
        </Typography>
        <Stack direction="row" spacing={2}>
          <Typography
            textAlign="center"
            variant="caption"
            display="flex"
            alignItems="center"
          >
            {employee.office}
          </Typography>
          <Stack
            direction="row"
            flex={1}
            justifyContent="flex-end"
            display="flex"
            alignItems="center"
          >
            {employee.gitHub && (
              <Link
                variant="caption"
                display="flex"
                href={`https://github.com/${employee.gitHub}`}
              >
                <GitHubIcon />
              </Link>
            )}
            {employee.linkedIn && (
              <Link
                variant="caption"
                display="flex"
                href={`https://linkedin.com/${employee.linkedIn}`}
              >
                <LinkedIn />
              </Link>
            )}
            {employee.twitter && (
              <Link
                variant="caption"
                display="flex"
                href={`https://twitter.com/${employee.twitter}`}
              >
                <Twitter />
              </Link>
            )}
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default EmployeeCard;
