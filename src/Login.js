const Login = () => {
    const name = "hi";
    return ( 
        <div class="grid">
            <div class="hidden md:col-span-1">
                {
                    //<!--One column of side image for login-->
                    name                    
                }
            </div>
            <div class="col-span-2 md:col-span-1">
                {
                    //<!--One column for the login part-->
                    name
                }
            </div>
        </div>
    );
}
 
export default Login;