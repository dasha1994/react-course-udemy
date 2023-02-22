import { Link, useNavigate } from "react-router-dom";

function ProductsPage() {
  return (
    <>
      <hi>Products Page</hi>
      <ul>
        <li>
          <Link to="p1">Product 1</Link>
        </li>
        <li>
          <Link to="p2">Product 2</Link>
        </li>
        <li>
          <Link to="p3">Product 3</Link>
        </li>
      </ul>
    </>
  );
}

export default ProductsPage;
