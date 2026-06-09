"use client"
import Image from 'next/image';
import React from 'react'
interface ICountProps {
  countData: number;
}
const ImageComponent: React.FC<ICountProps> = ({ countData }) => {
  return (<> 
  <div> <div> <Image className="w-50! h-auto!" width={50} height={50} unoptimized src="/assets/image.png" alt="image" /></div>
  <div> countValue: {countData} </div>
  </div>
  </>)
}

export default ImageComponent