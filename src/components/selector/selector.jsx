import "./selector.css";

const Selector = () => {
  //   const [selectedValue, setSelectedValue] = useState("value1");

  return (
    <>
      <select name="select" className="text" id="quantityButton">
        <option value="value1"> 1</option>
        <option value="value2"> 2</option>
        <option value="value3"> 3</option>
      </select>
    </>
  );
};

export default Selector;