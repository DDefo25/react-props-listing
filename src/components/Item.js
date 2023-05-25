import PropTypes from 'prop-types'
import getSymbolFromCurrency from 'currency-symbol-map'

function Item({item}) {
    const {url, MainImage: {url_570xN: urlImage}, title, currency_code, price, quantity} = item;

    const priceStr = (currency_code === 'USD' || currency_code === 'EUR') ? getSymbolFromCurrency(currency_code) + price : price + ' ' + currency_code;
    
    let level = 'medium'
    if (quantity > 20) {
        level = 'high'
    } else if (quantity <= 10) {
        level = 'low'
    }

    return (
        <div className="item">
            <div className="item-image">
                <a href={url}>
                    <img src={urlImage} />
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{title.length > 50 ? title.substring(0, 49) + '...' : title}</p>
                <p className="item-price">{priceStr}</p>
                <p className={"item-quantity level-" + level}>{quantity + ' left'}</p>
            </div>
        </div>
    )
}

Item.propTypes = {
    url: PropTypes.string, 
    MainImage: PropTypes.objectOf(PropTypes.string),
    title: PropTypes.string,
    currency_code: PropTypes.string,
    price: PropTypes.string,
    quantity: PropTypes.number
}

export default Item