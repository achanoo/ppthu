/** @format */

import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { useAuthContext } from "./../context/AuthContext";
function AlertMessage({ type = "success", msg = "success message", alert }) {
  const { resetAlert } = useAuthContext();

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      resetAlert();
    }, 2000);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <Stack sx={{ width: "100%" }} mb={2} spacing={2}>
      <Alert severity={`${type}`}>{msg}</Alert>
    </Stack>
  );
}

export default AlertMessage;
