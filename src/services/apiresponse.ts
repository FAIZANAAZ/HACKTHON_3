"use server"

import { client } from "@/sanity/lib/client"

export async function get() {
    const api =await client.fetch(`*[_type=="products"]{
        _id,
        name,
        description,
        price,
        "imageUrl" : image.asset->url,
        category,
        discountPercent,
        "isNew": new,
        colors,
        sizes,
        dressStyle
      }`)
    return api
}

