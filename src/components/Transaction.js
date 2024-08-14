import Item from "./Item";
import "./Transaction.css";


const Transaction = (props) => {
  const {items} = props
  return (

    <ul className="item-list">
      {items.map((element) => {
        // return <Item title={element.title} amount={element.amount} key = {uuidv7() />;   // loop ค่าแบบ array.map
        return <Item {...element} key = {element.id} />;                     // loop ค่าแบบ array.map, spread operator (...element) and key เพื่อให้ app รู้ว่าเป็น Item ตัวไหน
      })}
    </ul>
  );
};

export default Transaction;
