import React from "react";

function SelectStoreForm() {
  return (
    <div className="select-store-form">
      <form>
        <h3>Select a Store</h3>
        <input type="text" required placeholder="Store Name" />
        <button>Select</button>
      </form>
    </div>
  );
}

export default SelectStoreForm;
