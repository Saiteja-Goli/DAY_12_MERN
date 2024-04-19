import React from 'react';

const ChartDisplay = () => {
    // Generating some large dummy data
    const largeData = Array.from({ length: 1000000 }, (_, index) => ({
        id: index,
        name: `Item ${index}`,
        value: Math.random() * 100,
    }));

    return (
        <div>
            <h2>Large Dataset Display</h2>
            <ul>
                {largeData.slice(0, 100).map(item => (
                    <li key={item.id}>{item.name}: {item.value}</li>
                ))}
            </ul>
        </div>
    );
};

export default ChartDisplay;
