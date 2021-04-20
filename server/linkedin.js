const router = require('express').Router();
const puppeteer = require('puppeteer');
module.exports = router;

// router.get('/', async (req, res, next) => {
//   try {
//     const url = req.query.url;
//     const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
//     const page = await browser.newPage();

//     await page.goto(url);

//     const text = await page.evaluate(() =>
//       Array.from(document.querySelectorAll('div.search-listing')).map(
//         (node) => ({
//           link: node.querySelector('a').href,
//           img: node.querySelector('img')
//             ? node.querySelector('img').src
//             : '/img/house.png',
//           title: node.querySelector('a.listing-title-link').innerText,
//           neighborhood: node.querySelector('div.overflow-ellipsis').innerText,
//           price: node.querySelector('span.font-size-13').innerText,
//         })
//       )
//     );

//     await browser.close();

//     res.send(text);
//   } catch (err) {
//     console.log(err);
//   }
// });

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(
    'https://www.linkedin.com/jobs/jobs-in-brooklyn-ny?position=1&pageNum=0'
  );
  await page.screenshot({ path: 'linkedin.png' });

  await browser.close();
})();
