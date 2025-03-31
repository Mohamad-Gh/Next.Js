import Link from "next/link";
import { Button } from "../ui/button";
import { LuShoppingCart } from "react-icons/lu";

//temp
const numItemsInCart: number = 8;
export default function CartButton() {
  return (
    <Button
      asChild
      variant="outline"
      size="icon"
      className="flex justify-center items-center relative"
    >
      <Link href="/cart">
        <LuShoppingCart />
        <span className="absolute -right-3 -top-3 bg-primary rounded-full text-white w-6 h-6 flex justify-center items-center text-xs">
          {numItemsInCart}
        </span>
      </Link>
    </Button>
  );
}
