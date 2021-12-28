import "./Homepage.css";
import NavbarDesktop from "../../Components/NavbarDesktop";
import headerImage from "../../assets/header_image.svg";
import employeeManagementImage from "../../assets/Employee_management.svg";
import performanceManagenetImage from "../../assets/Perfomance_management.svg";
import paidTimeOffImage from "../../assets/Paid_time_off.svg";
import employeeDirectoryImage from "../../assets/Employee_directory.svg";
import travelLogisticsLogo from "../../assets/Travel_logistics.svg";
import travelLogisticsImage from "../../assets/Travel_Logistics_Image.svg";
import assetManagementImage from "../../assets/Asset_management.svg";
import reVouchersImage from "../../assets/RE_vouchers.svg";
import payrollLogo from "../../assets/Payroll.svg";
import payrollImage from "../../assets/Payroll_Image.svg";
import privateEstatesImage from "../../assets/Private_Estates.png";
import teneceImage from "../../assets/Tenece.png";
import unnImage from "../../assets/UNN.png";
import genesysImage from "../../assets/Genesys.png";
import footerLogo from "../../assets/logo_footer.svg";
import fb from "../../assets/fb.svg";
import instagram from "../../assets/instagram.svg";
import linkedin from "../../assets/linkedin.svg";
import twitter from "../../assets/twitter.svg";
import Card from "../../Components/Card";

const Homepage = () => {
  return (
    <>
      <NavbarDesktop />
      <div>
        <section id="header">
          <div className="container">
            <div>
              <h3>Throw paperwork into the trash where it belongs.</h3>
              <p>
                Eliminate all the hassle involved in managing people operations
                by automating it.
              </p>
            </div>
            <div>
              <img src={headerImage} alt="Header image" />
            </div>
          </div>
        </section>
        <section id="human-resources">
          <div className="container">
            <div>
              <h1>human resources</h1>
              <p>
                Onboard new employees, manage the employee lifecycle and measure
                employee performance.
              </p>
            </div>
            <div className="card-container">
              <Card
                className="card"
                logo={employeeManagementImage}
                title="Employee Management"
                content="From Hiring and Onboarding to Retiring, the Resource Edge Employee Management module eliminates all the complexities & paperwork involved in managing your team."
                alt="Employee Management"
              />
              <Card
                className="card"
                logo={performanceManagenetImage}
                title="Performance Management"
                content="Manage and track employee performance with our easy-to-use tools for goal setting, performance agreements and performance reviews."
                alt="Performance Management"
              />
              <Card
                className="card"
                logo={paidTimeOffImage}
                title="Paid time off"
                content="Employees can request for paid time off, vacations, sick leaves or educational leaves and get approvals all within Resource Edge. HR managers can equally ensure compliance."
                alt="Paid time off"
              />
            </div>
            <div>
              <img
                src={employeeDirectoryImage}
                alt="Employee directory image"
              />
            </div>
          </div>
        </section>
        <section id="admin-logistics">
          <div className="container">
            <div>
              <div>
                <h1>Admin and Logistics</h1>
                <p>
                  Manage and track company assets as well as logistics for
                  travelling employees.
                </p>
              </div>
              <div>
                <Card
                  className="card"
                  logo={travelLogisticsLogo}
                  title="Travel & Logistics"
                  content="Make travel requests, get approvals, and have access to travel information."
                  alt="Travel logistics logo"
                />
                <Card
                  logo={assetManagementImage}
                  alt="Asset management logo"
                  title="Asset Management"
                  content="Manage the acquisition, assignment, and disposition of assets seamlessly."
                  className="card"
                />
              </div>
            </div>
            <div>
              <img src={travelLogisticsImage} alt="Travel logistics" />
            </div>
          </div>
        </section>
        <section id="finance">
          <div className="container">
            <div>
              <div>
                <h1>Finance</h1>
                <p>
                  Generate invoices, track expenditure, and manage complex
                  payrolls for multiple teams and companies
                </p>
              </div>
              <div>
                <Card
                  logo={reVouchersImage}
                  alt="RE vouchers"
                  title="RE Vouchers"
                  content="Track and manage expenditure for multiple teams across your organisation using Resource Edge Vouchers."
                  className="card"
                />
                <Card
                  logo={payrollLogo}
                  alt="Payroll logo"
                  title="Payroll"
                  content="Our easy to use systems takes away the pain of managing complex payrolls for organisations of all sizes."
                  className="card"
                />
              </div>
            </div>
            <div>
              <img src={payrollImage} alt="Payroll Image" />
            </div>
          </div>
        </section>
        <section className="container" id="company-logos">
          <img src={unnImage} alt="UNN" />
          <img src={teneceImage} alt="Tenece" />
          <img src={privateEstatesImage} alt="Private Estates" />
          <img src={genesysImage} alt="Genesys" />
        </section>
        <footer>
          <div className="container">
            <div>
              <div>
                <img src={footerLogo} alt="Footer resource logo" />
              </div>
              <p>Throw paperwork into the trash.</p>
            </div>
            <div>
              <div>
                <img src={fb} alt="Facebook" />
                <img src={twitter} alt="Twitter" />
                <img src={linkedin} alt="LinkedIn" />
                <img src={instagram} alt="Instagram" />
              </div>
              <p>Copyright &copy; Genesys DevStudio. All rights reserved</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Homepage;
