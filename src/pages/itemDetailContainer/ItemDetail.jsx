import CounterContainer from "../../components/counter/CounterContainer";
import "./itemDetail.css";

const ItemDetail = ({ item, onAdd, initial }) => {
  return (
    <>
      <div>
        <div className={"containerItemDetail"}>
          <div className={"containerImage"}>
            <img src={item.img} alt="" />
          </div>

          <div className={"containerDetail"}>
            <h2 className="item-title">
              <span className="detail-label"> </span> {item.title}
            </h2>
            <h2 className="item-description">
              <span className="detail-label">Descripción:</span> {item.description}
            </h2>
            <h2 className="item-price">
              <span className="detail-label">Precio:</span> ${item.price}.-
            </h2>
          </div>
        </div>
        <CounterContainer onAdd={onAdd} stock={item.stock} initial={initial} />
      </div>
    </>
  );
};

export default ItemDetail;
