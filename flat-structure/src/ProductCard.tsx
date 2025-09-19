import React from "react";
export default function ProductCard({ name, price, onAdd }:{name:string, price:number, onAdd:()=>void}){
  return <div className="border p-4 rounded">{name} - {price}₺ <button onClick={onAdd}>Add</button></div>
}