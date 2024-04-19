import React, { Suspense } from 'react';

// Using React.lazy to dynamically import ChartDisplay component
const ChartDisplay = React.lazy(() => import('./ChartDisplay'));

const LoadingFallback = () => (
    <div>Loading Chart...</div>
);

const LazyChartDisplay = () => {
    return (
        <Suspense fallback={<LoadingFallback />}>
            <ChartDisplay />
        </Suspense>
    );
};

export default LazyChartDisplay;
