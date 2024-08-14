const FormComponent = ()=> {
    return (
        <dive>
            <form>
                <div className="form-control">
                    <label>ชื่อรายการ</label>
                    <input type="text" placeholder="ระบุชื่อรานการของคุณ"></input>
                </div>
                <div className="form-control">
                    <label>จำนวนเงิน</label>
                    <input type="num" placeholder="ระบุจำนวนเงิน"></input>
                </div>
                <div>
                    <button type="submit">เพิ่มข้อมูล</button>
                </div>
            </form>
        </dive>
    )
}

export default FormComponent