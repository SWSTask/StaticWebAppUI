import Prismic from '@prismicio/client';

const apiEndpoint = 'https://swsapp.cdn.prismic.io/api/v2';

const client = new Prismic.Client(apiEndpoint);

export async function getAllPosts() {
    return client.getByType("menu_details");
}