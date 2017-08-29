# zarql

graphql playground using zalando public api for getting articles

## Installation
Just run
```
$ yarn
```

## Development
Just run
```
$ npm run dev
```

and enjoy ```localhost:4000/v2-graphql```

## Try it out!
```
http://localhost:4000/graphql
```

**Query:**
```
query {
  article(articleId:"V1021N03I-Q11") {
    id
    modelId
    name
    shopUrl
    genders
    ageGroups
    media(types:["MODEL","NON_MODEL"])  {
      images {
        orderNumber
        type
        largeHdUrl
      }
    }
    brand {
      name
      shopUrl
    }
  }
  brand(brandId:"V10") {
    name
    shopUrl
  }
  reviews(articleId:"V1021N03I-Q11") {
    title
    created
    rating
  }
  reviewSummaries(modelId:"V1021N03I") {
    articleModelId
    averageStarRating
    numberOfUserReviews
    numberOfUserRecommendations
    numberOfUserPositiveRecommendations
    articleSizeRatings {
      OVERALL
      LENGTH
      LEG_FIT
      SHOULDERS
    }
  }
  domains(countryCode:"DE") {
    languageCode
    countryCode
  }
}
```

**Response:**
```json
{
  "data": {
    "article": {
      "id": "V1021N03I-Q11",
      "modelId": "V1021N03I",
      "name": "VICOMMIT ZIP COATED - Jeans Skinny Fit - black",
      "shopUrl": "https://www.zalando.de/vila-vicommit-zip-coated-jeans-skinny-fit-black-v1021n03i-q11.html",
      "genders": [
        "FEMALE"
      ],
      "ageGroups": [
        "ADULT"
      ],
      "media": {
        "images": [
          {
            "orderNumber": 1,
            "type": "NON_MODEL",
            "largeHdUrl": "https://i4.ztat.net/large_hd/V1/02/1N/03/IQ/11/V1021N03I-Q11@14.jpg"
          },
          {
            "orderNumber": 3,
            "type": "MODEL",
            "largeHdUrl": "https://i2.ztat.net/large_hd/V1/02/1N/03/IQ/11/V1021N03I-Q11@12.jpg"
          },
          {
            "orderNumber": 4,
            "type": "MODEL",
            "largeHdUrl": "https://i3.ztat.net/large_hd/V1/02/1N/03/IQ/11/V1021N03I-Q11@11.jpg"
          },
          {
            "orderNumber": 5,
            "type": "MODEL",
            "largeHdUrl": "https://i5.ztat.net/large_hd/V1/02/1N/03/IQ/11/V1021N03I-Q11@15.jpg"
          }
        ]
      },
      "brand": {
        "name": "Vila",
        "shopUrl": "https://www.zalando.de/vila"
      }
    },
    "brand": {
      "name": "Vila",
      "shopUrl": "https://www.zalando.co.uk/vila"
    },
    "reviews": [
      {
        "title": "",
        "created": "2017-08-08T05:29:52Z",
        "rating": 4
      },
      {
        "title": "",
        "created": "2017-05-23T04:01:28Z",
        "rating": 4
      },
      {
        "title": "",
        "created": "2017-05-05T14:05:02Z",
        "rating": 5
      },
      {
        "title": "Gut.",
        "created": "2017-03-28T15:07:52Z",
        "rating": 4
      },
      {
        "title": "etwas zu skinny",
        "created": "2017-02-28T10:30:28Z",
        "rating": 1
      },
      {
        "title": "Super Hose",
        "created": "2017-02-21T13:57:34Z",
        "rating": 5
      },
      {
        "title": "Coole Hose",
        "created": "2016-12-01T13:29:02Z",
        "rating": 4
      },
      {
        "title": "Perfekt und sexy",
        "created": "2016-11-12T07:53:36Z",
        "rating": 5
      }
    ],
    "reviewSummaries": {
      "articleModelId": "V1021N03I",
      "averageStarRating": 4.1,
      "numberOfUserReviews": 9,
      "numberOfUserRecommendations": 9,
      "numberOfUserPositiveRecommendations": 0,
      "articleSizeRatings": {
        "OVERALL": 3,
        "LENGTH": 3,
        "LEG_FIT": 3,
        "SHOULDERS": null
      }
    },
    "domains": [
      {
        "languageCode": "de",
        "countryCode": "DE"
      }
    ]
  }
}
```

### Query article
![alt tag](https://raw.githubusercontent.com/ytanruengsri/zarql/master/docs/images/article_query.png)

### Query recommendation
![alt tag](https://raw.githubusercontent.com/ytanruengsri/zarql/master/docs/images/recommendation_query.png)

## More Information
* [GraphQL Spec](https://facebook.github.io/graphql/)
* [Github GraphQL API](https://developer.github.com/v4/)
* [Zalando Public API](https://github.com/zalando/shop-api-documentation/wiki)
