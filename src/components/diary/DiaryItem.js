import React from "react";
import { RiDeleteBin2Fill } from "react-icons/ri"

export default function DiaryItem({ item, showModal, deleteItem }) {
  return (

      
      <div className ="diaryRow">
        <span onClick={()   =>showModal(item) }>{item.title}</span>
        <div>
        <span className ="date"> { item.date } </span>
        <RiDeleteBin2Fill onClick={() => deleteItem(item.id)} className = "deleteBotton"/>

        </div>
        
      </div>
   
  );
}
