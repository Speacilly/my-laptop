import { cn } from "@/lib/utils";
import React from "react";
import { Container } from "./container";
import Image from "next/image"
import { Button } from "../ui";
import { ArrowRight, ShoppingCart, UserRound } from "lucide-react";

interface Props {
    className?: string;
}

export const Header: React.FC<Props> = ({className}) =>{
    return(
        <header className={cn('border border-b',className)}>
            <Container className="flex item-center justify-between py-8">
                {/*Левая часть*/}
                <div className="flex item-center gap-4">
                    <Image src="/logo.svg" alt="logo" width={60} height={60}/>
                    <div>
                        <h1 className="text-2xl uppercase font-black">Next Laptop</h1>
                        <p className="text-sm text-gray-400 leading-3">удобней уже некуда</p>
                    </div>
                </div>
                {/*Правая часть*/}
                <div className="flex items-center gap-3">
                    <Button variant={"outline"} className="flex item-center gap-1">
                        <UserRound width={16} height={16}/>
                        Войти
                    </Button>
                    <div>
                        <Button className="group relative">
                            <b>520 ₽</b>
                            <span className="h-full w-[1px] bg-white/30 mx-3"></span>
                            <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                                <ShoppingCart size={16} className=" relative" strokeWidth={2}/>
                                <b>3</b>
                            </div>
                            <ArrowRight 
                                size={20} 
                                className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
                            />
                        </Button>
                    </div>
                </div> 
            </Container>
        </header>
    );
};