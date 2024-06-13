import { IconContext } from "react-icons";
import { FaAngleDown } from "react-icons/fa";

function AccordionItem({
  dataItem,
  onSingleSelect,
  onMultiSelect,
  singleSelected,
  enableMultiSelect,
  multiSelectsIds,
}) {
  return (
    <div className='item'>
      <div className='item__title'>
        <IconContext.Provider
          value={{
            className: `item__icon ${
              singleSelected === dataItem.id ||
              multiSelectsIds.includes(dataItem.id)
                ? "item__icon--up"
                : "item__icon--down"
            }`,
          }}
        >
          <FaAngleDown
            onClick={() =>
              enableMultiSelect
                ? onMultiSelect(dataItem.id)
                : onSingleSelect(dataItem.id)
            }
          />
        </IconContext.Provider>
        <h3 className='item__title'>{dataItem.question}</h3>
      </div>
      {(singleSelected === dataItem.id ||
        multiSelectsIds.includes(dataItem.id)) && (
        <p className='item__content'>{dataItem.answer}</p>
      )}
    </div>
  );
}

export default AccordionItem;
