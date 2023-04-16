const Login = () => {
    const name = "hi";
    return ( 
        <div class="grid grid-cols-2">
            <div class="hidden md:block md:col-span-1 text-green-500">
                {
                    //<!--One column of side image for login-->
                    name                    
                }
            </div>
            <div class="col-span-2 md:col-span-1 text-blue-500">
                {
                    //<!--One column for the login part-->
                    name
                }
            </div>
        </div>
    );
}
 
export default Login;