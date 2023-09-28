import { useCallback, useEffect, useState } from "react";
import {
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { fetchFromBackend } from "../membersApi";

const MuiTable = () => {
  const [members, setMembers] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(0);
  const limit = 3;

  const fetchMembers = useCallback(
    async (page, limit) => {
      const result = await fetchFromBackend(page, limit);
      setMembers(result.content);
      setTotal(result.totalElements);
    },
    [page, limit],
  );

  useEffect(() => {
    fetchMembers(page, limit);
  }, [page, limit]);

  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {members.map((m) => (
              <TableRow key={m.id}>
                <TableCell>{m.id}</TableCell>
                <TableCell>{m.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Pagination
        count={Math.ceil(total / limit)}
        onChange={(event, value) => {
          setPage(value - 1);
        }}
        variant="outlined"
        shape="rounded"
        boundaryCount={2}
        siblingCount={2}
        showFirstButton={true}
        showLastButton={true}
        sx={{
          marginTop: "12px",
          display: "flex",
          justifyContent: "center",
        }}
      />
    </div>
  );
};

export default MuiTable;
