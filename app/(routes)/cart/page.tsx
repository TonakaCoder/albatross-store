"use client";

import Container from "@/components/ui/container";
import useCart from "@/hooks/use-cart";
import { useState, useEffect } from "react";
import CartItem from "./components/cart-item";
import Summary from "./components/summary";

interface PageProps {}

const Page: React.FC<PageProps> = () => {
  const [isMounted, setIsMounted] = useState(false);

  const cart = useCart();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-black">カート</h1>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-strat gap-x-12">
            <div className="lg:col-span-7">
              {cart.items.length === 0 && <p className="text-neutrall-500">項目がありません。</p>}
              <ul>
                {cart.items.map((item) => (
                  <CartItem key={item.id} data={item} />
                ))}
              </ul>
            </div>
            <Summary />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Page;
