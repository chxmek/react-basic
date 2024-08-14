const Item = (props)=> {        // *รับค่า props(property)
  // const name = "พักโรงแรม"   // เพิ่มตัวแปร
  // const amount = 5000
  return (
    <li>
      {/* {name} <span>-{amount}</span> */}
      {props.title} <span>{props.amount}</span>     {/* แสดงค่า property */}
    </li>
  );
}

export default Item