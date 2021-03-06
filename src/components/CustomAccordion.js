import React, { useContext } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { AppContext } from "../utils/context";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionActions from "@material-ui/core/AccordionActions";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 200,
    maxWidth: 300,
    minHeight: 200,
    position: "relative",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: "bottom",
    height: 20,
    width: 20,
  },
  details: {
    alignItems: "center",
    width: "100%",
  },
  column: {
    flexBasis: "33.33%",
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

const CustomAccordion = ({ data }) => {
  const classes = useStyles();
  const { setSelectedItems, selectedItems } = useContext(AppContext);

  //callback function to set a state with selected keys
  const handleOnCardSelect = () => {
    //check if data is already selected
    if (selectedItems.indexOf(data) < 0)
      setSelectedItems((old) => [...old, data]);
  };

  return (
    <div>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          <div className={classes.column}>
            <Typography className={classes.heading}>{data.author}</Typography>
          </div>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>
              {data.timestamp}
            </Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          {data.text}
        </AccordionDetails>
        <Divider />
        <AccordionActions>
          <Button size="small">Cancel</Button>
          <Button
            size="small"
            color="primary"
            onClick={() => {
              handleOnCardSelect();
            }}
          >
            {selectedItems.indexOf(data) > -1 ? "Selected" : "See notes"}
          </Button>
        </AccordionActions>
      </Accordion>
    </div>
  );
};

export default CustomAccordion;
