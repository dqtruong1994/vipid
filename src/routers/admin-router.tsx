import { Navigate } from 'react-router-dom';
import { Splash } from '../components';
import { useAuth } from '../context';
import { ETypeUser } from '../generated/graphql';

interface Props {
    children: JSX.Element;
}

const AdminRouter = ({ children }: Props) => {
    const { loading, isAuth, user } = useAuth();

    if (loading) {
        return <Splash />;
    }

    if (!isAuth) {
        return <Navigate to="/login?redirect=admin" replace />;
    }

    if (user?.type !== ETypeUser.Admin) {
        return <Navigate to="/profile" />;
    }

    return children;
};

export { AdminRouter };
