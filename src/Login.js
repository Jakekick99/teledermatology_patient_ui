const Login = () => {
    const name = "hi";
    return ( 
        <div className="grid grid-cols-2">
            <div className="hidden md:block md:col-span-1 text-green-500">
                {
                    //<!--One column of side image for login-->
                    name                    
                }
            </div>
            <div className="col-span-2 md:col-span-1 text-blue-500">
                {
                    //<!--One column for the login part-->
                    name
                }
            </div>
        </div>
    );
}
 
export default Login;