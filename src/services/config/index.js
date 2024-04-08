/*
 * DEFAULT Request Headers can be configured
 */
import axios from "axios";
// Header Config
axios.defaults.headers["X-Frame-Options"] = "DENY";
axios.defaults.headers["Content-Security-Policy"] = "frame-ancestors";
export default axios;
