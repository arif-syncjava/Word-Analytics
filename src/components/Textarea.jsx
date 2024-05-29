import {useState} from "react";
import Warning from "./Warning.jsx";

// eslint-disable-next-line react/prop-types
export default function Textarea({text, setText}) {

    const [warningText, setWarningText] = useState("");


    const handleOnclick = (event) => {
        let newText = event.target.value
        if (newText.includes("<script>")) {
            setWarningText("script tag not allowed")
            newText = newText.replace("<script>", "")
        } else if (newText.includes("@")) {
            setWarningText("@ tag not allowed")
            newText = newText.replace("@", "")
        } else {
            setWarningText("")
        }
        setText(newText)
    }

    return (
        <div className="textarea">
             <textarea
                 value={text}
                 onChange={handleOnclick}
                 placeholder="Enter your text"
                 spellCheck="false"
             />
            {
                warningText ? <Warning warningText={warningText}/> : null
            }


        </div>
    )
}
