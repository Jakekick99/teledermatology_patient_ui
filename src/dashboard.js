import SideBar from "./sidebar";


const DashBoard = () => {
    return ( 
        <div className="grid grid-cols-6">
            <SideBar></SideBar>
            <div className="col-span-5">

            </div>
        </div>
     );
}
 
export default DashBoard;