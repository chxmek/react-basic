import PropTypes from "prop-types";

const Item = (props) => {           // รับค่า props(property)
  const { title, amount } = props;  // เก็บค่าที่รับมาในตัวแปร title, amount
  return (
    <li>
      {title} <span>{amount}</span> {/* แสดงค่า property */}
    </li>
  );
};

Item.propTypes = {                        // ให้ตรวจสอบชนิดข้อมูลว่าใช้ถูกต้องหรือไม่
  title: PropTypes.string.isRequired,     // ใช้ isRequired เพื่อบังคับให้ป้อนข้อมูล
  amount: PropTypes.number.isRequired,
};

export default Item;
