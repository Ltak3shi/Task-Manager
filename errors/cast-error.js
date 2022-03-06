const CustomAPIError = require("./custom-error")

const castError = (err) => {
    if(err.name === 'CastError'){
        return new CustomAPIError('Invalid Id')
    }
    return err
}

module.exports = castError