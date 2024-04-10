"use client"

import { GetSupply, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<GetSupply[]> {
  // Fetch data from your API here.
  return [
    {
      tick: "eoss",
      deploy_address: "0x30b7cadcb65e113abd3376dbed624e1baed9a7f3",
      deploy_timestamp: "2023-12-09 06:44:52",
      deploy_block_number: 21443204,
      max_supply: 210000000000,
      limit_by_amount: 10000,
      protocol: "eorc20",
      decimal: 0,
      holders: 22187,
      transactions: 21005064,
      active_supply: 210000000000,
      last_mint_timestamp: "2023-12-10 14:42:28",
      last_timestamp: "2024-02-01 06:35:31",
      progress: 1
    },
    // ...
  ]
}

export default async function Page() {
  const data = await getData()

  return (
    <DataTable columns={columns} data={data} />
  )
}
