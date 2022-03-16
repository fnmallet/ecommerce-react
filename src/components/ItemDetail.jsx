function ItemDetail({ item }) {
    return (
        <>
            <div className="container-fluid d-flex gap-5">
                <div className="col text-end shadow">
                    <img src={item.pictureUrl} alt={item.title} />
                </div>
                <div className="col">
                    <h1>{item.title}</h1>
                    <p align="justify">{item.description}</p>
                    <p className="fs-3 text-white text-end mt-4"><span className="background-color-primary p-2 rounded-3">${item.price}</span></p>
                </div>
            </div>
        </>
    );
};

export default ItemDetail;