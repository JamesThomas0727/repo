import { Routes, Route, Navigate } from 'react-router-dom';
import appInfo from './app-info';
import routes from './app-routes';
import ShopPage from './pages/shop/shop';
import FAQsPage from './pages/faqs/faqs';
// import Apparel from './pages/apparel/ApparelPage';
// import { SideNavOuterToolbar as SideNavBarLayout } from './layouts';
// import { Footer } from './components';
export default function Content() {
  return (
    // <ShopPage></ShopPage>
    <div>
      <FAQsPage></FAQsPage>
      <ShopPage></ShopPage>
    </div>
    // <SideNavBarLayout title={appInfo.title}>
    // <Routes>
    //   {routes.map(({ path, element }) => (
    //     <Route
    //       key={path}
    //       path={path}
    //       element={element}
    //     />
    //   ))}
    //   <Route
    //     path='*'
    //     element={<Navigate to='/shop' />}
    //   />
    // </Routes>
    // <Footer>
    //   Copyright © 2001-{new Date().getFullYear()} {appInfo.title}
    //   <br />
    //   I am looking forward to hearing from you.
    //   &nbsp;
    //   &nbsp;
    //   &nbsp;
    //   <a href='mailto:jamesthomasdev2001@gmail.com'>
    //     jamesthomasdev2001@gmail.com</a>
    //   <div>
    //     <MessageBox
    //       sx={{ width: "20%" }}
    //     ></MessageBox>
    //   </div>
    // </Footer>
    // </SideNavBarLayout>
  );
}

