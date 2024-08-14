import "./FormComponent.css"

const FormComponent = ()=> {
    return (
        <dive>
            <form>
                <div className="form-control">
                    <label>ชื่อรายการ</label>
                    <input type="text" placeholder="ระบุชื่อรายการของคุณ"></input>
                </div>
                <div className="form-control">
                    <label>จำนวนเงิน</label>
                    <input type="number" placeholder="(+ รายรับ, - รายจ่าย)"></input>
                </div>
                <div>
                    <button className="btn" type="submit">เพิ่มข้อมูล</button>
                </div>
            </form>
        </dive>
    )
}

export default FormComponent