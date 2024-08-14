import { useState } from "react"
import "./FormComponent.css"

const FormComponent = ()=> {

    const [title, setTitle] = useState('')      // [ชื่อState, functionที่ใช้เปลี่ยนแปลงข้อมูลใน state] = useState(ค่าเริ่มต้นของ state)
    const [amount, setAmount] = useState(0)

    const inputTitle = (event) => {
        // console.log(event.target.value)      // เมื่อมีการพิมพ์จะแสดงค่าผ่าน console
        setTitle(event.target.value)            // เก็บค่าลงใน state title
    }
    const inputAmount = (event) => {
        setAmount(event.target.value)
    }
    const saveItem = (event) => {
        event.preventDefault()                  // เมื่อกด submit จะไม่ทำให้ข้อมูล refresh
        console.log("บันทึกข้อมูลเรียบร้อย")
    }

    return (
        <div>
            <form onSubmit={saveItem}>              {/* ทำงานเมื่อกดปุ่ม submit */}
                <div className="form-control">
                    <label>ชื่อรายการ</label>
                    <input type="text" placeholder="ระบุชื่อรายการของคุณ" onChange={inputTitle}></input>
                </div>
                <div className="form-control">
                    <label>จำนวนเงิน</label>
                    <input type="number" placeholder="(+ รายรับ, - รายจ่าย)" onChange={inputAmount}></input>
                </div>
                <div>
                    <button className="btn" type="submit">เพิ่มข้อมูล</button>
                </div>
            </form>
        </div>
    )
}

export default FormComponent