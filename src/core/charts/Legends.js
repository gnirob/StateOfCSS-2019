import React from 'react'
import PropTypes from 'prop-types'
import LegendsItem from './LegendsItem'

const Legends = ({
    layout,
    withFrame,
    legends,
    chipSize,
    style,
    itemStyle,
    chipStyle,
    onMouseEnter,
    onMouseLeave,
    onClick,
    data,
    units
}) => {
    const classNames = ['Legends', `Legends--${layout}`]
    if (withFrame === true) {
        classNames.push('Legends--withFrame')
    }

    const rootStyle = { ...style }

    return (
        <div className={classNames.join(' ')} style={rootStyle}>
            {legends.map(({ id, label, color, keyLabel }) => (
                <LegendsItem
                    key={id}
                    id={id}
                    label={label}
                    color={color}
                    style={itemStyle}
                    chipSize={chipSize}
                    chipStyle={chipStyle}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    onClick={onClick}
                    keyLabel={keyLabel}
                    data={data && data.find(b => b.id === id)}
                    units={units}
                />
            ))}
        </div>
    )
}

Legends.propTypes = {
    legends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            label: PropTypes.string.isRequired,
            keyLabel: PropTypes.string,
            color: PropTypes.string
        })
    ).isRequired,
    layout: PropTypes.oneOf(['horizontal', 'vertical']).isRequired,
    withFrame: PropTypes.bool.isRequired,
    chipSize: PropTypes.number.isRequired,
    modifier: PropTypes.string,
    style: PropTypes.object.isRequired,
    itemStyle: PropTypes.object.isRequired,
    chipStyle: PropTypes.object.isRequired,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onClick: PropTypes.func
}

Legends.defaultProps = {
    layout: 'horizontal',
    withFrame: true,
    style: {},
    itemStyle: {},
    chipStyle: {},
    chipSize: 16
}

export default Legends
