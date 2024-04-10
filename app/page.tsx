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

async function getData(): Promise<Inscription[]> {
  // Fetch data from your API here.
  return [
    {
      "id": "0x41b6a15b04c1a7025c70cc051fb6b0340b6ed98cd8eeadc51179113f27602985",
      "from": "0x194b692235a0f7ea22f1aac68a8ca11d8eb6b2d4",
      "to": "0x0195a5452ec9c918d665cebb7d69a9ea188fad2e",
      "p": "eorc20",
      "op": "transfer",
      "tick": "eoss",
      "amt": "1",
      "block_number": 23071481,
      "timestamp": "2023-12-28 03:02:49"
    },
    {
      "id": "0x9b94d791352834081821b07260e8d134e12c5e6093f6dcf94b5bca9387510d88",
      "from": "0x194b692235a0f7ea22f1aac68a8ca11d8eb6b2d4",
      "to": "0x0195a5452ec9c918d665cebb7d69a9ea188fad2e",
      "p": "eorc20",
      "op": "transfer",
      "tick": "eoss",
      "amt": "1",
      "block_number": 23067603,
      "timestamp": "2023-12-28 01:58:11"
    },
    {
      "id": "0x98a194bc7ea8c147370d4c95f034fda79b32aaca873cb8bf2da26788c4972be1",
      "from": "0x194b692235a0f7ea22f1aac68a8ca11d8eb6b2d4",
      "to": "0x0195a5452ec9c918d665cebb7d69a9ea188fad2e",
      "p": "eorc20",
      "op": "transfer",
      "tick": "eoss",
      "amt": "1",
      "block_number": 23067585,
      "timestamp": "2023-12-28 01:57:53"
    },
    {
      "id": "0x7160c8c3da90a09c59a1e9478d4240925b5587291fe4a7243cd4be345d5edd28",
      "from": "0x0bfad84c7650e9c55fde12402c0d36e75d23fa1b",
      "to": "0x002e057a065feec5671ec7d46a35dda256b0ad92",
      "p": "eorc20",
      "op": "transfer",
      "tick": "eoss",
      "amt": "2599740",
      "block_number": 22986145,
      "timestamp": "2023-12-27 03:20:33"
    },
    {
      "id": "0x34ad441acf4039c6ccdc481f05f94364dbd76d28d84c0aee35ac763aba29ed33",
      "from": "0x0bfad84c7650e9c55fde12402c0d36e75d23fa1b",
      "to": "0x002e057a065feec5671ec7d46a35dda256b0ad92",
      "p": "eorc20",
      "op": "transfer",
      "tick": "eoss",
      "amt": "260",
      "block_number": 22983581,
      "timestamp": "2023-12-27 02:37:49"
    },
    {
      "id": "0x05bd9d812f59b0f28f63f5edbf53191724378c77d984061322a95cfe97a8fea0",
      "from": "0x20d00f578c5997511a5b15b6ec749154e23fe47f",
      "to": "0x0083fd119dd4ceeaff1906d06e57cd4eee00cc73",
      "p": "eorc20",
      "op": "transfer",
      "tick": "eoss",
      "amt": "4540000",
      "block_number": 22668735,
      "timestamp": "2023-12-23 11:10:23"
    },
    {
      "id": "0xf4908f017b4e128c78e31d78f670fc0dc112e1ec3b24fd0fd2192a7f345a8e65",
      "from": "0xcb4731ef7ff1a99ed8ee01bad289c45e4aa85e99",
      "to": "0x0083fd119dd4ceeaff1906d06e57cd4eee00cc73",
      "p": "eorc20",
      "op": "transfer",
      "tick": "eoss",
      "amt": "4680000",
      "block_number": 22668586,
      "timestamp": "2023-12-23 11:07:54"
    },
    {
      "id": "0x5709a3ec4f724452cd07537da9bb7b4aa6dbd4c838bb5e365e254dabf74e9983",
      "from": "0x77d29499da3b2ef892e45f243eae85d85f52b423",
      "to": "0x0083fd119dd4ceeaff1906d06e57cd4eee00cc73",
      "p": "eorc20",
      "op": "transfer",
      "tick": "eoss",
      "amt": "4080000",
      "block_number": 22668353,
      "timestamp": "2023-12-23 11:04:01"
    },
    {
      "id": "0x312c218159665dc07af3c654e251ffe3fb19b95033b5ad60296003f4a9ab32be",
      "from": "0xbbbbbbbbbbbbbbbbbbbbbbbb55318063a0000000",
      "to": "0x000000e6f6402d3926309456446194765ede70db",
      "p": "eorc20",
      "op": "transfer",
      "tick": "eoss",
      "amt": "10000000",
      "block_number": 22642373,
      "timestamp": "2023-12-23 03:51:01"
    },
    {
      "id": "0x46cbfb6b1d553d257db7fe354f376f2918761234e1e02eb8509ba010153bb032",
      "from": "0xbbbbbbbbbbbbbbbbbbbbbbbb55318063a0000000",
      "to": "0x0067101fd62585038a669b7128a602fedfdeac1b",
      "p": "eorc20",
      "op": "transfer",
      "tick": "eoss",
      "amt": "10000000",
      "block_number": 22642224,
      "timestamp": "2023-12-23 03:48:32"
    }
  ]
}

export default async function Component() {
  const data = await getData()

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '15px' }}>
      {data.map((row) => (
        <Card>
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
        </Card>
      ))}
    </div>
  )
}


