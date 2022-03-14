function Item({ title, price, pictureUrl }) {
    return (
        <div className="col">
            <div className="card h-100 mx-auto">
                <img src={pictureUrl} className="card-img-top" alt={ title } />
                <div className="card-body">
                    <h4 className="card-title text-center">{ title }</h4>
                    <h5 className="card-title text-center">{ "$ " + price }</h5>
                </div>
            </div>
        </div>
    );
};

export default Item;
