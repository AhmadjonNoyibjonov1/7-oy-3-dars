import React, { useState } from "react";
import "./App.css"

function App() {
  const [formFields, setFormFields] = useState([
    { name: "", phone: "", remarks: "" }
  ]);

  const handleChange = (index, event) => {
    const newFormFields = [...formFields];
    newFormFields[index][event.target.name] = event.target.value;
    setFormFields(newFormFields);
  };

  const handleAddField = () => {
    setFormFields([...formFields, { name: "", phone: "", remarks: "" }]);
  };

  const handleRemoveField = (index) => {
    const newFormFields = formFields.filter((_, i) => i !== index);
    setFormFields(newFormFields);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("formData", JSON.stringify(formFields));
    alert("Data saved to localStorage");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {formFields.map((field, index) => (
        <div key={index} className="inputWrap">
          <input
            name="name"
            placeholder="Name"
            value={field.name}
            onChange={(event) => handleChange(index, event)}
          
          />
          <input
            name="phone"
            placeholder="Phone"
            value={field.phone}
            onChange={(event) => handleChange(index, event)}
          
          />
          <input
            name="remarks"
            placeholder="Remarks"
            value={field.remarks}
            onChange={(event) => handleChange(index, event)}
          
          />
          <button type="button" onClick={() => handleRemoveField(index)}>
            Remove
          </button>
        </div>
      ))}
      <div className="btns">
        <button type="submit">Submit</button>
        
        <button type="button" onClick={handleAddField}>
          Add More
        </button>
      </div>
    </form>
  );
}

export default App;