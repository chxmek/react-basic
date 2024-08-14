const Item = (props)=> {          // รับค่า props(property)
  const {title, amount} = props   // เก็บค่าที่รับมาในตัวแปร title, amount
  return (
    <li>
      {title} <span>{amount}</span>     {/* แสดงค่า property */}
    </li>
  );
}

export default Item