import { Link } from "react-router-dom";

function Item({ item }) {
    return (
        <div className="col">
            <div className="card h-100 mx-auto">
                <Link to={`/item/${item.id}`} className="text-black nav-link p-0">
                    <img src={item.pictureUrl} className="card-img-top" alt={ item.title } />
                    <div className="card-body">
                        <h4 className="card-title text-center fs-5">{ item.title }</h4>
                        <h5 className="card-title text-center text-color-primary">{ "$ " + item.price }</h5>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Item;
