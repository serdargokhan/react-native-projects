export type NewsData = {
    articles: {
        urlToImage: string;
        publishedAt: string;
        title: string;
        url: string;
        content: string;
        author: string;
        description: string;
        source: {
            name: string;
        };
    }[];
};

export interface ItemProps {
    title: string;
    urlToImage: string;
    name: string;
    url: string;
    content: string;
    description: string;
    publishedAt: string;
    author: string;
}
