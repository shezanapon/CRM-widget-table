import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button } from "@mui/material";

function createData(name, email) {
  return { name, email };
}

const rows = [
  createData("Novak Balazs", "manhhachkt08@gmail.com"),
  createData("Szucs Endre", "manhhachkt08@gmail.com"),
  createData("Szabo Jakab", "manhhachkt08@gmail.com"),
  createData("Fekete Csanad", "manhhachkt08@gmail.com"),
  createData("Simon Arpad", "manhhachkt08@gmail.com"),
  createData("Simon Arpad", "manhhachkt08@gmail.com"),
];

export default function BasicTable() {
  return (
    <Box p={4}>
      <Box sx={{ bgcolor: "#ebf2f5", borderRadius: "5px" }}>
        <h2
          style={{
            paddingTop: "10px",
            paddingLeft: "15px",
            paddingBottom: "15px",
          }}
        >
          Sub Contractors
        </h2>
      </Box>
      <br />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>contractor name</TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="left">
                Email
              </TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.email}</TableCell>
                <TableCell align="left">
                  <Button>Allocate</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
