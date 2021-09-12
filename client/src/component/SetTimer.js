function SetTimer({ getParagraphs, visibility }) {
  return (
    <div className='SetTimerBtn' className={visibility ? 'hidden' : null}>
      <button onClick={() => getParagraphs(15)}>1 Minute</button>
      <button onClick={() => getParagraphs(30)}>3 Minutes</button>
      <button onClick={() => getParagraphs(50)}>5 Minutes</button>
    </div>
  )
}

export default SetTimer