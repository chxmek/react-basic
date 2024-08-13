import './Item.css'

const Item = ()=> {
  const name = "พักโรงแรม"   // เพิ่มตัวแปร
  const amount = 5000
  return (
    <li className="item">
      {name} <span>-{amount}</span>
    </li>
  );
}

export default Item