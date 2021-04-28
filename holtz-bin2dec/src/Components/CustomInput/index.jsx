import PropTypes from 'prop-types';

export default function CustomInput({type}) {
    return (
        <div>
            <span>{type}</span>

        </div>
    )
}

CustomInput.propTypes = {
    type: PropTypes.oneOf(['From', 'To']).isRequired
}