import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { green } from '@material-ui/core/colors';

import firebase from "../../firebase";
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));



const Header = (props) => {

  console.log(props);
  const classes = useStyles();

  return (
    <header className={s.header}>
      <img
        className={s.header__icon}
        src={props.photoOwner || "https://e7.pngegg.com/pngimages/593/357/png-clipart-computer-icons-human-resources-human-capital-human-resource-miscellaneous-company.png"}
        alt="icon"
      />
      <div>
        {!props.isAnonymous ? (
          <Button
            onClick={props.logout}
            size="small"
            variant="contained"
            style={{ color: green[500] }}
            className={classes.margin}
          >
            Logout
          </Button>
        ) : null}
      </div>
    </header>
  );
};
export default Header;
