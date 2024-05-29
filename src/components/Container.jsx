import Textarea from "./Textarea.jsx";
import Stats from "./Stats.jsx";
import {useState} from "react";

export default function Container() {
      const [text, setText] = useState("");
      const numberOfWords = text.split(/\s/).filter(word => word !== "").length
      const numberOfCharacter = text.length
      const numberOfInstagramCharacters = 280 - text.length
      const numberOfFacebookCharacters = 2200 - text.length

      return (
          <main className="container">
                <Textarea text={text} setText={setText}/>
                <Stats
                    numberOfWrods={numberOfWords}
                    numberOfCharacter={numberOfCharacter}
                    numberOfInstagramCharacters={numberOfInstagramCharacters}
                    numberOfFacebookCharacters={numberOfFacebookCharacters}
                />
          </main>

      )


}
