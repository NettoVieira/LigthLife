import { AppRoutes } from './app.routes';
import { LoginRoutes } from './login.routes';

export function Routes() {
  const authUser = false;

  if(authUser) {
    return (
    <AppRoutes />
    )
  } else {
    return (
    <LoginRoutes />
    );
  }
}