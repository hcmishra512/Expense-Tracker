import "./Card.css";

function Card(props) {
  const classes = " card " + props.className; // with open "  " cote.
  return <div className={classes}>{props.children}</div>;
}

export default Card;
