import { Routes, Route, Navigate } from 'react-router-dom';
import appInfo from './app-info';
import routes from './app-routes';
import { SideNavOuterToolbar as SideNavBarLayout } from './layouts';
import { Footer } from './components';

export default function Content() {
  return (
    <SideNavBarLayout title={appInfo.title}>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={element}
          />
        ))}
        <Route
          path='*'
          element={<Navigate to='/home' />}
        />
      </Routes>
      <Footer>
        Copyright © 2001-{new Date().getFullYear()} {appInfo.title}
        <br />
        I am looking forward to hearing from you.
        &nbsp;
        &nbsp;
        &nbsp;
        <a href='mailto:bonapartedev2001@gmail.com'>
          bonapartedev2001@gmail.com</a>
      </Footer>
    </SideNavBarLayout>
  );
}

