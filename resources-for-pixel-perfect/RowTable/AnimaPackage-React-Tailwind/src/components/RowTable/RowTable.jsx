/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { DianaBuy1 } from "../../icons/DianaBuy1";
import { EightyOne } from "../../icons/EightyOne";
import { IcoCheckVerde } from "../../icons/IcoCheckVerde";
import { NinetyOne } from "../../icons/NinetyOne";
import { Property1Default } from "../../icons/Property1Default";
import { SeventyOne } from "../../icons/SeventyOne";
import { TwentyOne } from "../../icons/TwentyOne";

export const RowTable = () => {
  return (
    <div className="inline-flex items-center justify-center relative border-b [border-bottom-style:solid] border-dividing-line">
      <div className="flex flex-wrap w-[70px] h-[62px] items-center justify-center gap-[0px_0px] p-1 relative bg-white">
        <div className="flex-1 text-center relative [font-family:'Roboto',Helvetica] font-normal text-black text-sm tracking-[0] leading-4">
          10
        </div>
      </div>

      <div className="flex flex-col w-[230px] h-[62px] items-start justify-center p-1 relative bg-white">
        <div className="flex items-center gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-blue-link text-sm tracking-[0] leading-[18px] whitespace-nowrap">
            TSLA
          </div>

          <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
            <DianaBuy1 className="!relative !w-[15.45px] !h-[15.45px] !mt-[-1.45px]" />
            <IcoCheckVerde className="!relative !w-3 !h-3.5" />
          </div>
        </div>

        <p className="self-stretch relative [font-family:'Roboto',Helvetica] font-normal text-black text-sm tracking-[0] leading-4">
          First Citizens Bancshares, Inc (NC)
        </p>
      </div>

      <div className="flex flex-col w-[58px] h-[62px] items-center justify-center gap-2.5 p-1 relative bg-white">
        <div className="relative w-[17px] h-2.5 bg-[url(/img/group-3.png)] bg-[100%_100%]" />
      </div>

      <div className="flex w-[72px] h-[62px] items-center justify-center gap-2.5 p-1 relative bg-blue-ai-score border-r [border-right-style:solid] border-l [border-left-style:solid] border-[#d5ebff]">
        <NinetyOne className="!relative !w-8 !h-8" />
      </div>

      <div className="flex flex-col w-20 h-[62px] items-center justify-center gap-2.5 p-1 relative bg-white">
        <div className="relative w-[26px] h-[18px]">
          <div className="absolute top-0 left-4 [font-family:'Roboto',Helvetica] font-normal text-black text-sm tracking-[0] leading-[18px] whitespace-nowrap">
            1
          </div>

          <div className="absolute w-3 h-3 top-[3px] left-0 bg-white">
            <img
              className="absolute w-2.5 h-3 top-0 left-px"
              alt="Group"
              src="/img/group-97.png"
            />
          </div>
        </div>
      </div>

      <div className="flex w-[86px] h-[62px] items-center justify-center gap-2.5 p-1 relative bg-white">
        <SeventyOne className="!relative !w-8 !h-8" />
      </div>

      <div className="flex w-[86px] h-[62px] items-center justify-center gap-2.5 p-1 relative bg-white">
        <NinetyOne className="!relative !w-8 !h-8" />
      </div>

      <div className="flex w-[86px] h-[62px] items-center justify-center gap-2.5 p-1 relative bg-white">
        <EightyOne className="!relative !w-8 !h-8" />
      </div>

      <div className="flex w-20 h-[62px] items-center justify-center gap-2.5 p-1 relative bg-white">
        <TwentyOne className="!relative !w-8 !h-8" />
      </div>

      <div className="flex w-[92px] h-[62px] items-center justify-center gap-2.5 p-1 relative bg-white">
        <div className="text-black relative w-fit [font-family:'Roboto',Helvetica] font-normal text-sm tracking-[0] leading-[18px] whitespace-nowrap">
          58.76%
        </div>
      </div>

      <div className="flex w-[161px] h-[62px] items-center justify-center gap-2.5 p-1 relative bg-white">
        <div className="text-[#1156cc] relative w-fit [font-family:'Roboto',Helvetica] font-normal text-sm tracking-[0] leading-[18px] whitespace-nowrap">
          Automobiles
        </div>
      </div>

      <div className="flex w-[83px] h-[62px] items-center justify-center gap-2.5 p-1 relative bg-white">
        <Property1Default className="!relative !w-[22px] !h-[22px]" />
      </div>
    </div>
  );
};
