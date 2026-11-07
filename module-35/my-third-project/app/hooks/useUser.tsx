import { use } from 'react';
import { UserContext } from '../context/userContext';

const useUser = () => {
    const user = use(UserContext);
    return user;
};

export default useUser;