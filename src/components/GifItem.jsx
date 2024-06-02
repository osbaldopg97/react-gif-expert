
export const GifItem = ({title, url, id}) => {
    //console.log(image);
    
  return (
    <div className="card">
        <img src={url} alt={title} />
        <p>{title}</p>
    </div>
  )
}

