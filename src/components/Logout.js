 
 const Logout = () => {
  
  window.localStorage.removeItem('id');
  window.location.href('/Admin')
}
export default Logout;