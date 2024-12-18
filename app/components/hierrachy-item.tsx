import React from "react";
import type { HierrachyItemProps } from "@/lib/type";
import FamilyMember from "./family-member";
import CoupleCard from "./couple-card";
import { cva, cx, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const nodeVariants = cva("", {
  variants: {
    variant: {
      verticalLine: "absolute top-0 h-tree-line-height box-border content-['']",
      childrenContainer:
        "flex pl-0 m-0 pt-tree-line-height relative before:absolute before:top-0 before:left-[calc(50%-0.5px)] before:h-tree-line-height before:box-border before:w-0 before:border-l-tree-line before:border-solid before:border-tree-line",
      node: "flex-auto text-center list-none relative pt-tree-line-height px-tree-node-padding",
      nodeLines: cn(
        "relative before:absolute after:absolute before:top-0 after:top-0 before:h-tree-line-height after:h-tree-line-height before:box-border after:box-border",
        "before:right-1/2 after:left-1/2 before:w-1/2 after:w-1/2 before:border-t-tree-line after:border-t-tree-line before:border-solid after:border-solid",
        "only:before:hidden only:after:hidden only:p-0",
        "first:before:border-0 first:before:border-none first:after:rounded-tl-tree-line",
        "last:before:border-r-tree-line last:before:rounded-tr-tree-line last:after:border-0 last:after:border-none"
      ),
    },
  },
  defaultVariants: {
    variant: "nodeLines",
  },
});

export interface NodeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof nodeVariants> {
  hierrachyItem: HierrachyItemProps;
}

export default function HierrachyItem({ hierrachyItem }: NodeProps) {
  const hasChildrens =
    hierrachyItem?.childrens && hierrachyItem.childrens?.length > 0;
  return (
    <li
      className={cx(
        "mx-auto max-w-fit self-center",
        nodeVariants({ variant: "node" }),
        nodeVariants({ variant: "nodeLines" })
      )}
    >
      <RenderCard hierrachyItem={hierrachyItem} />
      {hasChildrens && (
        <ul className={cx(nodeVariants({ variant: "childrenContainer" }))}>
          {hierrachyItem.childrens?.map((item, index) => {
            return <HierrachyItem hierrachyItem={item} key={index} />;
          })}
        </ul>
      )}
    </li>
  );
}

function RenderCard({ hierrachyItem }: { hierrachyItem: HierrachyItemProps }) {
  if (hierrachyItem.spouse) {
    return (
      <CoupleCard
        memberData={hierrachyItem}
        spouseData={hierrachyItem.spouse}
      />
    );
  }
  return <FamilyMember hierrachyItem={hierrachyItem} />;
}
