import PropTypes from 'prop-types'
import Item from './Item'

function Listing({items}) {
    return (
        <div className="item-list">
            {items.map(item => item.state === 'active' && <Item key={item.listing_id} item={item}/>)}
        </div>
    )
}

Listing.defaultProp = {
    items: []
}

Listing.propTypes = {
    items: PropTypes.array
}

export default Listing