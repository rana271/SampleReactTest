import { MouseEvent, useState } from "react";
interface Props {
  heading: string;
  items: string[];
  onSelectItem: (item: string) => void;
}
function ListGroup({ heading, items, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //let items = ["Kolkata", "Delhi", "Mumbai", "Bangalore", "Chennai"];
  const handleClick = (event: MouseEvent) => console.log(event);
  //items = [];
  return (
    <>
      <h1>Dynamic List</h1>
      {items.length === 0 && <p>No Items is found in the list</p>}
      <ul className="list-group">
        {items.map((x, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={index}
            onClick={() => onSelectItem(x)}
          >
            {x}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
