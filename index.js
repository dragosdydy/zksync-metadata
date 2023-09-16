const express = require('express');
const { Provider } = require('zksync-web3');
const ethers = require('ethers');
const axios = require('axios');
const bodyParser = require('body-parser');

const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: 600, checkperiod: 120 });  // Cache for 10 minutes, check every 2 minutes

const web3 = new Provider("https://mainnet.era.zksync.io");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());


function ipfsToHttps(ipfsUrl) {
    if (ipfsUrl.startsWith('ipfs://')) {
        return ipfsUrl.replace('ipfs://', 'https://ipfs.io/ipfs/');
    }
    return ipfsUrl;
}

app.post('/fetchNFTImages', async (req, res) => {
    const nftArray = req.body;

    if (!nftArray || nftArray.length === 0 || nftArray.length >= 10) {
        res.status(400).send('Invalid input');
        return;
    }

    const results = [];

    for (const entry of nftArray) {
        const [address, tokenID] = Object.entries(entry)[0];
        const cacheKey = address + "_" + tokenID;

        // Create a default object structure for each entry
        let nftData = {
            contract: address,
            id: tokenID,
            name: null,
            image: null
        };

        // Check cache first
        const cachedValue = cache.get(cacheKey);
        if (cachedValue) {
            results.push(cachedValue);
            continue;
        }


        try {
            const contract = new ethers.Contract(address,[
                {
                    "constant": true,
                    "inputs": [{ "name": "tokenId", "type": "uint256" }],
                    "name": "tokenURI",
                    "outputs": [{ "name": "", "type": "string" }],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                }
            ], web3);

            const tokenURI = await contract.tokenURI(tokenID);
            const httpsTokenURI = ipfsToHttps(tokenURI);
            const metadata = await axios.get(httpsTokenURI, { timeout: 10000 }); // 5 seconds timeout
            // const imageUrl = "https://dappradar.com/cdn-cgi/image/width=150,quality=90/" + ipfsToHttps(metadata.data.image);

            nftData.image = "https://dappradar.com/cdn-cgi/image/width=150,quality=90/" + ipfsToHttps(metadata.data.image);
            nftData.name = metadata.data.name;

            // Add the object to results
            results.push(nftData);

            // Store result in cache
            cache.set(cacheKey, nftData);
        } catch (e) {
            console.log(e);
            // Push the default nftData structure (with null values) to results
            results.push(nftData);
        }
    }

    res.status(200).send(results);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
