interface CardPropsI{
    quote:string,
    onSave:(quote:string)=>void,
}
const Card = ({quote}:CardPropsI) => {
  return (
    <div className="quote-card">{quote}</div>
  )
}

export default Card