/* eslint-disable no-alert */
import { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";

import { Box, Button, CardActions, CardContent } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import useStyles from "./Login.styles";
import api from "../../api";
import { loginSuccess } from "../../store/user/user.action";

const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [err, setErr] = useState(false);

  const styles = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogin = () => {
    api
      .login(Email, Password)
      .then((response) => {
        const { username, role, name, surname, id } = response.user;
        dispatch(loginSuccess(username, role, name, surname, response.token, id));
        history.push("/");
      })
      .catch(() => {
        setErr(true);
      });
  };

  const handleReset = () => {
    const key = window.prompt("Please enter a password to reset DB?");
    api.resetDB(key).then((result) => {
      window.alert(result.message);
    });
  };

  return (
    <Grid className={styles.container} container>
      <Grid item>
        <Card className={styles.card}>
          <form>
            <CardContent className={styles.cardContent}>
              <Box mb="10px">
                <TextField
                  fullWidth
                  required
                  type="email"
                  label="Email"
                  variant="outlined"
                  value={Email}
                  onChange={(event) => setEmail(event.target.value)}
                  error={err}
                />
              </Box>
              <TextField
                fullWidth
                required
                type="password"
                label="Password"
                variant="outlined"
                value={Password}
                onChange={(event) => setPassword(event.target.value)}
                error={err}
                helperText={err ? "Username or Password is wrong." : ""}
              />
            </CardContent>
            <CardActions>
              <Button variant="contained" fullWidth type="reset" onClick={() => handleLogin()}>
                Login
              </Button>
            </CardActions>
          </form>
        </Card>
      </Grid>
      <Button
        variant="contained"
        color="primary"
        className={styles.resetDB}
        onClick={() => handleReset()}>
        RESET THE DATABASE
      </Button>
    </Grid>
  );
};

export default Login;
