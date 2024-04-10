import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { formatDistanceToNow } from 'date-fns';
import Link from "next/link";

interface Inscription {
  id: string
  from: string
  to: string
  p: string
  op: string
  tick: string
  amt: string
  block_number: number
  timestamp: string
}

async function getData(): Promise<{data: Inscription[]}> {
  const response = await fetch("https://api.eorc20.io/inscription?limit=50");
  return response.json();
}

export default async function Component() {
  const data = await getData()

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '15px' }}>
      {data.data.map((row) => (
        <Card key={row.id}>
          <CardHeader className="pb-2">
            <CardDescription>{row.op}</CardDescription>
            <CardTitle className="text-4xl">{row.tick}</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="text-xs overflow-auto whitespace-pre-wrap break-words">
              {JSON.stringify({p: row.p, tick: row.tick, op: row.op, amt: row.amt}, null, 2)}
            </pre>
            <div>
              <Link target="_blank" href={`https://explorer.evm.eosnetwork.com/tx/${row.id}`}>{`${row.id.slice(0, 6)}...${row.id.slice(-6)}`}</Link>
            </div>
            <div className="text-xs text-gray-400">{formatDistanceToNow(new Date(row.timestamp), { addSuffix: true })}</div>
          </CardContent>
          <CardFooter>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
