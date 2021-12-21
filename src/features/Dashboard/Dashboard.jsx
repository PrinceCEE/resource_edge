import styles from "./Dashboard.module.css";
import NavbarDesktop from "../../Components/NavbarDesktop";

const Dashboard = () => {
  return (
    <div>
      <header>
        <NavbarDesktop />
      </header>
      <main>
        <h1>Hello, Ositadinma Nwangwu</h1>
        <h4>Welcome and good to have you back</h4>
        <div>
          <h3>Things to do</h3>
          <ul>
            <li>
              <span></span>
              <p>Upload your employee performance agreement</p>
              <span>Begin</span>
            </li>
            <li>
              <span></span>
              <p>Start quarterly self review</p>
              <span>Resume</span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
