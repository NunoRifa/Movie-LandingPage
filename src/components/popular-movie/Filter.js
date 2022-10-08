import "./Filter.css";

const Filter = (props) => {
  const getValueFilter = (e) => {
    props.onGetValue(e.target.value);
  };

  return (
    <div className="filter">
      <select value={props.selected} onChange={getValueFilter}>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2023">2023</option>
      </select>
    </div>
  );
};

export default Filter;
