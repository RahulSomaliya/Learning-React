import { Outlet, useNavigation } from 'react-router-dom';
import CartOverview from '../features/cart/CartOverview';
import Header from './Header';
import Loader from './Loader';

function AppLayout() {
  // this is react-router hook that provides states like loading / idle / submitting / and more
  // note: this hook will say loading for any of the routes that are mentioned in the createBrowserRouter's array
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <div className='layout'>
      {isLoading && <Loader />}

      <Header />

      <main>
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
