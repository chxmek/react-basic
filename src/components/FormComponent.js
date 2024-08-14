import { useState } from "react"                // ** state คล้ายกับ props แต่ props นั้นข้อมูลจะไม่สามารถเปลี่ยนแปลงค่าได้ แต่ state เปลี่ยนแปลงค่าได้
import "./FormComponent.css"
import { v7 as uuidv7 } from 'uuid';


const FormComponent = (props)=> {               // กำหนด parameter เพื่อรับ function onAddItem

    const [title, setTitle] = useState('')      // * [ชื่อState, functionที่ใช้เปลี่ยนแปลงข้อมูลใน state] = useState(ค่าเริ่มต้นของ state)
    const [amount, setAmount] = useState(0)

    const inputTitle = (event) => {
        // console.log(event.target.value)      // เมื่อมีการพิมพ์จะแสดงค่าผ่าน console
        setTitle(event.target.value)            // * เก็บค่าลงใน state title
    }
    const inputAmount = (event) => {
        setAmount(event.target.value)
    }
    const saveItem = (event) => {
        event.preventDefault()                  // เมื่อกด submit จะไม่ทำให้ข้อมูล refresh
        const itemData = {                      // * สร้าง object เพื่อเก็บข้อมูลจาก form >> stateTitle, stateAmount
            id: uuidv7(),
            title: title,
            amount: Number(amount)               // เปลี่ยนค่าเริ่มต้นจาก string เป็น number
        }
        props.onAddItem(itemData)               // ส่งข้อมูลจาก ลูก ไปหา แม่ (ส่ง object itemData ไปยัง App Component)
        setTitle('')                            // * clear ค่าใน state
        setAmount(0)
    }

    return (
        <div>
            <form onSubmit={saveItem}>              {/* ทำงานเมื่อกดปุ่ม submit */}
                <div className="form-control">
                    <label>ชื่อรายการ</label>
                    <input type="text" placeholder="ระบุชื่อรายการของคุณ" onChange={inputTitle} value={title}></input>
                </div>
                <div className="form-control">
                    <label>จำนวนเงิน</label>
                    <input type="number" placeholder="(+ รายรับ, - รายจ่าย)" onChange={inputAmount} value={amount}></input>
                </div>
                <div>
                    <button className="btn" type="submit">เพิ่มข้อมูล</button>
                </div>
            </form>
        </div>
    )
}

export default FormComponent