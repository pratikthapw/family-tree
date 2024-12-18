import { Card } from "@/components/ui/card";
import { HierrachyItemProps } from "@/lib/type";
import { Plus } from "lucide-react";
import FamilyMember from "./family-member";

export default function CoupleCard({
  memberData,
  spouseData,
}: {
  memberData: HierrachyItemProps;
  spouseData: Required<HierrachyItemProps>["spouse"];
}) {
  return (
    <Card className="bg-[#F8D153] max-w-max max-h-max rounded-[3rem] flex items-center gap-6">
      <FamilyMember hierrachyItem={memberData} />
      <div className="border-4 rounded-full border-[#a37e05]">
        <Plus className="size-16 text-[#a37e05]" />
      </div>
      <FamilyMember hierrachyItem={spouseData} />
    </Card>
  );
}
