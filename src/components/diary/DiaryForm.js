import React, {useState} from 'react'

export default function DiaryForm({ addItem }) {
   
    const [text, setText] = useState("")
    
    const [title, setTitle] = useState("")
    const [date, setDate] = useState("")

    //input values for diary

    const onSubmit = (event) =>
    {
        event.preventDefault()
        let itemObject = {
            title: title,
            date: date,
            text: text
        }

      addItem(itemObject)

    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="mainDiary">
                    <input onChange ={(event) => setTitle(event.target.value)} placeholder = "Entry Title" className = "diaryInput" />
                    <input onChange ={(event) => setDate(event.target.value)} type = "date" className ="dateInput"/>

                </div>
                <textarea onChange ={(event) => setText(event.target.value)} rows="2" className="diaryText"/>
                <button type = "submit" className ="diaryAddButton">Add Entry</button>

            </form>

        </div>
    )
}