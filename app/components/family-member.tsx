import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { HierrachyItemProps } from "@/lib/type";
import { CakeSliceIcon } from "lucide-react";

export default function FamilyMember({
  hierrachyItem,
}: {
  hierrachyItem: HierrachyItemProps;
}) {
  return (
    <Card className="bg-[#F8D153] p-6 min-w-[280px] max-w-[280px] rounded-[3rem] py-16 px-12 border-4 border-[#a37e05] shadow-[2px_2px_0px_#a37e05]">
      <div className="flex flex-col items-center gap-4">
        <Avatar className="size-28 border-4 border-[#a37e05] rounded-3xl">
          <AvatarImage />
          <AvatarFallback className="text-3xl uppercase font-bold rounded-3xl">
            {hierrachyItem.name[0]}
            {hierrachyItem.name[1]}
          </AvatarFallback>
        </Avatar>
        <h2 className="text-4xl font-bold text-black tracking-wider">
          {hierrachyItem.name}
        </h2>
        <span className="px-4 py-1 bg-black text-white rounded-full text-sm capitalize font-semibold tracking-widest">
          {hierrachyItem.role}
        </span>
        <time className="text-sm text-black flex items-center gap-1 font-bold">
          <span role="img" aria-label="crown">
            <CakeSliceIcon className="text-white" />
          </span>
          {hierrachyItem.dob}
        </time>
      </div>
    </Card>
  );
}
