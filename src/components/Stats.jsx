// eslint-disable-next-line react/prop-types
export default function Stats({
                                    numberOfWrods,
                                    numberOfCharacter,
                                    numberOfInstagramCharacters,
                                    numberOfFacebookCharacters
                              }) {
      return (
          <section className="stats">
                <Stat number={numberOfWrods} label="Words"/>
                <Stat number={numberOfCharacter} label="Characters"/>
                <Stat number={numberOfInstagramCharacters} label="Instagram"/>
                <Stat number={numberOfFacebookCharacters} label="Facebook"/>
          </section>

      )
}

// eslint-disable-next-line react/prop-types
function Stat({number, label}) {
      return (
          <section className="stat">
                <span className={`stat__number ${number < 0 ? "stat__number--limit " : ""}`}>{number}</span>
                <h2 className='second-heading'>{label}</h2>
          </section>

      )
}
