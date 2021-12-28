import NavbarDesktop from "../../Components/NavbarDesktop";
import Button from "../../Components/Button";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <NavbarDesktop isDashboard />
      <main className="container">
        <div>
          <h1>Hello, Ositadinma Nwangwu</h1>
          <h4>Welcome and good to have you back</h4>
        </div>
        <div>
          <h3>Things to do</h3>
          <ul>
            <li>
              <div>
                <span></span>
                <p>Upload your employee performance agreement</p>
              </div>
              <Button className="begin">Begin</Button>
            </li>
            <li>
              <div>
                <span></span>
                <p>Start quarterly self review</p>
              </div>
              <Button className="resume">Resume</Button>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
