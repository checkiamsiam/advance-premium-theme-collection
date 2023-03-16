// import axios from "axios";

const logout = () => {
    localStorage.removeItem("token");
    localStorage.clear();
    window.location.reload();
}

const authService = {
  logout
};

export default authService;