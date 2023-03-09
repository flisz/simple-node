const THIS_NAME = process.env.NAME

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log(`${THIS_NAME} RULES!!`);
    await sleep(5000);
  }
}

main();
