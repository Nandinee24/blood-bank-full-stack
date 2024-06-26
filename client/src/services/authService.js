import toast from 'react-hot-toast';
import { userLogin, userRegister } from '../redux/features/auth/authActions';
import store from '../redux/store';

export const handleLogin = (e, email, password, role, phone) => {
    e.preventDefault();

    try {
        if (!role || !password || !email) {
            toast.error("Please Provide all the fields")
        }


        store.dispatch(userLogin({ email, password, role }));
    } catch (error) {
        console.log(error)
    }
};
export const handleRegister = (e,
    email,
    password,
    role,
    name,
    organizationName,
    hospitalName,

    address,
    phone) => {
    e.preventDefault()
    try {
        store.dispatch(userRegister(
            {
                email,
                password,
                role,
                name,
                organizationName,
                hospitalName,

                address,
                phone
            }
        )).then((response) => {
            if (response.payload && response.payload.error) {
                alert(response.payload.error); // Display error message from the server
            } else {
                // Success case: Redirect or show success message
            }
        });
    } catch (error) {
        console.log(error);
    }
};
