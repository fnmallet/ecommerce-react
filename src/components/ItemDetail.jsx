function ItemDetail({ title, price, description, pictureUrl }) {
    return (
        <>
            <div className="itemDetail container-fluid d-flex align-items-center gap-2">
                <div>
                    <img src={pictureUrl} alt={title} />
                </div>
                <div>
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
                <div>
                    ${price}
                </div>
            </div>
        </>
    );
};

export default ItemDetail;