function Game({ paragraphs, userInput, visibility, start, inaccuracteCount }) {
  // const splitParagraph = paragraphs.split('')
  return (
    < div className="Start-game" className={visibility ? 'hidden' : null} >
      <h1>Start Typing</h1>
      <section className='game-container'>
        <div className='paragraphs'>
          {paragraphs.map((string, i) => {
            let color = ''
            if (i < userInput.length) {
              string === userInput[i] ? color = 'rgb(176 221 176)' : color = 'rgb(255 212 212)'
            }
            return <span style={{ backgroundColor: color }} key={i + string}>{string}</span>
          })}
        </div>
        <textarea className='text-input' onChange={start}></textarea>
      </section>
    </div >
  )
}

export default Game