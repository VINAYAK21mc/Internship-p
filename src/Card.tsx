interface CardPropsI{
    quote:string,
}
const Card = ({quote}:CardPropsI) => {
  return (
    <div className="quote-card">{quote}</div>
  )
}

export default Card