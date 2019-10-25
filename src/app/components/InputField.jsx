import React, { useState } from 'react'

const InputField = props => {
    const { type, onType, ...restProps } = props
    const [value, setValue] = useState('')

    const _onChange = e => {
        e.preventDefault()

        const { value } = e.target
        setValue(value)

        onType(value)
    }

    return <input type={props.type} value={value} onChange={_onChange} {...restProps} />
}

export default InputField
