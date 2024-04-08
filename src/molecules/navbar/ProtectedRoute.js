/**
 * This Component can be used to add Protection to the route 
 * usage -> 
 * 
 *  <ProtectedRoute condition={logic}><ComponentX /></ProtectedRoute>
 */
import { Navigate } from "react-router-dom";

const Protected = ({ condition, children }) => {
  if (!condition) {
    return <Navigate to="/" replace />;
  }
  return children;
};
export default Protected;
