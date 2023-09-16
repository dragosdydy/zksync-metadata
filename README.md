## Example (Top 10 zkSync NFTs)

```
curl --location --request POST 'http://localhost:3000/fetchNFTImages' \
--header 'Content-Type: application/json' \
--data-raw '[
    {"0xa3438cdf2c03dea678295d4b28faa38f7375ec67": "580"},
    {"0x0bb3e9a0340dd8cbe1073eb264b7f9900f4c9446": "4333"},
    {"0xf27e53edc24be11b4c5dc4631fd75ea0ed896d64": "254175000103"},
    {"0xf27e53edc24be11b4c5dc4631fd75ea0ed896d64": "254170200100"},
    {"0x2d2a27ca29d85d6fba9f06a89f77de4de8b19ca8": "1549"},
    {"0xdd1bf534d74983339b512f2c06f3600869517df1": "9592"},
    {"0x216cfdd7fe531f8aa4725cd785fb8acf7950da56": "1411"},
    {"0x216cfdd7fe531f8aa4725cd785fb8acf7950da56": "27"}
]'
```

## Response
```
[
    {
        "contract": "0xa3438cdf2c03dea678295d4b28faa38f7375ec67",
        "id": "580",
        "name": "Pokemon Cos #580",
        "image": "https://dappradar.com/cdn-cgi/image/width=150,quality=90/https://ipfs.io/ipfs/QmTdVZ3PeZacMdjF7tHjr47skomqXTzs1Q7YaqCekFxuL8"
    },
    {
        "contract": "0x0bb3e9a0340dd8cbe1073eb264b7f9900f4c9446",
        "id": "4333",
        "name": "Genshin X #4333",
        "image": "https://dappradar.com/cdn-cgi/image/width=150,quality=90/https://ipfs.io/ipfs/QmPjgS6bvbQHfnSd61hx6ocUKiuEEbAGWHjKwjqTpjHdyu"
    },
    {
        "contract": "0xf27e53edc24be11b4c5dc4631fd75ea0ed896d64",
        "id": "254175000103",
        "name": "Bearing",
        "image": "https://dappradar.com/cdn-cgi/image/width=150,quality=90/https://robots.farm/items/item-bearing-bg.webp"
    },
    {
        "contract": "0xf27e53edc24be11b4c5dc4631fd75ea0ed896d64",
        "id": "254170200100",
        "name": "Gear",
        "image": "https://dappradar.com/cdn-cgi/image/width=150,quality=90/https://robots.farm/items/item-gear-bg.webp"
    },
    {
        "contract": "0x2d2a27ca29d85d6fba9f06a89f77de4de8b19ca8",
        "id": "1549",
        "name": "Date Mate #1549",
        "image": "https://dappradar.com/cdn-cgi/image/width=150,quality=90/https://ipfs.io/ipfs/QmRciW5YuzkfMeNk4rJxMmCgGpSNkgLZjhHpXZ4HqVDDnv"
    },
    {
        "contract": "0xdd1bf534d74983339b512f2c06f3600869517df1",
        "id": "9592",
        "name": "Zk Cats V2 #9592",
        "image": "https://dappradar.com/cdn-cgi/image/width=150,quality=90/https://ipfs.io/ipfs/QmQQ2Y7gQsAf1ayGMSAgRg51Bvm2XNiFZBM5GnEhdJZLTg"
    },
    {
        "contract": "0x216cfdd7fe531f8aa4725cd785fb8acf7950da56",
        "id": "1411",
        "name": "Lil MeoWs #1411",
        "image": "https://dappradar.com/cdn-cgi/image/width=150,quality=90/https://ipfs.io/ipfs/QmZxDePmnDihScXWTahQB3TbcFAuxnrYLVjQfKS7NjV7FA/1411.png"
    },
    {
        "contract": "0x216cfdd7fe531f8aa4725cd785fb8acf7950da56",
        "id": "27",
        "name": "Lil MeoWs #27",
        "image": "https://dappradar.com/cdn-cgi/image/width=150,quality=90/https://ipfs.io/ipfs/QmZxDePmnDihScXWTahQB3TbcFAuxnrYLVjQfKS7NjV7FA/27.png"
    }
]
```
