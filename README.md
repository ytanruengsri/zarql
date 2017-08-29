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
http://localhost:4000/v2-graphql
```

**Query:**
```
query {
  article(articleId:"V1021N03I-Q11") {
    ... on InStockArticleType {
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
    ... on OutOfStockArticleType {
      id
      modelId
      name
      shopUrl
    }
  }
  adidasBrand: brand(brandId:"AD1") {
    ...BrandFragment
  }
  nikeBrand: brand(brandId:"NI1") {
    ...BrandFragment
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

fragment BrandFragment on BrandType {
  name
  shopUrl
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
    "adidasBrand": {
      "name": "adidas Originals",
      "shopUrl": "https://www.zalando.co.uk/adidas-originals"
    },
    "nikeBrand": {
      "name": "Nike Sportswear",
      "shopUrl": "https://www.zalando.co.uk/nike-sportswear"
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

## How to define nested schema in javascript?
**Documentation:**
See http://graphql.org/learn/schema/#type-system

**Example:**
See https://github.com/ytanruengsri/zarql/blob/master/src/v2/schema/article.schema.js

## How to create a custom type using `GraphQLScalarType`?
**Documentation:**
See http://graphql.org/graphql-js/type/#graphqlscalartype

## How to request multiple entities in a single query?
```
  query {
    ...
    adidasBrand: brand(brandId:"AD1") {
      name
      shopUrl
    }
    nikeBrand: brand(brandId:"NI1") {
      name
      shopUrl
    }
    ...
  }
```

## How to extract out common fields into a `fragment`?
```
adidasBrand: brand(brandId:"AD1") {
  ...BrandFragment
}
nikeBrand: brand(brandId:"NI1") {
  ...BrandFragment
}

fragment BrandFragment on BrandType {
  name
  shopUrl
}
```

## Questions
**How to request dynamic key?**
See https://github.com/ytanruengsri/zarql/blob/master/src/v2/schema/reviews.schema.js#L12

**Example:**
See https://github.com/ytanruengsri/zarql/blob/master/src/v2/types/url.type.js

## More Information
* [GraphQL Spec](https://facebook.github.io/graphql/)
* [Github GraphQL API](https://developer.github.com/v4/)
* [Zalando Public API](https://github.com/zalando/shop-api-documentation/wiki)
