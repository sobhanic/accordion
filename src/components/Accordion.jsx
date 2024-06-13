// Hooks
import { useState } from "react";

// Components
import AccordionItem from "./AccordionItem";
import data from "../data";

// Style
import "./styles.css";

function Accordion() {
  const [singleSelected, setSingleSeleted] = useState(null);
  const [enableMultiSelect, setEnableMultiSelect] = useState(false);
  const [multiSelectsIds, setMultiSelectedIds] = useState([]);

  function handleEnable() {
    setEnableMultiSelect(!enableMultiSelect);
    setSingleSeleted(null);
    setMultiSelectedIds([]);
  }

  function handleSingleSelect(id) {
    setSingleSeleted((currentId) => (currentId === id ? null : id));
  }

  function handleMultiSelect(id) {
    multiSelectsIds.includes(id)
      ? setMultiSelectedIds((currentIds) =>
          currentIds.filter((item) => item !== id)
        )
      : setMultiSelectedIds((currentIds) => [...currentIds, id]);
  }

  return (
    <div className='container'>
      <button
        className={`btn ${enableMultiSelect ? "btn--enable" : "btn--disable"}`}
        onClick={handleEnable}
      >
        {enableMultiSelect ? "disable" : "enable"} Multi Selection
      </button>
      {data?.map((dataItem) => (
        <AccordionItem
          key={dataItem.id}
          dataItem={dataItem}
          singleSelected={singleSelected}
          onSingleSelect={handleSingleSelect}
          onMultiSelect={handleMultiSelect}
          enableMultiSelect={enableMultiSelect}
          multiSelectsIds={multiSelectsIds}
        />
      ))}
    </div>
  );
}

export default Accordion;
