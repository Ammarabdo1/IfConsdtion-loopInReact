import {React} from 'react';

const Login = (props)=> {
    const Loggin = props.isLogin;
    
    if(Loggin){
        return (
            <div>
                welcome ammar
            </div>
        )
    }
    else{
        return (
            <div>
                welcome Guest
            </div>
        )
    }
}

export default Login