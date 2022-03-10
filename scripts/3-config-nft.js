import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x26205f2f566acb28a8364D52B6389B84195309aA",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Fish on the Hook",
        description: "This is your Portal NFT to FISHDAO!",
        image: readFileSync("scripts/assets/fishdao2.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()