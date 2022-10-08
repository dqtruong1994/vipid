import { Navigate } from 'react-router-dom';
import { Splash } from '../../../components';
import { useAuth } from '../../../context';

const Home = () => {
    const { loading, isAuth } = useAuth();

    if (loading) {
        return <Splash />;
    }

    if (!isAuth) {
        return <Navigate to="/login" />;
    }

    return <Navigate to="/profile" />;
};

export default Home;
