const Item = ()=> {
  const name = "พักโรงแรม"   // เพิ่มตัวแปร
  const amount = 5000
  return (
    <li>
      {name} <span>-{amount}</span>
    </li>
  );
}

export default Item