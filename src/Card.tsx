interface CardPropsI{
    quote:string,
    onSave:(quote:string)=>void,
}
const Card = ({quote,onSave}:CardPropsI) => {
  return (
    <div className="quote-card" onClick={()=>{
        onSave(quote)
    }}>{quote}</div>
  )
}

export default Card