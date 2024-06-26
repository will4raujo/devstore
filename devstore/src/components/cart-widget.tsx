'use client'
import { ShoppingBag } from "lucide-react"
import { useCart } from "@/contexts/cart-context"

export default function CartWidget() {

  const { items } = useCart()
  
  return (
    <div className="flex items-center gap-2">
      <ShoppingBag className="w-4 h-4" />
      <span className="text-sm">{items.length}</span>
    </div>
  )
}