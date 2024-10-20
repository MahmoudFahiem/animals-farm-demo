import {
  Button,
  Container,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { QRCodeSVG } from "qrcode.react";
import { MouseEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RoutesConfig } from "../configs/routes";

interface Data {
  id: number;
  name: string;
  motherNumber: number;
  fatherNumber: number;
  dob: string;
  barnNumber: number;
  farmName: string;
}

function createData(
  id: number,
  name: string,
  motherNumber: number,
  fatherNumber: number,
  dob: string,
  barnNumber: number,
  farmName: string
): Data {
  return {
    id,
    name,
    motherNumber,
    fatherNumber,
    dob,
    barnNumber,
    farmName,
  };
}

const rows = [
  createData(
    1,
    "Animal1",
    305,
    3.7,
    new Date().toISOString(),
    4.3,
    "Happy Farm"
  ),
  createData(
    2,
    "Animal2",
    452,
    25.0,
    new Date().toISOString(),
    4.9,
    "Happy Farm"
  ),
  createData(
    3,
    "Animal3",
    262,
    16.0,
    new Date().toISOString(),
    6.0,
    "Happy Farm"
  ),
  createData(
    4,
    "Animal3",
    159,
    6.0,
    new Date().toISOString(),
    4.0,
    "Happy Farm"
  ),
  createData(
    5,
    "Animal4",
    356,
    16.0,
    new Date().toISOString(),
    3.9,
    "Happy Farm"
  ),
  createData(
    6,
    "Animal5",
    408,
    3.2,
    new Date().toISOString(),
    6.5,
    "Happy Farm"
  ),
];

export default function Animals() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState<string>("");

  const handleDialogOpen = (e: MouseEvent, url: string) => {
    e.stopPropagation();
    setUrl(`http://localhost:5173${url}`);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container maxWidth="xl" sx={{ py: "2rem" }}>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>QR Code for {url}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <QRCodeSVG value={url} size={128} level={"H"} />
          </DialogContentText>
        </DialogContent>
      </Dialog>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
            <TableHead>
              <TableRow>
                <TableCell align="left">Id</TableCell>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Mother Number</TableCell>
                <TableCell align="left">Father Number</TableCell>
                <TableCell align="left">Date of Birth</TableCell>
                <TableCell align="left">Barn Number</TableCell>
                <TableCell align="left">Farm Name</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => {
                return (
                  <TableRow
                    hover
                    tabIndex={-1}
                    key={row.id}
                    sx={{ cursor: "pointer" }}
                    onClick={() =>
                      navigate(`${RoutesConfig.ANIMALS}/${row.id}`)
                    }
                  >
                    <TableCell>{row.id}</TableCell>
                    <TableCell sx={{ padding: "1rem" }}>{row.name}</TableCell>
                    <TableCell sx={{ padding: "1rem" }}>
                      {row.motherNumber}
                    </TableCell>
                    <TableCell sx={{ padding: "1rem" }}>
                      {row.fatherNumber}
                    </TableCell>
                    <TableCell sx={{ padding: "1rem" }}>{row.dob}</TableCell>
                    <TableCell sx={{ padding: "1rem" }}>
                      {row.barnNumber}
                    </TableCell>
                    <TableCell sx={{ padding: "1rem" }}>
                      {row.farmName}
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        onClick={(e) =>
                          handleDialogOpen(
                            e,
                            `${RoutesConfig.ANIMALS}/${row.id}`
                          )
                        }
                      >
                        View QR Code
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
}
