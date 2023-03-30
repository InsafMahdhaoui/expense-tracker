import { ListItem } from "../ListItem/ListItem";
import s from "./style.module.css";

export function List({ items }) {
  return (
    <div style={{ overflowY: "scroll", height: "40%" }}>
      <table className="table table-hover table-borderless">
        <tbody>
          {items.map((item, i) => {
            return <ListItem key={item.name + i} item={item} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
