# Inshorts News API [UNOFFICIAL] 📰

---

#### Inshorts is an app which provides news from different sources and presents them under 60 words. This is an Unofficial API for Inshorts. You can fetch news from multiple different sources as gathered by the inshorts platform. This API Scraps content from the Inshorts website and provides it in easy to use JSON Format.

---

## :card_file_box: News Categories

This API supports category wise news. Here is a complete list of all categories.

1. All
2. National //Indian News only
3. Business
4. Sports
5. World
6. Politics
7. Technology
8. Startup
9. Entertainment
10. Science
11. Automobile
12. Hatke
13. Miscellaneous

#### You can check all the API endpoints here https://inshot.herokuapp.com/

---

## :mag: Usage

Make a `GET`request to the required API endpoint to get the corresponding news in JSON format

```
https://inshot.herokuapp.com/v1/{category}
```

Example - https://inshot.herokuapp.com/v1/all

---

### Response Format

The response JSON Object looks something like this -

```JSON
{
  "category": "all",
    "totalArticles": "51",
    "data": [
        {
            "title": "Will send them tractor: Sonu Sood after farmer forced to use daughters to plough",
            "description": "Sonu Sood has offered help to a farmer, who was forced to use his daughters instead of oxen to pull plough in his fields because of financial crisis due to lockdown in Andhra Pradesh. Sonu first wrote, \"Tomorrow...he'll have a pair of ox.\" \"This family doesn't deserve a pair of ox...They deserve a tractor...Sending you one,\" he later tweeted.",
            "author": "Daisy Mowke",
            "inshortsLink": "https://inshorts.com/en/news/will-send-them-tractor-sonu-sood-after-farmer-forced-to-use-daughters-to-plough-1595763592426",
            "image": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2020/07_jul/26_sun/img_1595762605384_174.jpg?",
            "timeStamp": "2020-07-26T11:39:52.000Z",
            "readMore": "https://m.hindustantimes.com/bollywood/sonu-sood-changes-mind-about-sending-oxen-to-farmer-using-his-daughters-to-plough-fields-they-deserve-a-tractor-sending-one/story-XFkJ9fiDcLdeuYLzPa6v7M_amp.html?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts"
        },
        {
            "title": "You won Oscar, you have more talent than B'wood can handle: Shekhar to Rahman",
            "description": "After singer-composer AR Rahman said that there is a gang spreading rumours about him in Bollywood, filmmaker Shekhar Kapur tweeted, \"You know what your problem is @arrahman? You went and got #Oscars.\" He added, \"An Oscar is the kiss of death in Bollywood. It proves you have more talent than Bollywood can handle.\"",
            "author": "Anmol Sharma",
            "inshortsLink": "https://inshorts.com/en/news/you-won-oscar-you-have-more-talent-than-bwood-can-handle-shekhar-to-rahman-1595767354287",
            "image": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2020/07_jul/26_sun/img_1595766665111_85.jpg?",
            "timeStamp": "2020-07-26T12:42:34.000Z",
            "readMore": "https://twitter.com/shekharkapur/status/1287311995230801920?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts"
        },
  ]
}
```

---

## :construction_worker: Setup

This API is created using puppeteer. You can also use this with serverless funtions such as **Vercel** or **AWS Lambda functions**

### Run locally

- Clone the Repo

```
$ git clone https://github.com/bijankundu/Inshorts-Api.git

$ cd Inshorts-news-api
```

- Install the dependencies

```
npm install
```

- Run the API

```
node index.js
```

> **NOTE:** The data is scraped from the official website of Inshorts, so the response time of API might be slow. The content is copyrighted and isn't recommended for commercial use.

---
