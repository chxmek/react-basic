import Item from "./Item";
import "./Transaction.css";
import { v7 as uuidv7 } from 'uuid';

const Transaction = () => {
  const data = [
    {title: "ค่ารักษาพยาบาล", amount: 2000 },
    {title: "ค่าน้ำมัน", amount: 5000 },
    {title: "ค่าเช่าบ้าน", amount: 8000 },
    {title: "เงินเดือน", amount: 70000 },
    {title: "จ่ายค่าประกัน", amount: 300 },
    {title: "ค่าเดินทาง", amount: 800 },
  ];
  return (
    // <ul className="item-list">
    //   <Item title={data[0].title} amount={data[0].amount} />  {/* กำหนดค่า props(property) ที่ส่งไปยัง Item */}
    //   <Item title={data[1].title} amount={data[1].amount} />
    //   <Item title={data[2].title} amount={data[2].amount} />
    //   <Item title={data[3].title} amount={data[3].amount} />
    // </ul>

    <ul className="item-list">
      {data.map((element) => {
        // return <Item title={element.title} amount={element.amount} key = {uuidv7() />;   // loop ค่าแบบ array.map
        return <Item {...element} key = {uuidv7()} />;                     // loop ค่าแบบ array.map, spread operator (...element) and key เพื่อให้ app รู้ว่าเป็น Item ตัวไหน
      })}
    </ul>
  );
};

export default Transaction;
