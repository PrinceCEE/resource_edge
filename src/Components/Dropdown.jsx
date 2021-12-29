import checkDashboard from "../assets/check_dashboard.svg";

const Dropdown = ({ data, showDropdown, setUseAs }) => {
  return (
    <div className={showDropdown ? "dropdown" : "close-dropdown"}>
      <div>
        <div>
          <p>ositadinma nwangwu</p>
          <p>profile</p>
        </div>
        <div>
          <h4>Use Resource Edge as</h4>
          <div className="drop-ls">
            <div>
              <img alt={data[0].name} src={data[0].src} />
              <p>{data[0].name}</p>
            </div>
            <img alt="check" src={checkDashboard} />
          </div>
          <div
            className="drop-ls"
            onClick={() => {
              const _data = [...data].reverse();
              setUseAs(_data);
            }}
          >
            <div>
              <img alt={data[1].name} src={data[1].src} />
              <p>{data[1].name}</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p>logout</p>
      </div>
    </div>
  );
};

export default Dropdown;
