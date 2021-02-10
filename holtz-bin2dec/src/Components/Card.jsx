import React, { useState } from 'react';

export default function Card({input}) {
    if (input)
        return (
            <div>Card input</div>
        )

    return (
        <div>Card</div>
    )
}