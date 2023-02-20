// import React, { Suspense } from "react";
// import { Navigate, useRoutes } from "react-router-dom";
// import {
//   DefaultLayout,
//   VerticalLayout,
//   HorizontalLayout,
//   DetachedLayout,
//   FullLayout,
// } from "layouts";
// // import Root from './Root';
// import { LayoutTypes } from "appConstants";
// import { useRedux } from "hooks";
// import { APP_PRIVILEGES, UserType } from "redux/types/DataTypes";
// import PermissionService from "services/PermissionService";
// import PrivateRoute from "./PrivateRoute";
// import ErrorPageNotFound from "pages/error/PageNotFound";
// import ErrorPageNotFoundAlt from "pages/error/PageNotFoundAlt";

// // lazy load all the views

// // auth
// const test = React.lazy(() => import("pages/Test"));

// const loading = () => <div className=""></div>;

// type LoadComponentProps = {
//   component: React.LazyExoticComponent<(props: any) => JSX.Element>;
//   userType?: UserType | UserType[] | "*";
//   session?: any;
//   requiredPrivileges?: string[];
// };

// const LoadComponent = ({
//   component: Component,
//   userType,
//   requiredPrivileges,
// }: LoadComponentProps) => {
//   const { appSelector } = useRedux();
//   const { session } = appSelector((state) => ({
//     session: state.Auth.session,
//   }));
//   const permissionService = new PermissionService(session);
//   const allowed =
//     permissionService.validateUserType(userType) &&
//     (requiredPrivileges ? permissionService.can(requiredPrivileges) : true);
//   return allowed ? (
//     <Suspense fallback={loading()}>
//       <Component />
//     </Suspense>
//   ) : (
//     <ErrorPageNotFoundAlt />
//   );
// };

// const AllRoutes = () => {
//   const { appSelector } = useRedux();

//   const { layout, session } = appSelector((state) => ({
//     layout: state.Layout,
//     session: state.Auth.session,
//   }));

//   const getLayout = () => {
//     let layoutCls: React.ComponentType = VerticalLayout;

//     switch (layout.layoutType) {
//       case LayoutTypes.LAYOUT_HORIZONTAL:
//         layoutCls = HorizontalLayout;
//         break;
//       case LayoutTypes.LAYOUT_DETACHED:
//         layoutCls = DetachedLayout;
//         break;
//       case LayoutTypes.LAYOUT_FULL:
//         layoutCls = FullLayout;
//         break;
//       default:
//         layoutCls = VerticalLayout;
//         break;
//     }
//     return layoutCls;
//   };
//   let Layout = getLayout();
//   return useRoutes([
//     {
//       // public routes
//       path: "/",
//       element: session?.sessionId ? (
//         <Navigate to={"/auth"} />
//       ) : (
//         <DefaultLayout />
//       ),
//       children: [
//         { path: "*", element: <ErrorPageNotFound /> },
//         { path: "/", element: <Navigate to={"/login"} /> },
//         {
//           path: "/login",
//           element: (
//             <LoadComponent component={Login} userType={"*"} session={session} />
//           ),
//         },
//         {
//           path: "/lock-screen",
//           element: <LoadComponent component={LockScreen} />,
//         },
//         {
//           path: "/account/logout",
//           element: <LoadComponent component={Logout} />,
//         },
//         {
//           path: "/vendorSignup",
//           element: <LoadComponent component={VendorSignup} />,
//         },
//       ],
//     },
//     {
//       // private routes
//       path: "/auth",
//       element: session?.sessionId ? (
//         <PrivateRoute roles={"Admin"} component={Layout} />
//       ) : (
//         <Navigate to={"/"} />
//       ),
//       children: [{ path: "*", element: <ErrorPageNotFoundAlt /> }],
//     },
//   ]);
// };

// export { AllRoutes };
