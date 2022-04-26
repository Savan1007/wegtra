/* eslint-disable import/prefer-default-export */

// application
import { delayResponse } from '~/fake-server/utils';
import { IPost } from '~/interfaces/post';
import { posts as dbPosts } from '~/fake-server/database/posts';
import axios from 'axios';
import {baseApi} from "../../../config.json"

export async function getLatestPosts(limit: number): Promise<IPost[]> {
    const {data, status} = await axios.get(`${baseApi}/blogs`);
    console.log("status");
    if(status == 200) {
        return delayResponse(Promise.resolve(data.slice(0, limit)));
    }
    else {
        return delayResponse(Promise.resolve(dbPosts.slice(0, limit)));
    }
}
