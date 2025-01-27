

import React, { Component} from 'react';
import { useNavigate } from 'react-router-dom';


function FITOUT() {
    const data = [
        { item: 'A', description: 'Mobilization and supervision.', unit: 'LS', unitRate: 12000, discount: '5%', unitRateAfterDiscount: 11400, qty: 1, amount: 11400 },
        { item: 'B', description: 'Installation and commissioning.', unit: 'LS', unitRate: 12000, discount: '5%', unitRateAfterDiscount: 11400, qty: 1, amount: 11400 },
        { item: 'C', description: ''}
    ];

    return (
        <div className="fitout">
        
            <table>
                <thead>
                    <tr>
                        <th>ITEM</th>
                        <th>DESCRIPTION</th>
                        <th>UNIT</th>
                        <th>UNIT RATE</th>
                        <th>DISCOUNT</th>
                        <th>UNIT RATE AFTER DISCOUNT</th>
                        <th>QTY</th>
                        <th>AMOUNT</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                            <td>{row.item}</td>
                            <td>{row.description}</td>
                            <td>{row.unit}</td>
                            <td>{row.unitRate}</td>
                            <td>{row.discount}</td>
                            <td>{row.unitRateAfterDiscount}</td>
                            <td>{row.qty}</td>
                            <td>{row.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default FITOUT;
