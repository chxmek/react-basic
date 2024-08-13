function HelloComponent() {
    return <h1>หวัดดี External Component จ้า</h1>
}

export default HelloComponent

// const HelloComponent = ()=> {
//     return <h1>หวัดดี External Component จ้า</h1>
// }

// export default HelloComponent


/* 
* ทั้งสองแบบทำงานเหมือนกันในบริบทของการสร้าง React component 
* และการทำงานในโค้ด แต่มีความแตกต่างในเรื่องการยกขึ้น (hoisting) 
* และการประกาศฟังก์ชัน ซึ่งอาจส่งผลในบางสถานการณ์ที่ต้องพิจารณาเรื่องลำดับการเรียกใช้โค้ด. 
*/