import React from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
    const params = useParams();
    const { id } = params;

    return (
        <div>
            <h1>products detail</h1>
            <p>This is the detail page for a product.</p>
        </div>
    )
}
export default Detail;