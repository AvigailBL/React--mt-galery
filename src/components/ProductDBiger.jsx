import { useParams } from "react-router-dom";

function ProductDBiger(){

const {name,img,descibe,size,price} =useParams();

return <>

<h1>פרטי התמונה</h1>
<p>{name}</p>
<img src={"/IMG/"+img}  />
{/* <p>{img}</p> */}
<p>{descibe}</p>
<p>{price}</p>
<p>{size}</p>

</>
}
export default ProductDBiger;

