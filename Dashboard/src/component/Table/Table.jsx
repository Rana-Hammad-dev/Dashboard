import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Table.css'

function createData(
    name, trackingId, date, status
) {
    return { name, trackingId, date, status };
}

const rows = [
    createData("Lasania Chiken Fri", 18908424, "2 March 2022", "Approved"),
    createData("Big Baza Bang ", 18908424, "2 March 2022", "Pending"),
    createData("Mouth Freshner", 18908424, "2 March 2022", "Approved"),
    createData("Cupcake", 18908421, "2 March 2022", "Delivered"),
];

function makeStatus(status) {
    if (status === "Approved") {
        return {
            background: "rgb(145 254 159/47%)",
            color: "green"
        }
    } else if (status === "Pending") {
        return {
            background: "#ffadad8f",
            color: "red"
        }
    } else {
        return {
            background: "#59bfff",
            color: "white"
        }
    }
}

export default function BasicTable() {



    return (
        <div className="table">
            <h3>Recent data</h3>
            <TableContainer component={Paper} style={{ boxShadow: "0px 4px 7px 0px #e7e6e6ff" }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="left">TrackingID&nbsp;</TableCell>
                            <TableCell align="left">Date&nbsp;</TableCell>
                            <TableCell align="left">Status&nbsp;</TableCell>
                            <TableCell align="left"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="left">{row.trackingId}</TableCell>
                                <TableCell align="left">{row.date}</TableCell>
                                <TableCell align="left">
                                    <span className='status' style={makeStatus(row.status)}>{row.status}</span>
                                </TableCell>
                                <TableCell align="left">Detail</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}