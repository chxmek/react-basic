import "./FormComponent.css"

const FormComponent = ()=> {
    const inputTitle = (event) => {
        console.log(event.target.value)     // เมื่อมีการพิมพ์จะแสดงค่าผ่าน console
    }
    const inputAmount = (event) => {
        console.log(event.target.value)
    }
    const saveItem = (event) => {
        event.preventDefault()              // เมื่อกด submit จะไม่ทำให้ข้อมูล refresh
        console.log("บันทึกข้อมูลเรียบร้อย")
    }

    return (
        <div>
            <form onSubmit={saveItem}>
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