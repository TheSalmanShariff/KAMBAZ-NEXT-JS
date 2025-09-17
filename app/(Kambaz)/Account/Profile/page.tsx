import Link from "next/link";

export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      
      <label htmlFor="wd-username">Username:</label><br />
      <input 
        id="wd-username"
        defaultValue="salman" 
        placeholder="username" 
        className="wd-username"
      /><br />
      
      <label htmlFor="wd-password">Password:</label><br />
      <input 
        id="wd-password"
        defaultValue="123" 
        placeholder="password" 
        type="password" 
        className="wd-password" 
      /><br />
      
      <label htmlFor="wd-firstname">First Name:</label><br />
      <input 
        id="wd-firstname"
        defaultValue="Salman" 
        placeholder="First Name"
      /><br />
      
      <label htmlFor="wd-lastname">Last Name:</label><br />
      <input 
        id="wd-lastname"
        defaultValue="Shariff" 
        placeholder="Last Name"
      /><br />
      
      <label htmlFor="wd-dob">Date of Birth:</label><br />
      <input 
        id="wd-dob"
        defaultValue="2001-08-03" 
        type="date"
      /><br />
      
      <label htmlFor="wd-email">Email:</label><br />
      <input 
        id="wd-email"
        defaultValue="salman@gmail.com" 
        type="email"
      /><br />
      
      <label htmlFor="wd-role">Role:</label><br />
      <select id="wd-role" defaultValue="FACULTY">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select><br /><br />
      
      <Link href="Signin"> Sign out </Link>
    </div>
  );
}