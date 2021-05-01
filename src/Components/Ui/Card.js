import "./card.css";
function Card(prop) {
  const classesappend = "card " + prop.className;
  return <div className={classesappend}>{prop.children}</div>;
}
export default Card;
