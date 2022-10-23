import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../NewsSummaryCard/NewsSummaryCard';

const Category = () => {
    const categorynNews = useLoaderData();
    return (
        <div>
            <h1>Category {categorynNews.length}</h1>
            {
                categorynNews.map(news => <NewsSummaryCard
                    key={news._id}
                    news={news}
                ></NewsSummaryCard>)
            }
        </div>
    );
};

export default Category;