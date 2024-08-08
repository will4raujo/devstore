import { z } from 'zod'
import data from '../data.json'

export async function GET(
  _: Request,
  {params}: {params: {slug: string}}
) {

  await new Promise((resolve) => setTimeout(resolve, 2000))

  const slug = z.string().parse(params.slug)

  const product = data.products.find(product => product.slug === slug)

  if (!product) {
    return Response.json({error: 'Product not found'}, {status: 404})
  }

  return Response.json(product)
}