import Item from "./Item";

function ItemList({ items }) {

    return (
        <>
            { items.map((item) => <Item key={ item.id } title={ item.title } price={ item.price } pictureUrl={ item.pictureUrl } />) }
        </>);
};

export default ItemList;