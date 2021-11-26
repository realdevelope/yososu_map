console.log("test")
const request = require("request");
const cheerio = require("cheerio");
const iconv = require("iconv-lite");

const getNews = () => {
    request(
        {
            url: "https://search.naver.com/search.naver?where=news&query=%EC%9A%94%EC%86%8C%EC%88%98&sm=tab_tmr&nso=so:r,p:all,a:all&sort=0",
            method: "GET",
            encoding: null,
        },
        (error, response, body) => {
            if (error) {
                console.error(error);
                return;
            }
            if (response.statusCode === 200) {
                console.log("response ok");
                const bodyDecoded = iconv.decode(body, "utf-8");
                const $ = cheerio.load(bodyDecoded);

                const list_text_inner_arr = $(
                    ".list_news > li > div > div"
                ).toArray();

                const result = [];
                list_text_inner_arr.forEach((div) => {
                    const aFirst = $(div).find("a.news_tit"); // 첫번째 <a> 태그
                    const path = aFirst.attr("href"); // 첫번째 <a> 태그 url
                    const url = `${path}`; // 도메인을 붙인 url 주소
                    const title = aFirst.text().trim();

                    const aLast = $(div).find("div > div.info_group > a").first(); // <두번째(마지막) <a>태그
                    const author = aLast.text().trim();
                    result.push({
                        url,
                        title,
                        author,
                    });
                });
                console.log(result);
            }
        });
};

getNews();