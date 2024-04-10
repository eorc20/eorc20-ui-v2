import { formatToThousands } from "@/utils/formatBalance";
import { ColumnDef } from "@tanstack/react-table"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button";

export type GetSupply = {
  tick:                string;
  deploy_address:      string;
  deploy_timestamp:    string;
  deploy_block_number: number;
  max_supply:          number;
  limit_by_amount:     number;
  protocol:            string;
  decimal:             number;
  holders:             number;
  transactions:        number;
  active_supply:       number;
  last_mint_timestamp: string;
  last_timestamp:      string;
  progress:            number;
}

export const columns: ColumnDef<GetSupply>[] = [
  {
    accessorKey: "tick",
    header: "Tick",
  },
  {
    accessorKey: "deploy_timestamp",
    header: "Deploy Time",
  },
  {
    accessorKey: "progress",
    header: "Progress",
    cell: ({ row }) => {
      const progress = Number(row.getValue("progress") ?? 0) * 100;
      return <Progress value={progress}/>
    },
  },
  {
    accessorKey: "holders",
    header: "Holders",
    cell: ({ row }) => {
      const formatted = formatToThousands(row.getValue("holders"))
      return <div className="text-left font-medium">{formatted}</div>
    },
  },
  {
    accessorKey: "active_supply",
    header: "Total Supply",
    cell: ({ row }) => {
      const formatted = formatToThousands(row.getValue("active_supply"))
      return <div className="text-left font-medium">{formatted}</div>
    },
  },
  {
    accessorKey: "details",
    header: "",
    cell: ({ row }) => {
      return <Button>Details</Button>
    },
  },
]