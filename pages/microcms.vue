<script setup lang="ts">
import type { Blog } from "~~/types/blog";
import type { MDBlog } from "~~/types/blog";

// import { MicroCMSClient } from 'microcms-js-sdk';

// const serviceDomain = this.$config.public.microCMS.serviceDomain;
// const apiKey = this.$config.public.microCMS.apiKey;

// const client = new MicroCMSClient({
//     serviceDomain: serviceDomain,
//     apiKey: apiKey,
// });

// const { data } = await client.getList({
//     endpoint: 'blogs',
// });

const { data } = await useMicroCMSGetList<Blog>({
    endpoint: 'blogs'
})
</script>

<template>
    <h1 class="text-3xl mt-8 my-8">nuxt3 Jamstack Blogs</h1>
    <ul>
        <li v-for="blog in data?.contents" :key="blog.id">
            <NuxtLink>
                <img :src="blog.eyecatch?.url" :width="blog.eyecatch?.width" :height="blog.eyecatch?.height" alt="" />
                <div>
                    <div>
                        {{ blog.category?.name }}
                    </div>
                    <div>
                        {{ blog.title }}
                    </div>
                    <div v-html="blog.content" class="prose mt-6 md:mt-10"></div>
                    <div>
                        {{ blog.publishedAt ?? blog.createdAt }}
                    </div>
                </div>
            </NuxtLink>
        </li>
    </ul>
</template>